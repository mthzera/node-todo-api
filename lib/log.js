const pino = require('pino');
const pretty = pino.pretty();
pretty.pipe(process.stdout);
const log = pino({
    name: 'todo',
    safe:true
}, pretty);

module.exports = log;