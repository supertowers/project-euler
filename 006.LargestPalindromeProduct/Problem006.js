
var Problem = {
    isPalindromic:
        function (number) {

            var strNumber = "" + number;
            var len = strNumber.length;
            for (var i = 0; i < len; i += 1) {
                if (strNumber[i] !== strNumber[len - i - 1]) {
                    return false;
                }
            }

            return true;
        },

    findPalindromicProduct:
        function (limit) {

            var product, a, b;

            a = limit;
            b = limit;

            var superPalindromic = 0;

            while (a > 0)
            {
                while (b > 0)
                {
                    product = a * b;
                    if (this.isPalindromic(product)) {
                        if (product > superPalindromic) {
                            superPalindromic = product;
                            // console.log(a + " x " + b + " = " + product);
                        }
                    }

                    b -= 1;
                }

                a -= 1;
                b = a;
            }

            return superPalindromic;
        },
};

module.exports = Problem;

