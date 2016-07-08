var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  description: String,
  deadline: String
});

var Todo = mongoose.model('TODO', TodoSchema);

module.exports = Todo;
