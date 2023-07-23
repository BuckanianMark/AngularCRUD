const mongoose = require("mongoose")

const invoiceSchema = mongoose.Schema({

    invoiceType:String,
    
})

const invoiceModel = mongoose.model("Invoice", invoiceSchema)
module.exports = invoiceModel;