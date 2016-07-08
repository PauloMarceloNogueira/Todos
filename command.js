'use strict'

class Command {
  execute(command,params,callback) {

    var comm = require('./Commands/'+command+'Command.js');
    if(typeof params !== 'undefined' && typeof callback !== 'undefined') {
      return comm.execute(params,callback);
    }
    if(typeof params !== 'undefined' && typeof callback === 'undefined') {
      return comm.execute(params);
    }
    return comm.execute();
  }
}

module.exports = new Command();
