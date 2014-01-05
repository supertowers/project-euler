
var assert = require("assert");

var problem = new require("./Problem006");

describe('Problem006', function(){
    describe('#isPalindromic()', function(){
        it("should return true for a small number", function () {
            assert.equal(true, problem.isPalindromic(3));
        });
        it("should return true for a 2 digit number", function () {
            assert.equal(true, problem.isPalindromic(33));
        });
        it("should return true for a 6 digit number", function () {
            assert.equal(true, problem.isPalindromic(303303));
        });
        it("should return true for a really big number", function () {
            assert.equal(true, problem.isPalindromic(3033844224483303));
        });

        it("should return false for a 2 digit number", function () {
            assert.equal(false, problem.isPalindromic(32));
        });
        it("should return false for a 6 digit number", function () {
            assert.equal(false, problem.isPalindromic(330330));
        });
        it("should return false for a really big number", function () {
            assert.equal(false, problem.isPalindromic(3033484224483033));
        });
    });

    describe('#findPalindromicProduct()', function(){
        it("should return 9 for numbers below 10 (3 x 3 = 9)", function () {
            assert.equal(9, problem.findPalindromicProduct(10));
        });
        it("should return 9009 for numbers below 100", function () {
            assert.equal(9009, problem.findPalindromicProduct(100));
        });
    });

});

