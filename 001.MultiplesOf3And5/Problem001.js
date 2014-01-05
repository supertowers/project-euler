
var Problem = {
    multiplesOf3Or5: function (amount) {
        var sum = 0;
        for (i = 1; i < amount; i += 1)
        {
            if (i % 5 === 0 || i % 3 === 0)
            {
                sum += i;
            }
        }
        return sum;
    }
};

module.exports = Problem;

