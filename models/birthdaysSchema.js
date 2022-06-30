const mongoose = require('mongoose');
const config = require('../config');

const bdSchema = new mongoose.Schema({
  userID: {
    type: String,
    index: true,
    required: true,
  },
  birthdayBoy: {
    type: String,
    index: true,
    required: true,
  },
  birthdayDate: {
    type: String,
    required: true,
  },
});

const bd = mongoose.model('BD', bdSchema);

mongoose.connect(config.DB, () => {
  console.log(`Connected to mongoDB ${config.DB} succesful.`);
});

module.exports = bd;
