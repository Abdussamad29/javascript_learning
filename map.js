// 

// let each = arr.forEach(function(b){
//     console.log(b+10); 
// })
// console.log(each);


let values = [4,9,16,25,36,49]
let root = values.map( (a)=>Math.sqrt(a))
//console.log(root);
// output [ 2, 3, 4, 5, 6, 7 ]

let sqrt = [64,81,100,121,144]
let result = sqrt.map(function (val){
    return Math.sqrt(val)
 
})

//console.log(result);

let arr = [1,2,3,4,5,6,7,8,9,10]

let total = arr.map((a)=>(a*10)).map((a)=>(a+10))
.filter((a)=>a>40)

console.log(total);



