const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../logger');

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
    unique: true,
  },
  birthdayDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const BD = mongoose.model('BD', bdSchema);

mongoose.connect(config.DB, () => {
  logger.info(`Connected to mongoDB ${config.DB} succesful.`);
});

module.exports = BD;
