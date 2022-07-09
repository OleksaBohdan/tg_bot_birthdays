const BD = require('../models/birthdaysSchema');
const sendMessage = require('./sendMessage');
const mapBdList = require('../mappers/mapBdList');
const logger = require('../logger');

module.exports = async function sendBirthdayList(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;

  if (msg === '/ls') {
    const bdList = await BD.find({ userID: id });
    const formattedbdList = bdList.map(mapBdList);

    try {
    } catch (e) {}

    sendMessage(id, formattedbdList.join('\n'));
    ctx.body = 'ok';
  } else {
    next();
  }
};
