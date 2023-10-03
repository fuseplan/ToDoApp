const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema for todoApp
const TodoAppSchema = new Schema({
    action: {
      type: String,
      required: [true, 'This field is required']
    }
  })
   
  //create model for todoApp
  const TodoApp = mongoose.model('todo', TodoSchema);
   
  module.exports = TodoApp;