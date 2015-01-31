/*
 * test.js
 */

var domObserver = require('../lib/index.js'),
    expect = require('expect.js');

onload = function () {
    describe('Testing some stuff', function () {
        describe('First test', function () {
            it('domObserver must be an function', function () {
                expect(domObserver).to.be.an('function');
            });
            it('domObserver must return a the string `this is module domObserver`', function () {
                expect(domObserver()).to.be.equal("this is module domObserver");
            });
        });
    });

    setTimeout(function () {
        //mocha.checkLeaks();
        mocha.run();
    }, 1000);
};
