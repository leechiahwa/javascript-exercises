const repeatString = function(string, num) {
    let strings = "";
    if (num < 0)
    {
        strings = "ERROR";
    }
    else
    {
        for (i = 0; i < num; i++)
        {
            strings += string;
        }
    }
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
