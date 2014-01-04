
var Problem = {
    smallestMultiple:
        function (number) {

            var current = number;
            do {
                found = true;
                for (var i = 1; i < number; i += 1)
                {
                    if (current % i !== 0)
                    {
                        found = false;
                        break;
                    }
                }
                current += number;
            }
            while (!found);

            return current - number;
        },
    _isPrime:
        function (number) {
            for (i = 2; i < number; i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }

            return true;
        }
};

module.exports = Problem;

