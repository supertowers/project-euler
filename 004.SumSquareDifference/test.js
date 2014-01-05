
var assert = require("assert");

var problem = new require("./Problem004");

describe('Problem004', function(){
    describe('#sumSquareDifference()', function(){
        it('should return 2640 as the difference for the first 10 numbers', function () {
            assert.equal(2640, problem.sumSquareDifference(10));
        });
        it('should return 2640 as the difference for the first 3 numbers', function () {
            assert.equal((1+2+3)*(1+2+3)-(1*1+2*2+3*3), problem.sumSquareDifference(3));
        });
    });
});

