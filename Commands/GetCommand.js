'use strict'
var error = require('./../errors.js');
class GetCommand {
  execute(data,callback) {
    var erro = false;

    var result = {
      name : 'Test',
      description : 'description Test',
      deadline : 'Today'
    };

    var success = true;
    if(!result) {
      erro = error.set('002')
      success = false;
    }


    data = {
      success : true,
      data : result
    };


    callback(erro,data)
  }
}

module.exports = new GetCommand()
