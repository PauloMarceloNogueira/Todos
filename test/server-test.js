var chai = require('chai');
var expect = chai.expect;
var config = require('./../Server/config.js');
var server = require('./../Server/server.js');

describe('Config',function(){
  it('Should config is a object',function(){
    expect(config).to.be.an('object')
  })
})

describe('Server',function(){
  it('Should server is a object',function(){
    expect(server.set()).to.be.an('object')
  })
})
