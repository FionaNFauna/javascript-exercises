const palindromes = function (str) {
    const arr = str.toLowerCase().replace(/[^A-Z0-9]/ig, "").split("");
    const mid = arr.length%2 == 0 ? arr.length/2 : Math.floor(arr.length/2);
    for (let i = 0; i <= mid; i++)   {
        if  (arr[i] != arr[arr.length - i-1]) {
            return false;
        }
    }
    return true;
};

// console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;
