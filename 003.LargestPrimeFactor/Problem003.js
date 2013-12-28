
var Problem = {
    primeFactors:
        function (number) {

            primes = [];
            for (var i = 2; i <= number / (i - 1); i++)
            {
                if (number % i == 0 && this._isPrime(i)) {
                    primes.push(i);
                }
            }

            return primes;
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

