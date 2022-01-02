const express = require('express');
// const expressAsyncHandler = require("express-async-handler");
const userControllers = require('../controllers/userControllers');
const bookControllers = require('../controllers/bookControllers')

const routes = express.Router();

// ----------------user crud requests----------------
routes
.get('/api/user', userControllers.findUser)
.put('/api/users/:id', userControllers.updateUser)
.delete('/api/users/:id', userControllers.deleteUser)

// ----------------user connection request----------------

routes
.post('/api/signup', userControllers.createUser)
.post('/api/signin', userControllers.login);

// ----------------book crud request----------------

// routes
// .get('/api/book')

module.exports = routes;
