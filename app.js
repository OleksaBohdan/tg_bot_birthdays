const Koa = require('koa');
const Router = require('koa-router');
const sendMessage = require('./services/sendMessage');
const bd = require('./models/birthdaysSchema');
const addBirthdayBoy = require('./services/addBithdayBoy');

const app = new Koa();
const router = new Router();
app.use(require('koa-bodyparser')());

app.use(async (ctx, next) => {
  ctx.body = 'ok';
  console.log(ctx.request.body);
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  console.log(id, msg);

  addBirthdayBoy(id, msg, () => {
    console.log('re');
  });
  await sendMessage(id, msg);
});

app.use(router.routes());

module.exports = app;