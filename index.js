const app = require('./app');
const PORT = require('./config.js').PORT;

app.listen(PORT, () => {
  console.log('server started successfully');
});

