const Koa = require('koa');
const Router = require('koa-router');
const sendMessage = require('./services/sendMessage');

const app = new Koa();
const router = new Router();
app.use(require('koa-bodyparser')());

app.use(async (ctx, next) => {
  ctx.body = 'ok';
  console.log(ctx.request.body);
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  console.log(id);
  await sendMessage(id, msg);
});

app.use(router.routes());

module.exports = app;

// https://api.telegram.org/bot5588046331:AAGeUZhtgZn0C-QmXrnxuMYU0mruRu_EzRI/sendMessage
