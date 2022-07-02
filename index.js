const app = require('./app');
const PORT = require('./config.js').PORT;

app.listen(PORT, () => {
  console.log('Server started successfully on port ' + PORT);
});
