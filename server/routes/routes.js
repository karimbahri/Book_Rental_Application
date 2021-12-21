const express = require('express');
const crudControllers = require('../controllers/controllers');

const routes = express.Router();

routes
.post('/api/users', crudControllers.createUser)
.get('/api/users', crudControllers.findUser)
.post('/api/connect', crudControllers.login);

module.exports = routes;
