/**
 * Test case for iftype.
 * Runs with nodeunit.
 */

var index = require('../lib/index.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['index'] = function (test) {
    test.ok(index(1).is('number'));
    test.ok(!index('foo').is('number'));
    test.ok(!index(123).is('string'));
    test.ok(index('foo').is('string'));
    test.ok(index(function(){}).is('function'));
    test.ok(!index('1234').is('function'));
    test.ok(!index(123).is('function'));
    test.done();
};

