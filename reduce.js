let arr = [1,2,3]

const value = arr.reduce(function (acc,val){
    console.log(`acc:${acc} val:${val}`);
    return acc+val
},0)

console.log(value);


let array = [1,2,3,4,5,6]

let result = array.reduce((acc,c_val)=>{
   console.log('acc=',acc,' c_val= ',c_val);
    return acc*c_val

},2)
console.log(result);

let Arr = arr.reduce((acc,cur_val)=>(acc*cur_val),1)
console.log(Arr);