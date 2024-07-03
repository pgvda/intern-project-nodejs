const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    customerId: {
        type: String,
        require: true
    },

    customerName: { 
        type: String, 
        required: true 
    },

    items: [{ 
        type: String, 
        required: true
     }], 

    totalPrice: {
         type: Number, 
         required: true 
    },

    status: { 
        type: String, 
        default: 'Pending' 
    }, 
    // createdAt: { 
    //     type: Date, 
    //     default: Date.now 
    // }

})

const OrderDetails = mongoose.model("OrderDetails", orderSchema);

module.exports = OrderDetails;