const findTheOldest = function(arr) {
    return arr
    .map(x => {
        x.yearOfDeath === undefined ? x.yearOfDeath = 2024 : x.yearOfDeath = x.yearOfDeath;
        return x;
    })
    .reduce((x, y)=>
        x.yearOfDeath - x.yearOfBirth < y.yearOfDeath - y.yearOfBirth ? y : x, arr[0]);
};


// Do not edit below this line
module.exports = findTheOldest;
