'use strict'
var error = require('./../errors.js');

class DeleteCommand {
  execute(params,callback) {
    var data = true;
    var erro = false;
    data = {
      success : true,
      message : 'Todo removed!'
    };

    if(!params) {
      erro = error.set('001');
      data = false;
     }

    callback(erro,data);
  }
}

module.exports = new DeleteCommand();
