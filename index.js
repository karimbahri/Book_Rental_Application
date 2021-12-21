const express = require('express');
const app = express();
const dotenv = require('dotenv');

const db_connect = require('./server/database/connections');
const routes = require('./server/routes/routes');

dotenv.config({path: "./config.env"});

const PORT = process.env.PORT || 5000;

db_connect();

/* MIDDLEWARES */
app.use(express.json());
app.use('/', routes);
/* MIDDLEWARES */


app.listen(5000, () => {
    console.log(`server running on LocalHost:${PORT}`);
})
