const Koa = require('koa');
const Router = require('koa-router');
const config = require('./config');
const addBirthdayBoy = require('./services/addBirthdayBoy');
const sendBirthdayList = require('./services/sendBirthdayList');
const deleteBirthdayBoy = require('./services/deleteBirthdayBoy');
const sendInfo = require('./services/sendInfo');
const sendOk = require('./services/sendOk');

const app = new Koa();
const router = new Router();
app.use(require('koa-bodyparser')());

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = `ok: ${config.TOKEN}`;
});

router.post(`/${config.TOKEN}`, sendOk, sendBirthdayList, deleteBirthdayBoy, sendInfo, async (ctx, next) => {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;
  addBirthdayBoy(id, msg);
  ctx.body = 'ok';
});

app.use(router.routes());

module.exports = app;
