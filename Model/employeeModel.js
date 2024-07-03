const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    employeeName : {
        type:String,
        require:true
    },

    employeeEmail : {
        type:String,
        require:true
    },

    employeePassowrd : {
        type:String,
        require:true
    }
})

const EmployeeDetails = mongoose.model("EmployeeDetails", employeeSchema);

module.exports = EmployeeDetails;