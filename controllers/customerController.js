const Customer = require('../Model/customerModel');
const customerService = require('../services/customerService');

exports.getAllCustomers = async (req, res) => {
    try{
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.createCustomer = async (req,res) => {
    try{
        const newCustomer = await customerService.createCustomer(req.body);
        res.status(201).json(newCustomer)
    } catch(error) {
        res.status(500).json ({message : error.message});
    }
}

exports.deleteCustomer = async (req, res) => {
    try{
        const customerId = req.params.id;
        const deleteCustomer = await customerService.deleteCustomer(customerId)
        res.status(200).json(deleteCustomer);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customerData = req.body; 
        const updatedCustomer = await customerService.updateCustomer(customerId, customerData);
        res.status(200).json({ message: 'User updated successfully', Customer: updatedCustomer });
      } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
      }
}