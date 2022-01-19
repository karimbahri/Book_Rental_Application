const express = require('express');
// const expressAsyncHandler = require("express-async-handler");
const userControllers = require('../controllers/userControllers');
const bookControllers = require('../controllers/bookControllers');
const mailRegistrationControllers = require('../controllers/mailRegistrationControllers');
const idsControllers = require('../controllers/idsControllers');

// const reset_settings = require('../controllers/reset-setting');

const routes = express.Router();

// ----------------user crud requests----------------
routes
.get('/api/users', userControllers.findUsers)
.get('/api/users/ids', idsControllers.getIds)
.get('/api/users/:id', userControllers.findUserById)
.put('/api/users/:id', userControllers.updateUser)
.delete('/api/users/:id', userControllers.deleteUser)


// ----------------user connection request----------------

routes
.post('/api/signup', userControllers.createUser)
.post('/api/signin', userControllers.login);
// .put('/api/users-reset/:id', userControllers.reset_settings);

// ----------------book crud request----------------

routes
.post('/api/orderBook', bookControllers.order_book)
.post('/api/renounceBook', bookControllers.renounceBook)
.post('/api/createBook', bookControllers.createBook)
.get('/api/books', bookControllers.findBooks)
.get('/api/myBooks/:userId', bookControllers.findUserBooks);

// ----------------add user request----------------

routes
.post('/api/addUser', mailRegistrationControllers.addUser);

module.exports = routes;
