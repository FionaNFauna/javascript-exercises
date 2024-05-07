const reverseString = function(str) {
    const arr = str.split("");
    let out = "";
    for (let i = arr.length-1; i >= 0; i--){
        out += arr[i];
    }
    return out;
};

console.log(reverseString('hello'))

// Do not edit below this line
module.exports = reverseString;
