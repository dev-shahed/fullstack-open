const personRouter = require('express').Router();
const Phonebook = require('../models/person');
require('express-async-errors');

// Retrieve all persons
personRouter.get('', async (req, res, next) => {
  const persons = await Phonebook.find({});
  res.status(200).json(persons);
});

//retrieve single resource...
personRouter.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const person = await Phonebook.findById(id);
  if (!person) {
    return res.status(404).json({ message: 'Person not found!' });
  }
  res.status(200).json(person);
});

personRouter.delete('/:id', async (request, response, next) => {
  const id = request.params.id;
  const person = await Phonebook.findByIdAndDelete(id);
  if (!person) {
    return response
      .status(404)
      .json({ message: `Person with id ${id} not found!` });
  }
  response.status(204).end();
});

//add a person to phonebook..
//generate random id
const generateId = () => Math.floor(Math.random() * 99999);
const isMissingOrEmpty = (value) => !value || value.trim() === '';

personRouter.post('', async (req, res, next) => {
  const body = req.body;
  if (isMissingOrEmpty(body.name) || isMissingOrEmpty(body.number)) {
    return res.status(400).json({
      error: 'The name or number is missing',
    });
  }

  const personExist = await Phonebook.findOne({ name: body.name });
  if (personExist) {
    return res.status(400).json({ error: 'Name must be unique' });
  }
  const person = new Phonebook({
    name: body.name,
    number: body.number,
    id: generateId(),
  });

  const savedPerson = await person.save();
  res.status(201).json(savedPerson);
});

//update person information..
personRouter.put('/:id', async (request, response, next) => {
  const body = request.body;
  const id = request.params.id;
  const person = {
    name: body.name,
    number: body.number,
  };

  const updatedPerson = await Phonebook.findByIdAndUpdate(id, person, {
    new: true,
  });
  if (!updatedPerson) {
    return response.status(404).json({ error: 'Person not found' });
  }
  response.json(updatedPerson);
});

module.exports = personRouter;
