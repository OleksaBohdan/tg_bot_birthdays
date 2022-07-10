const BD = require('../models/birthdaysSchema');
const sendMessage = require('./sendMessage');
const mapBdList = require('../mappers/mapBdList');

module.exports = async function sendBirthdayList(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;

  if (msg === '/ls') {
    const bdList = await BD.find({ userID: id });
    if (bdList === null) {
      ctx.body = 'ok';
      sendMessage(id, 'List of people is empty :(');
    } else {
      ctx.body = 'ok';
      const formattedbdList = bdList.map(mapBdList);
      sendMessage(id, formattedbdList.join('\n'));
    }
  } else {
    next();
  }
};
