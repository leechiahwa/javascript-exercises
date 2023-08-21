const sumAll = function(firstNumber, lastNumber) {
    let result = 0;
    if (firstNumber < 0 || lastNumber < 0 || Number.isInteger(firstNumber) != true || Number.isInteger(lastNumber) != true)
    {
        return 'ERROR';
    }
    else
    {
        if (firstNumber < lastNumber)
        {
            for (i = firstNumber; i <= lastNumber; i++)
            {
                result += i;
            }
        }
        else if (firstNumber > lastNumber)
        {
            for (i = lastNumber; i <= firstNumber; i++)
            {
            result += i;
            }
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;