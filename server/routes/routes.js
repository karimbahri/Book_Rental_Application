const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const crudControllers = require('../controllers/controllers');

const routes = express.Router();

// ----------------crud requests----------------
routes
.get('/api/user', crudControllers.findUser)
.put('/api/users/:id', apiControllers.updateUser)
.delete('/api/users/:id', apiControllers.deleteUser)

// ----------------connection request----------------

routes
.post('/api/signup', crudControllers.createUser)
.post('/api/signin', crudControllers.login);

module.exports = routes;