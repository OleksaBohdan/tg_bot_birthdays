const BD = require('../models/birthdaysSchema');
const sendMessage = require('./sendMessage');
const logger = require('../logger');

async function notifyService(ctx, next) {
  const today = Date.now();

  console.log(today);
}
