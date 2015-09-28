/**
 * Type check instance.
 * @constructor Iftype
 * @param {*} value - Value to check.
 */

"use strict";

var typeHits = require('./type/type_hits');

/** @lends Iftype */
function Iftype(val) {
    var s = this;
    s.val = val;
}

Iftype.prototype = {
    /**
     * Detect type matches.
     * @param {string} type
     */
    is: function (type) {
        var s = this;
        return typeHits(s.val, type);
    }
};

module.exports = Iftype;
