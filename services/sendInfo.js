const sendMessage = require('./sendMessage');

module.exports = async function sendInfo(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;

  const info = `
To add new people send:
  {MMDD} {Name}
  {YYYYMMDD} {Name}\n
To watch list of people send:
  /ls\n
To delete people:
  /d {Name}\n
Bot will remind you:
every 8am and 12pm  
  `;

  if (msg.includes('/info') || msg.includes('/start')) {
    ctx.body = 'ok';
    sendMessage(id, info);
  } else {
    ctx.body = 'ok';
    next();
  }
};
