const Customer = require('../Model/customerModel');

exports.getAllCustomers = async () => {
    return await Customer.find();
}

exports.createCustomer = async (customerData) => {
    const customer = new Customer(customerData);
    return await customer.save();
}

exports.deleteCustomer = async (customerId) => {
    try {
        const customer = await Customer.findById(customerId);
        if (!customer) {
          throw new Error('customer not found');
        }
        return customer.deleteOne();
      } catch (error) {
        throw new Error(`Error deleting customer: ${error.message}`);
      }
}

exports.updateCustomer = async (customerId, customerData) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(customerId, customerData, { new: true });
      if (!updatedCustomer) {
        throw new Error('Customer not found');
      }
      return updatedCustomer;
    } catch (error) {
      throw new Error(`Error updating customer: ${error.message}`);
    }
  };