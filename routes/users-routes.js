const usersController = require('../controllers/usersController');
const express = require('express');
const router = express.Router();


router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.get('/all-users', usersController.getAllUsers);

// router.get('/:uid/products', usersController.getUserById);
module.exports = router;