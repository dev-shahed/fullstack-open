const Person = require('../models/person')

const nonExistingId = async () => {
  const person = new Person({ name: 'Will Remove Soon', number: '443-34343232' })
  await person.save()
  await person.deleteOne()

  return person._id.toString()
};

const personsInDb = async () => {
  const persons = await Person.find({})
  return persons.map((person) => person.toJSON())
};

module.exports = {
  nonExistingId,
  personsInDb,
}
