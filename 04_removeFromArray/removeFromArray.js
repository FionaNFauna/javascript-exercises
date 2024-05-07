const removeFromArray = function(arr, ...others) {
    var newArry = [];
    for (let i = 0; i < arr.length; i++)    {
        var bool = false;
        for (let j = 0; j < others.length; j++) {
            if  (arr[i] === others[j])   {
                bool = true;
            }
        }
        if  (!bool)  {
            newArry[newArry.length] = arr[i];
        }
    }
    return newArry;
};

// Do not edit below this line
module.exports = removeFromArray;
