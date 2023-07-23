const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({

    firstName:String,
    emailadress:String,
    lastName:String,
    phonenumber:String,
    dob:String
})
const customerModel = mongoose.model("Customers",customerSchema);
module.exports = customerModel