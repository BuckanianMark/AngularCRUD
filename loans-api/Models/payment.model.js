const mongoose = require("mongoose")

const paymentSchema = mongoose.Schema({

    
    PaymentDate:Date,
    paymentStatus:String
})
const paymentModel = mongoose.model("payment",paymentSchema);
module.exports = paymentModel