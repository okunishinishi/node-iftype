/**
 * Check types
 * @module iftype
 * @version 1.0.0
 */

"use strict";

var IfType = require('./iftype'),
    create = require('./create');

var lib = create.bind();
lib.create = create;
lib.IfType = IfType;
module.exports = lib;
