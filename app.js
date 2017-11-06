const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pino = require('pino')();

const Task = require('./api/models/todoListModels');
const port = process.env.PORT || 1337;


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@ds249605.mlab.com:49605/todo-api');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

pino.info(`todo list RESTful API server started on: ${port}`);
app.listen(port);

module.exports = app;
