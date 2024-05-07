const fibonacci = function(num) {
    var one = 1;
    var two = 1;
    var curr = 2;
    if  (num < 0)   {
        return 'OOPS';
    }
    if  (num == 0)  {
        return 0;
    }
    if  (num == 1 || num === 2) {
        return 1;
    }
    while   (curr != num)   {
        var temp = two;
        var two = one + two;
        var one = temp;
        curr++;
    }
    return two;
};

// console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
