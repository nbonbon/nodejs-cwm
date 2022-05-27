const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

// process.on('uncaughtException', (ex) => {
//     console.log('WE GOT AN UNCAUGHT EXCEPTION');
//     winston.error(ex.message, ex);
//     process.exit(1);
// });

// process.on('unhandledRejection', (ex) => {
//     console.log('WE GOT AN UNHANDLED REJECTION');
//     winston.error(ex.message, ex);
//     process.exit(1);
// });

winston.handExceptions(
    new winston.transports.File({ filename: 'uncaightExceptions.log' }));

process.on('unhandledRejection', (ex) => {
    throw ex;
});

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));