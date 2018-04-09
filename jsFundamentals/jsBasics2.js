function magic_multiply(x, y){
    if( x == 0 && y == 0){
        return ("All inputs 0");
    }
    if( Array.isArray(x)){
       for(let i = 0; i < x.length; i++){
           x[i] = x[i] * y;
       }
       return x; 
    }
    if(typeof(y) == 'string'){
        return ("cannot multiply strings!");
    }
    if(typeof(x) == 'string'){
        return x.repeat(y);
    }
    return x * y;
}

console.log(magic_multiply(5, 2));
console.log(magic_multiply(0, 0));
console.log(magic_multiply([1,2,3], 2));
console.log(magic_multiply(7, "three"));
console.log(magic_multiply("brendo", 4));