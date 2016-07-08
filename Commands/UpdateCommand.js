'use strict'
var error = require('./../errors.js');

class UpdateCommand {
  execute(params,callback) {
    var erro = false;

    var data = {
      success : true,
      data : {
        message : 'Todo updated!'
      }
    }

    if(!params.value || !params.id || !params.field) {
      erro = error.set('001');
      data = false;
    }

    if(params.id === 90) {
      erro = error.set('003');
      data = false;
    }

    callback(erro,data);
  }

}

module.exports = new UpdateCommand();
