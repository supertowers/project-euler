
var Problem = {
    fibonacciEven: function (number) {

        var current = 1, prev = 1, sum = 1;

        do {
            if (current % 2 == 1) {
                sum += current;
            }

            current += prev;
            prev = current - prev;
        }
        while (current < number);

        return sum;
    }
};

module.exports = Problem;

