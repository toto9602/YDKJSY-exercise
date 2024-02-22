function range(start, end) {
    start = +start ? +start : 0;
    
    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);

        }
    }

    return getRange(start, end);

    function getRange(start, end) {
        if (end < start) return [];
        if (start === end) return [start];

        return Array(end-start+1).fill("").map((cur,idx) => {
            return start + idx;
        })
    }
}

console.log(range(3,3));
console.log(range(3,8));
console.log(range(3,0));

var start3 = range(3);
console.log(start3(3))
console.log(start3(8));
console.log(start3(0));

var start4 = range(4);
console.log(start4(6));