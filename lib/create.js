/**
 * Create an instance.
 * @function create
 * @returns {Iftype} - Created instance.
 */

"use strict";

var IfType = require('./iftype');

/** @lends create */
function create(val, type) {
    var iftype = new IfType(val);
    if (arguments.length == 2) {
        return iftype.is(type);
    }
    return iftype;
}

module.exports = create;
