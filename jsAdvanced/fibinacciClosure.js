function fib(){
    let x = 0;
    let y = 1;
    let sum;
    function nacci(){
        sum = x+y;
        x = y;
        y = sum;
        sum == 1 ? console.log(sum):null;
        console.log(sum);
    }
    return nacci
}

var counter = fib();
for(let n = 0; n < 15; n++){
    counter();
}
