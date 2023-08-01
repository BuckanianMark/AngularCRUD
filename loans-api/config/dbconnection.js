// PASs = oZ1aAYlTVRJBuh3v
// username = kariukimark115

const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://burky:burky@cluster1.3wfzv5p.mongodb.net/LoanManager?retryWrites=true&w=majority'

const connectDb = async()=>{
   try {
    const conn = await mongoose.connect(MONGO_URI)
    console.log(`DB connected : ${conn.connection.host}`)
   } catch (error) {
    console.log(error)
   } 
}
module.exports = connectDb