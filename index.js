const app = require('./app');
const config = require('./config.js');
const logger = require('./logger');
const reminder8am = require('./services/notifyService');
const reminder12pm = require('./services/notifyService');

try {
  app.listen(config.PORT, () => {
    logger.info('Server started successfully on port ' + config.PORT);
  });
} catch (e) {
  logger.error(e);
}

try {
  reminder8am.start();
  reminder12pm.start();
} catch (e) {
  logger.error(e);
}

setInterval(() => {
  console.log(0);
}, 5000);
