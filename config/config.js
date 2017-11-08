'use strict';
const config = {
    port: 1337,
    mongoUrl: process.env.mongoUrl || 'mongodb://admin:admin@ds249605.mlab.com:49605/todo-api'
}


module.exports = config;