const BD = require('../models/birthdaysSchema');
const parseDate = require('../controllers/parseDate');
const parseName = require('../controllers/parseName');
const sendMessage = require('./sendMessage');
const logger = require('../logger');

module.exports = async function addBirthdayBoy(clientId, message) {
  const messageArray = message.split(' ');
  let date, name;
  try {
    date = parseDate(messageArray[0]);
  } catch (e) {
    sendMessage(clientId, `${e.message}`);
    logger.error(e);
  }

  try {
    name = parseName(messageArray.slice(1, 4));
  } catch (e) {
    sendMessage(clientId, `${e.message}`);
    logger.error(e);
  }

  if (date != undefined && name != ' ') {
    const shortDate = date.replace(date.substring(0, 4), '1904');
    const birthdayBoy = new BD({
      userID: clientId,
      birthdayBoy: name,
      birthdayDate: date,
      birthdayShortDate: shortDate,
      createdAt: Date.now(),
    });
    try {
      await birthdayBoy.save();
      sendMessage(clientId, `${name} successfully added`);
    } catch (e) {
      if (e.message.includes('E11000')) {
        sendMessage(clientId, `${name} saving failed: name already exist`);
      } else {
        sendMessage(clientId, `${name} saving failed: Input Error`);
      }
      logger.error(e);
    }
  }
};
