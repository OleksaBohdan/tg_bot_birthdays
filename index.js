const app = require('./app');
const config = require('./config.js');
const logger = require('./logger');

try {
  app.listen(config.PORT, () => {
    logger.info('Server started successfully on port ' + config.PORT);
  });
} catch (e) {
  logger.error(e);
}
