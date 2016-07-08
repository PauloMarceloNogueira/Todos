'use strict'
var error = require('./../errors.js');
class AddCommand {
  execute(data,callback) {
    var erro = false;
    if(data == '') {
      erro = error.set('001')
    }
    var success = {
      success : true,
      message : 'Added'
    }
    
    callback(erro,success)
  }
}

module.exports = new AddCommand()
