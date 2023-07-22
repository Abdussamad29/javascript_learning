let arr = [1,2,3,4,5,6]

let total = arr.reduce((acc,cur_val)=>(acc+cur_val),0)
//console.log(total);

let result = arr.reduce((acc,val)=>{
    console.log(`acc=${acc} current value = ${val}`);
    return acc*val
},1)
console.log(result);


//chaining 

let map = arr.map((a)=>(a+10)).map((b)=>(b*4)).filter((c)=>(c>55))
console.log(map);


let cart = [{
        course:"reactjs",
        price:699
},
{
    course:"react-native",
        price:499

},
{
    course:"python",
        price:999
}]

let all_total = cart.reduce((acc,c)=>acc+c.price,0)
console.log(all_total);