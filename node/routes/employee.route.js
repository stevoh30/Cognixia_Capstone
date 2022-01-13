const express = require('express');
const employeeRoute = express.Router();

// routes for backend node

// model
let EmployeeModel = require('../models/Employee');

// Create
employeeRoute.route('/create-employee').post((req, res, next) => {
  EmployeeModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// Find
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

// Update
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

// Delete
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
  EmployeeModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = employeeRoute;