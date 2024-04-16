import {obj1, obj2, obj3} from '../data/data.js'
import {f1,f2,f3} from '../utiilis/utiilis.js'


const res1 = f1(obj1)
console.log("f1",obj1)

const res2 = f2(obj1)
console.log("f2",res2)

const res3 = f3(obj2)
 res3.forEach(e => {
    console.log("f3", e)
 });

 const res4 = f3(obj2)
 console.log("F4", res4)