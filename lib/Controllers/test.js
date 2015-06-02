var util = require('util'),
    Base = require('./base'),
    _ = require('lodash'),
    errors = require('../Errors');

var req = { 'claimIdLookup': '100005', 'trxType': 'payment' }
var searchParam = ['claimIdLookup','trxType']


var test =    _.has(req, ['claimIdLookup','trxType'])



var object = { 'a': { 'b': { 'c': 3 } } };
var test2 = _.has(object, ['a', 'b', 'c']);


console.log(test)
    // { claimIdLookup: '100005', trxType: 'payment' }
    // [ 'claimIdLookup', 'trxType' ]
