var _ = {
    map: function(arr, callBack) {
      let result = [];
      for(var val of arr){
        result.push(callBack(val));
      }
      return result;

    },
    reduce: function(arr, callBack, memo) { 
      for(var val of arr){
        console.log(memo);
        memo = callBack(memo, val)
      }
        return memo;
    },
    find: function(arr, callBack) {   
      for(var val of arr){
          result = callBack(val);
          if(result){return result};
      }
      return result;
    },
    filter: function(arr, callBack) { 
      let ans = [];
      for(var val of arr){
          result = callBack(val);
          if(result){ans.push(result)};
      }
      return ans;
    },
    reject: function(arr, callBack) { 
      let ans = [];
      for(var val of arr){
          result = callBack(val);
          if(!result){ans.push(val)}
      }
      return ans;
    }
  }
 // you just created a library with 5 methods!
 let myArr = [1,5,6,8];

//  let testMap = _.map(myArr, x=>{return x * x});
//  console.log(testMap);

// let testReduce = _.reduce(myArr, (memo, value)=>{return memo + value}, 0);
// console.log(testReduce);

// let testFind = _.find(myArr, (e)=>{return e % 2 == 0 ? e : undefined});
// console.log(testFind);

// let testFilter = _.filter(myArr, (e)=>{return e % 2 != 0 ? e: undefined});
// console.log(testFilter);

let testReject = _.reject(myArr, (e)=>{return e % 2 != 0 ? e: undefined});
console.log(testReject);

