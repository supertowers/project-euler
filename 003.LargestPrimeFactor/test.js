
var assert = require("assert")

var problem = new require("./Problem003");

describe('Problem003', function(){
    describe('#primeFactors()', function() {
        it('should return the right prime factors for 6', function () {
            assert.equal("2,3", problem.primeFactors(6));
        })
        it('should return the right prime factors for 13195', function () {
            assert.equal("5,7,13,29", problem.primeFactors(13195));
        })
    })
})

