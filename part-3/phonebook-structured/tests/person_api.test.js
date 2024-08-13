const { mongoose } = require('mongoose');
const { test, after, beforeEach, describe } = require('node:test');
const supertest = require('supertest');
const app = require('../app');
const assert = require('node:assert');
const data = require('../data.json');
const Person = require('../models/person');
const { log } = require('node:console');
const api = supertest(app);
const helper = require('./test_helper');

describe('when there is initially some contact saved', () => {
  beforeEach(async () => {
    await Person.deleteMany({});
    await Person.insertMany(data);
  });

  test('persons are returned as json', async () => {
    await api
      .get('/api/persons')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all persons are returned', async () => {
    const personAtEnd = await helper.personsInDb();
    assert.strictEqual(personAtEnd.length, data.length);
  });

  test('the first contact is about Anna Franke', async () => {
    const personAtEnd = await helper.personsInDb();
    const contents = personAtEnd.map((person) => person.name);
    assert.strictEqual(contents.includes('Anna Franke'), true);
  });

  describe('viewing a specific contact', () => {
    test('a specific contact can be viewed with valid id', async () => {
      const personAtStart = await helper.personsInDb();
      const personToView = personAtStart[0];
      const thePerson = await api
        .get(`/api/persons/${personToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);
      assert.deepStrictEqual(thePerson.body, personToView);
    });

    test('fails with status code 404 if does not exist', async () => {
      const validNonexistingId = await helper.nonExistingId();
      await api.get(`/api/persons/${validNonexistingId}`).expect(404);
    });

    test('fails with status code 400 if id is invalid', async () => {
      const invalidId = '5a3d5da59070081a82a3445';
      await api.get(`/api/persons/${invalidId}`).expect(400);
    });
  });

  describe('addition of a new contact', () => {
    test('a valid contact can be added', async () => {
      const newContact = {
        name: 'Abul Khan',
        number: '343-53533553',
      };
      await api
        .post('/api/persons')
        .send(newContact)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const personAtEnd = await helper.personsInDb();
      assert.strictEqual(personAtEnd.length, data.length + 1);
      const persons = personAtEnd.map((p) => p.name);
      assert(persons.includes('Abul Khan'));
    });

    test('fails with status code 400 if data invalid', async () => {
      const newContact = {
        number: '343-3353535',
      };
      await api.post('/api/persons').send(newContact).expect(400);
      const personAtEnd = await helper.personsInDb();
      assert.strictEqual(personAtEnd.length, data.length);
    });
  });

  describe('deletion of a contact', () => {
    test('succeeds with status code 204 if id is valid', async () => {
      const personAtStart = await helper.personsInDb();
      if (personAtStart.length === 0) {
        throw new Error('No persons found in DB to delete');
      }
      const personToDelete = personAtStart[0];
      await api.delete(`/api/persons/${personToDelete.id}`).expect(204);
      const personAtEnd = await helper.personsInDb();
      const name = personAtEnd.map((p) => p.name);
      assert(!name.includes(personToDelete.name));
      assert.strictEqual(personAtEnd.length, personAtStart.length - 1);
    });
  });
});

after(async () => {
  await mongoose.connection.close();
});
