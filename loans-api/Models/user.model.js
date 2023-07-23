const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    userName:String,
    userPhone:Number,
    userEmail:String,
    userPassword:Number,

})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel