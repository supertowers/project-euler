
var Problem = {
    sumSquareDifference: function (countNumbers) {

        var difference, sumSquares = 0, squareSums = 0;

        for (var i = 1; i <= countNumbers; i++)
        {
            sumSquares += (i * i);
            squareSums += i;
        }
        squareSums *= squareSums;


        return squareSums - sumSquares;
    }
};

module.exports = Problem;

