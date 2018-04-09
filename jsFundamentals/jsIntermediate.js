let stars = (n) =>{
    str = '*';
    return str.repeat(n);
}
//console.log(stars(8));
let drawStars = (arr) =>{
    for(a in arr){
        if(typeof(arr[a]) == 'string'){
            let temp = (arr[a])
            let res = temp[0].toLowerCase();
            console.log(res.repeat(temp.length));
        }
        console.log(stars(arr[a]));
    }
    return;
}
drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);

