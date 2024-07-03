const Employee = require('../Model/employeeModel');

exports.getAllEmployees = async () => {
    return await Employee.find();
}

exports.createEmployee = async (employeeData) => {
    const employee = new Employee(employeeData);
    return await employee.save();
}

exports.deleteEmployee = async (employeeId) => {
    try {
        const employee = await Employee.findById(employeeId);
        if (!employee) {
          throw new Error('employee not found');
        }
        return employee.deleteOne();
      } catch (error) {
        throw new Error(`Error deleting employee: ${error.message}`);
      }
}

exports.updateEmployee = async (employeeId, employeeData) => {
    try {
      const updateEmployee = await Employee.findByIdAndUpdate(employeeId, employeeData, { new: true });
      if (!updateEmployee) {
        throw new Error('Employee not found');
      }
      return updateEmployee;
    } catch (error) {
      throw new Error(`Error updating Employee: ${error.message}`);
    }
  };