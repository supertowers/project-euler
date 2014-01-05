
var assert = require("assert");

var problem = new require("./Problem002");

describe('Problem002', function(){
    describe('#fibonacciSumEven()', function(){
        it('should return 12 for values less than 20', function () {
            // 1,1,2,3,5,8,13 = 1,1,3,5,13 = 23
            assert.equal(23, problem.fibonacciSumEven(20));
        });
        it('should return 4 for values less than 9', function () {
            // 1,1,2,3,5,8 = 1,1,3,5 = 10
            assert.equal(10, problem.fibonacciSumEven(9));
        });
        it('should return 4 for values less than 6', function () {
            // 1,1,2,3,5 = 1,1,3,5 = 10
            assert.equal(10, problem.fibonacciSumEven(6));
        });

        // final check
        it('should return 4613732 for values less than 4M', function () {
            // 1,1,2,3,5 = 1,3,5 = 4613732
            assert.equal(4613732, problem.fibonacciSumEven(4000000));
        });
    });
});

