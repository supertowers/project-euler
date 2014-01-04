
var assert = require("assert")

var problem = new require("./Problem005");

describe('Problem005', function(){
    describe('#smallestMultiple()', function(){
        it('should assure that the smallest multiple of 10 is 2520', function () {
            assert.equal(2520, problem.smallestMultiple(10));
        });
    })
})

