const axios = require('axios');

module.exports = async function sendMessage(chatID, text) {
  try {
    await axios.post('https://api.telegram.org/bot5588046331:AAGeUZhtgZn0C-QmXrnxuMYU0mruRu_EzRI/sendMessage', {
      chat_id: chatID,
      text,
    });
  } catch (e) {
    consle.log(e);
  }
};


