const sumAll = function(beg, end) {
    if  (beg < 0 || end < 0 || typeof beg != "number" || typeof end != "number")    {
        return 'ERROR';
    }
    if  (beg > end) {
        return sumAll(end, beg);
    }
    var out = 0;
    for (let i = beg; i <= end; i++)    {
        out += i;
    }
    return out;
};

// Do not edit below this line
module.exports = sumAll;
