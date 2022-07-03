const Koa = require('koa');
const Router = require('koa-router');
const logger = require('./logger');
const config = require('./config');
const addBirthdayBoy = require('./services/addBirthdayBoy');

const app = new Koa();
const router = new Router();
app.use(require('koa-bodyparser')());

router.post(config.TOKEN, async (ctx, next) => {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  await addBirthdayBoy(id, msg);
  ctx.body = 'ok';
});

app.use(router.routes());

module.exports = app;
