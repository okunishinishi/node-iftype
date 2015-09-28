/**
 * Check types
 * @module iftype
 * @version 1.1.1
 */

"use strict";

var IfType = require('./iftype'),
    is = require('./is'),
    create = require('./create');

var lib = create.bind();
lib.create = create;
lib.IfType = IfType;

lib.is = is;
lib.isString = is.bind('string');
lib.isNumber = is.bind('number');
lib.isObject = is.bind('object');
lib.isArray = is.bind('array');
lib.isFunction = is.bind('function');

module.exports = lib;
