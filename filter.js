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


values.filter(function(a){
    if(a<6){
        console.log(a);
    }
})

let object = [
    {
        device:'laptop',
        model:3590
    },
    {
        device:'mobile',
        model:'a04e'
    }
]

object.forEach(
    (a)=>{
        console.log(a.device);
        console.log(a.model);
    }
)

let book_summary = [{
    name:'atomic habits',year:2013,genre:'finance',
},
{
    name:'wuthering heights',year:1934,genre:'history',
},
{
    name:'alice in wonderland',year:2014,genre:'fantasy',
},
    {
        name:' habits',year:2014,genre:'fantasy',
    },
]
let Result = book_summary.filter( (answer)=>answer.genre==='finance');
let Answer = book_summary.filter( (answer)=>answer.year>2013)
let answer = book_summary.filter(function (a){
    return a.year===2014 && a.genre=='fantasy'
})

//console.log(Result);
//console.log(Answer);
console.log(answer);


