const BD = require('../models/birthdaysSchema');
const sendMessage = require('./sendMessage');
const logger = require('../logger');

module.exports = async function deleteBirthdayBoy(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  if (msg.includes('/d')) {
    const msgArrs = msg.split(' ');
    msgArrs.shift();
    const name = msgArrs.join(' ');
    try {
      ctx.body = 'ok';
      await BD.findOneAndDelete({ userID: id, birthdayBoy: name })
        .then((result) => {
          if (result === null) {
            sendMessage(id, `ERROR: ${name} not exist`);
          } else {
            sendMessage(id, `${name} removed succesfuly`);
          }
        })
        .catch((e) => {
          sendMessage(id, `Something went wrong, try again\n${e.message}`);
        });
    } catch (e) {
      ctx.body = 'ok';
      sendMessage(id, `Something went wrong, try again\n${e.message}`);
      logger.error(e);
    }
  } else {
    ctx.body = 'ok';
    next();
  }
};
