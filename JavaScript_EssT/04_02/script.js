function findBiggestFration(a,b){
    var result
    a>b ? result = ['a', a]: result = ['b', b];
    return result;
}

var a = 3/4;
var b = 5/3

const result = findBiggestFration(a,b);
console.log(result);
