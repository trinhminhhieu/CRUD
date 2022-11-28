const express = require('express');
const router = express.Router();

const UserController = require('../controller/controller.js')

router.get('/user/:id', UserController.getUser)
router.post('/admin/createuser', UserController.newUser)
router.put('/admin/:id', UserController.updateUser)
router.delete('/admin/:id', UserController.deleteUser)

module.exports = router;