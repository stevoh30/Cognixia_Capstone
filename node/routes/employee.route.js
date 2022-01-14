const express = require('express');
const employeeRoute = express.Router();

// API routes for backend node

// Employee model using the EmployeeSchema in Employee.js
let EmployeeModel = require('../models/Employee');

// Create Employee API route
employeeRoute.route('/create-employee').post((req, res, next) => {
  EmployeeModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
    console.log('Employee successfully created!')
  }
})
});

// Find Employees API route
employeeRoute.route('/').get((req, res, next) => {
    EmployeeModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 // FindById --> Used to edit employees
employeeRoute.route('/edit-employee/:id').get((req, res, next) => {
   EmployeeModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Employee API route
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
  EmployeeModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Employee successfully updated!')
    }
  })
})

// Delete Employee API route
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
  EmployeeModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Employee successfully deleted!')
    }
  })
})

//Export
module.exports = employeeRoute;