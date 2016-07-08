'use strict'
var error = require('./../errors.js');
var Promise = require("bluebird");
var mongoose = require("mongoose");

class Server {
  set() {
    var fn = {
      error,
      Promise,
      mongoose
  }

    return fn
  }
}

module.exports = new Server();
