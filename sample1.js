// const arr1 = ['apple', 'oranges' , '', 'mango', '' , 'lemon']


// const arr2 = arr1.map(fun => {
//     if(fun.length==0)
//     return 'empty string'
//     else
//     return fun
// })
// console.log(arr2);
// console.log(arr1);

// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }

const obj1 = { 'key1': 1, 'key2': 2 }
const obj2 = { ...obj1, key1: 1000 }
// console.log(obj1)
// console.log(obj2).

// console.log('a');
// console.log('b');
function printC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve()
        }, 3000)
    })
}
function printD() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('d')
            resolve()
        }, 0)
    })
}
// printC().then(() => {
//     printD().then(() => console.log('e'))
// })

async function go() {
    const pc = ()=>{ return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('c')
            resolve()
        },3000)
    })}
    const pd = ()=>{ return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('d')
            resolve()
        },1000)
    })}
    console.log('a');
    console.log('b');
    let abc = await pc()
    let bcd = await pd()
    console.log('e');
    
}
go();