const express = require('express');
const cors = require('cors');
const apiRouter = require('../app/routes/v1/api');
const config = require('../app/config');

const startServer = () => {
  const application = express();
  application.listen(config.port, (err) => {
    if (err) {
      process.exit(1);
    }
    console.log('server is up on', config.port);
  });
  return application;
};

module.exports = () => {
  const app = startServer();
  app.use(cors());
  app.use(express.json());
  app.use(apiRouter);
  return app;
};
