const mongoose = require('mongoose');

// Define the schema and model..
const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [5, 'Name must be at least 5 characters long'],
    unique: true,
  },
  number: {
    type: String,
    required: [true, 'Number is required'],
    validate: {
      validator: function (v) {
        return /^\d{2,3}-\d+$/.test(v) && v.replace('-', '').length >= 8;
      },
      message: (props) =>
        `${props.value} is not a valid phone number! It should be in the format XX-XXXXXXX or XXX-XXXXXXX and at least 8 characters long.`,
    },
  },
});

//modify the json output _id change to id and delete __v
phonebookSchema.set('toJSON', {
  transform: (doc, objReturn) => {
    objReturn.id = doc._id.toString();
    delete objReturn._id;
    delete objReturn.__v;
    return objReturn;
  },
});

module.exports = mongoose.model('Person', phonebookSchema);
