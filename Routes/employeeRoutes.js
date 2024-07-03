const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeContoller');

router.get('/show/employee', employeeController.getAllEmployees);
router.post('/add/employee', employeeController.createEmployee);
router.delete('/delete/employee/:id', employeeController.deleteEmployee);
router.put('/update/employee/:id', employeeController.updateEmployee);

module.exports = router;