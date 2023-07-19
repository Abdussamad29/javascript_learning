const map = new Map()
map.set('name','user');
map.set('age',53);

console.log(map.get('age'));

// using a for of loop on Map

for ([i,value ]of map){
    console.log(i,'-',value);
}

console.log(map.size);



