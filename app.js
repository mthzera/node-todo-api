const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const Task = require('./api/models/todoListModels');
const routes = require('./api/routes/todoListRoutes');
const log = require('./lib/log');

const port = process.env.PORT || config.port;

mongoose.connect(config.mongoUrl || process.env.mongoUrl);

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());


routes(app);

app.listen(port);
log.info(`todo list RESTful API server started on: ${port}`);


module.exports = app;
