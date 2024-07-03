const Employee = require('../Model/employeeModel');
const employeeService = require('../services/employeeService');

exports.getAllEmployees = async (req, res) => {
    try{
        const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

exports.createEmployee = async (req,res) => {
    try{
        const newEmployee = await employeeService.createEmployee(req.body);
        res.status(201).json(newEmployee)
    } catch(error) {
        res.status(500).json ({message : error.message});
    }
}

exports.deleteEmployee = async (req, res) => {
    try{
        const employeeId = req.params.id;
        const deleteEmployee = await employeeService.deleteEmployee(employeeId)
        res.status(200).json(deleteEmployee);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employeeData = req.body; 
        const updateEmployee = await employeeService.updateEmployee(employeeId, employeeData);
        res.status(200).json({ message: 'Employee updated successfully', Employee: updateEmployee });
      } catch (error) {
        res.status(500).json({ message: 'Error updating Employee', error: error.message });
      }
}