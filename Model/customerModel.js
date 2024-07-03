const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    customerName : {
        type:String,
        require:true
    },

    customerEmail : {
        type:String,
        require:true
    },

    customerPassowrd : {
        type:String,
        require:true
    }
})

const CustomerDetails = mongoose.model("CustomerDetails", customerSchema);

module.exports = CustomerDetails;