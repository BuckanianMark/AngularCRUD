const mongoose = require("mongoose")

const LoanSchema = mongoose.Schema({

    LoanName:String,
    loanType:String,
    LoanAmount:Number,
    LoanIssueDate:Date,
    LoanStatus:String
})
const LoanModel = mongoose.model("Loans",LoanSchema);
module.exports = LoanModel