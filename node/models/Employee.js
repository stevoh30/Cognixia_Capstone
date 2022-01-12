const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  department: {
    type: String
  },
  salary: {
    type: String
  },
  location: {
    type: String
  }
}, {
  collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema)