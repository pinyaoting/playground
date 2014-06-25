/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true*/

var expect = require('chai').expect,
    test = require('../src/bst.js');

describe('BST', function () {
    var module, result;

    beforeEach(function () {
        module = test();
    });

    afterEach(function () {
        delete module;
    });

    it('should store data', function (done) {
        module.insert(1);
        module.insert(2);
        module.insert(3);

        result = module.search(1);
        expect(result).to.be.an('object');
        expect(result.data).to.equal(1);
        result = module.search(2);
        expect(result).to.be.an('object');
        expect(result.data).to.equal(2);
        result = module.search(3);
        expect(result).to.be.an('object');
        expect(result.data).to.equal(3);
        done();
    });

    it('should not store duplicate data', function (done) {
        result = module.search(1);
        expect(result).to.be.null;
        expect(module.insert(1)).to.equal(true);
        expect(module.insert(1)).to.equal(false);
        done();
    });
});
