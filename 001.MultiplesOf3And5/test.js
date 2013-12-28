
var assert = require("assert")

var problem = new require("./Problem001");

describe('Problem001', function(){
    describe('#multiplesOf3Or5()', function(){
        it('should return 23 for all multiples below 10', function(){
            assert.equal(23, problem.multiplesOf3Or5(10));
        })
    })
})

