const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema object
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
  // database collection to store documents
  collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema)