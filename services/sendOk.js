const sendMessage = require('./sendMessage');

module.exports = async function sendOk(ctx, next) {
  if (ctx.request.body.edited_message) {
    ctx.body = 'ok';
    sendMessage(ctx.request.body.edited_message.from.id, 'Error: you cannot edit message');
  } else {
    ctx.body = 'ok';
    next();
  }
};

// save bot
