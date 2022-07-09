const sendMessage = require('./sendMessage');
const logger = require('../logger');

module.exports = async function sendInfo(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;

  const info = `
To add new people:
  {MMDD} {Name}
  {YYYYMMDD} {Name}\n
To watch list of people:
  /ls\n
To delete people:
  /d {Name}
  `;

  if (msg.includes('/info')) {
    ctx.body = 'ok';
    sendMessage(id, info);
  } else {
    ctx.body = 'ok';
    next();
  }
};
