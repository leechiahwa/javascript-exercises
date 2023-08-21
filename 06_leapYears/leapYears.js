const leapYears = function(years) {
    if (years % 4 === 0 && years % 100 != 0)
    {
        isLeapYears = true;
    }
    else if (years % 100 === 0 && years % 400 === 0)
    {
        isLeapYears = true;
    }
    else
    {
        isLeapYears = false;
    }
    return isLeapYears;
};

// Do not edit below this line
module.exports = leapYears;
