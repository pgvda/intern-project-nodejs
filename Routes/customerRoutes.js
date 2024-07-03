const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/show/customer', customerController.getAllCustomers);
router.post('/add/customer',customerController.createCustomer);
router.delete('/delete/customer/:id', customerController.deleteCustomer);
router.put('/update/customer/:id', customerController.updateCustomer);


module.exports = router;