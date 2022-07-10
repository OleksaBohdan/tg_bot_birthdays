const Koa = require('koa');
const Router = require('koa-router');
const config = require('./config');
const addBirthdayBoy = require('./services/addBirthdayBoy');
const sendBirthdayList = require('./services/sendBirthdayList');
const deleteBirthdayBoy = require('./services/deleteBirthdayBoy');
const sendInfo = require('./services/sendInfo');

const app = new Koa();
const router = new Router();
app.use(require('koa-bodyparser')());

router.post(`/${config.TOKEN}`, sendBirthdayList, deleteBirthdayBoy, sendInfo, async (ctx, next) => {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  addBirthdayBoy(id, msg);
  ctx.body = 'ok';
});

app.use(router.routes());

module.exports = app;
