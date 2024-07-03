const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({

    menuName : {
        type:String,
        require:true
    },

    menuPrice : {
        type:String,
        require:true
    }
})

const MenuDetails = mongoose.model("MenuDetails", menuSchema);

module.exports = MenuDetails;