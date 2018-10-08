'use strict';

const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  http = require('http'),
  bodyParser = require('body-parser'),
  sha256 = require('sha256'),
  logger = require('morgan'),
  cors = require('cors'),
  port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BierlyDB');

app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(cors());   // As we are using REACT for this project, a cross origin relational parser may not be required.

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const routes = require('./api/api');
routes(app);

app.listen(port);
console.log(`Connection oppened at port: ${port}`);
console.log("Press Ctrl/Cmd+C to terminate application.");

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
};

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe' + pipe : 'Port' + port;

  switch (error.code) {
    case 'EACCESS':
      console.error(bind + ' requires elevated privvies or an admin account.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' already in use.');
      process.exit(1);
      break;
    default:
      throw error;
      break;
  }
};


function onListening() {

  var addr = server.address();
  var bind = typeof addr === 'string' ? 'Pipe' + addr : 'port' + addr.port;
  debug(`Listening on ${bind}`);
};

module.exports = app;
