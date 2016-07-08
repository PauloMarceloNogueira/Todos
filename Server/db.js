'use strict'
var mongoose = require('mongoose');
var config = require('./config.js');
class DB {
  connect() {
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function() {
      console.log('Connected to MongoDB.')
      // Vamos adicionar nossos Esquemas, Modelos e consultas aqui
    });

    mongoose.connect(config.db.host + config.db.dbname);
  }
}
module.exports = new DB();
