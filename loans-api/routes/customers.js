var express = require('express');
var router = express.Router();

const customerModel = require('../Models/customers.model');
const { async } = require('rxjs');

// get a single user
router.get('/view', async function(req, res, next) {

  const userid = req.query.userid;

  const foundcustomer = await customerModel.findById(userid);
   try {
    res.send({
      status:200,
      message:"data retrieved successfully",
      result:foundcustomer
 })
   } catch (error) {
    res.send({
      status:500,
      message:"unable to find the customer"
    })
   }
  
});



// get all users


router.get('/all', async function(req,res,next){
  const allcustomers = await customerModel.find()
  try {
    const count =  allcustomers.length
    res.send({
      status:200,
      recordcount:count,
      message:"data retrieved successfully",
      result:allcustomers
    })
  } catch (error) {
    res.send({
      status:500,
      message:"Unable To find Customers"
    })
  }
 
})



// create user
router.post('/add', function(req, res, next) {

//   let firstname = req.body.firstName;
//   let lastname = req.body.lastName;
//   let emailadress = req.body.emailadress;
//   let phonenumber = req.body.phonenumber;
//   let dob = req.body.dob;

// let ourcustomer = {

//   firstName:firstname,
//       emailadress:emailadress,
//       lastName:lastname,
//       phonenumber:phonenumber,
//       dob:dob
// }

// ourcustomer.save( function(err, ourcustomer){
//   if(err){
//     res.send({
//       status:500,
//     message:"unable to create customer"
//   })
//   }else{
//     res.send({
//       status:200,
//     message:"User created successfully",
//     customerdetails:ourcustomer
//   })
//   }
// })

let customerObj = new customerModel({
  firstName: 'Robert',
  emailadress:'alvaro214@gmail.com',
  lastName:'Maina',
  phonenumber:'+2547868954678',
  dob:'15-08-2000'
})
// save(function(err,customerObj){
//   if(err){
//     res.send.status(500).json({
//       status:'failed',
//       message:'Unable to add customer'
//     })
//   }else{
//     res.send.status(200).json({
//       status:'success',
//       message:'Customer Added successfuly',
//       customerdetails: customerObj
//     })
//   }
// })
customerObj.save()
.then(function(customerObj){
  res.status(200).json({
    status:'success',
    message:'Customer Added successfuly',
    customerdetails: customerObj
}).catch(function(err){
  res.status(500).json({
    status:'failed',
    message:'Unable to add customer'
})
})
})
})


// delete user
router.delete('/delete', async function(req, res, next) {
  const userid = req.query.userid

  const deletedcustomer = await customerModel.findByIdAndDelete(userid);
  try {
    res.send({
      status:200,
      message:"Customer deleted successfully",
      result:deletedcustomer
  })
    
  } catch (error) {
    res.send({
      status:500,
    message:"Unable to delete the customer"
  })
  }
});

// delete multiple-user
router.delete('/delete-multiple', function(req, res, next) {
  userid = req.query.userid

  customerModel.deleteMany('first-name')(function(err,customerslist){
    if(err){
      res.send({
        status:500,
      message:"unable to delete the customers"
    })
    }else{
     
     res.send({
      status:200,
    message:"users deleted successfully",
    result:customerslist
  })
    }
  })

 
});
// update user

router.put('/update',async function(req, res, next ){
  const userid = req.query.userid;

  let firstname = req.body.firstName;
  let lastname = req.body.lastName;
  let emailadress = req.body.emailadress;
  let phonenumber = req.body.phonenumber;
  let dob = req.body.dob;

let newcustomer = {

      firstName:firstname,
      emailadress:emailadress,
      lastName:lastname,
      phonenumber:phonenumber,
      dob:dob
}

 let ourupdatedcustomer = await customerModel.findByIdAndUpdate(userid,newcustomer);
 try {
  res.send({
    status:200,
  message:"user updated  successfully",
  result:ourupdatedcustomer
})
 } catch (error) {
  res.send({
    status:500,
    message:"unable to update the customer",error
});
 
    }
  })




/* GET users listing. */

module.exports = router
