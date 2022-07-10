const BD = require('../models/birthdaysSchema');
const sendMessage = require('./sendMessage');
const CronJob = require('cron').CronJob;
const logger = require('../logger');

function sendNotify(list) {
  sendMessage(list.userID, `‼${list.birthdayBoy} Birthday today‼`);
}

async function notifyService() {
  const today = new Date();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  let peoples;

  try {
    peoples = await BD.find({ birthdayShortDate: `1904-${month}-${day}` });
    peoples.map(sendNotify);
  } catch (e) {
    logger.error(e);
  }
}

notifyService();

// https://www.freecodecamp.org/news/schedule-a-job-in-node-with-nodecron/
const reminder8am = new CronJob('* * 08 * * *', function () {
  notifyService();
});
const reminder12pm = new CronJob('* * 12 * * *', function () {
  notifyService();
});

module.exports = reminder8am;
module.exports = reminder12pm;
