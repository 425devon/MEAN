let zero_negativity = (arr) =>{
    if(Math.min(...arr) < 0){
        return false;
    }
    return true;
}
// console.log(zero_negativity([1,2,3,4,5]));
// console.log(zero_negativity([1,2,-3,4,5]));

let is_even =(num)=>{
    return num %2 == 0;
}
// console.log(is_even(8));
// console.log(is_even(9));

let how_many_even = (arr) =>{
    let count = 0;
    for(a in arr){
        if(is_even(arr[a])){
            count++;
        }
    }
    return count;
}

//console.log(how_many_even([1,2,3,4,5]));
//console.log(how_many_even([1,2,4,6,8]));

let create_dummy_array = (n) =>{
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor((Math.random() * 10));
    }
    return arr;
}
//console.log(create_dummy_array(20));

let random_choice = (arr) =>{
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(random_choice([12,21,254,68,2]));
