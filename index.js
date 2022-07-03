const app = require('./app');
const PORT = require('./config.js').PORT;
const logger = require('./logger');

try {
  app.listen(PORT, () => {
    logger.info('Server started successfully on port ' + PORT);
  });
} catch (e) {
  logger.error(e);
}
