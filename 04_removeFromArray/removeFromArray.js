const removeFromArray = function(array, ...removeNumber) {
    for (i = 0; i < removeNumber.length; i++)
    {
        const index = array.indexOf(removeNumber[i]);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
