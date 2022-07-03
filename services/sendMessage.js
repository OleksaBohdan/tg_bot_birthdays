const axios = require('axios');
const config = require('../config');
const logger = require('../logger');

module.exports = async function sendMessage(chatID, text) {
  try {
    await axios.post(`https://api.telegram.org/bot${config.TOKEN}/sendMessage`, {
      chat_id: chatID,
      text,
    });
  } catch (e) {
    logger.error(e);
  }
};
