const map = new Map()
map.set('name','user');
map.set('age',53);

console.log(map.get('age'));

// using a for of loop on Map

for ([i,value ]of map){
    console.log(i,'-',value);
}

console.log(map.size);

let languages = ['javascript','python','c++','go']

languages.forEach(function (s){
    console.log(s);
})

let values = [1,2,3,4,5,6,7,8,9,10]

let result = values.filter((val)=>(val>5))
console.log(result);






