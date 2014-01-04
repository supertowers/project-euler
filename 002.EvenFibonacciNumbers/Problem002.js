
var Problem = {
    fibonacciSumEven:
        function (maximum) {

            var current = 0, prev = 1, sum = 0;

            do {
                if (current % 2 == 1) {
                    sum += current;
                }

                current += prev;
                prev = current - prev;
            }
            while (current < maximum);

            return sum;
        }
};

module.exports = Problem;

