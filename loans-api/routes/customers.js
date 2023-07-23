var express = require('express');
var router = express.Router();

const customerModel = require('../Models/customers.model')

// get a single user
router.get('/view', function(req, res, next) {

  userid = req.query.userid

  customerModel.findById(function(err,customerslist){
    if(err){
      res.send({
        status:500,
      message:"unable to find the customer"
    })
    }else{
     
     res.send({
      status:200,
    message:"data retrieved successfully",
    result:customerslist
  })
    }
  })
});



// get all users

router.get('/list', function(req, res, next) {
  customerModel.find(function(err,customerslist){
    if(err){
      res.send({
        status:500,
      message:"unable to find customers"
    })
    }else{
     const count =  customerslist.length
     res.send({
      status:200,
      recordcount:count,
    message:"data retrieved successfully",
    result:customerslist
  })
    }
  })
});



// create user
router.post('/add', function(req, res, next) {

  let firstname = req.body.firstName;
  let lastname = req.body.lastName;
  let emailadress = req.body.emailadress;
  let phonenumber = req.body.phonenumber;
  let dob = req.body.dob;

let ourcustomer = {

  firstName:firstname,
      emailadress:emailadress,
      lastName:lastname,
      phonenumber:phonenumber,
      dob:dob
}

ourcustomer.save( function(err, ourcustomer){
  if(err){
    res.send({
      status:500,
    message:"unable to create customer"
  })
  }else{
    res.send({
      status:200,
    message:"User created successfully",
    customerdetails:ourcustomer
  })
  }
})



});



// delete user
router.delete('/delete', function(req, res, next) {
  userid = req.query.userid

  customerModel.findByIdAndDelete(function(err,customerslist){
    if(err){
      res.send({
        status:500,
      message:"unable to delete the customer"
    })
    }else{
     
     res.send({
      status:200,
    message:"user deleted successfully",
    result:customerslist
  })
    }
  })

 
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

router.put('/update', function(req, res, next ){
  userid = req.query.userid;

  let firstname = req.body.firstName;
  let lastname = req.body.lastName;
  let emailadress = req.body.emailadress;
  let phonenumber = req.body.phonenumber;
  let dob = req.body.dob;

let ourcustomer = {

  firstName:firstname,
      emailadress:emailadress,
      lastName:lastname,
      phonenumber:phonenumber,
      dob:dob
}

  customerModel.findByIdAndUpdate(userid,ourcustomer,function(err,customerslist){
    if(err){
      res.send({
        status:500,
      message:"unable to update the customer"
    })
    }else{
     
     res.send({
      status:200,
    message:"user updated  successfully",
    result:ourcustomer
  })
    }
 
});

})

/* GET users listing. */

module.exports = router;
