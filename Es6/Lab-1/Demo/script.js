// console.log(x)//
// let x = 1

// let x = 2

// function fun(){
//     //local scope/function scope/private
//     let y = 1
//     var data = 6
// }


// {
//     let test = 'hello'
//     var data = 1
// }
/**
 * outerfun
 * arr = [fun1,fun2,fun3]
 * i=1
 * anonymousfun1()--->i=0---j---->add fun1
 * anonymousfun2()--->i=1-->j---->add fun2
 * anonymousfun3()--->i=2-->j---->add fun3
 * 
 * 
 * scope--i=0---->fun1
 * scope i=1---->fun2
 * scope i=2---->fun3
 */
// function outerfun(){
//     var arr = []
//     for(let i=0;i<3;i++){
//         arr.push((function(){
//             // return function(){
//             console.log(i)
//             // }
//         }))
//     }
//     return arr
// }

// var result = outerfun()
// result[0]()
// result[1]()
// result[2]()

/**---------------------------------------------------- */
//Arrow function/lymbda expression/fat Arrow
// var myfun = (x,y)=> x+y
// var myfun2 =()=>{
//     console.log(this.nm)
// }
// var testfun =function(){
//     console.log(this.nm)
// }
// var obj={
//     nm:'ali',
//     age:20,
//     display:function(){
//         setTimeout(()=>{
//             alert(this.nm)
//         },2000)
//     },
//     fun:myfun2,
//     test:testfun
// }
// // obj.display()
// obj.fun()//undefined
// obj.test()//ali
// // testfun()

function fun(x,y,z,...w){
    var sum =0
    for(var i =3;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
    console.log(w)
    return x+y+z
}

// console.log(fun(1,2,3,4,5,6))
// console.log(fun(1,2,3))

// var arr = [1,2,3,4,5,6,7,8,9,'a','b','c']
// var arr2 = [...arr]

// var obj={
//     nm:'ahmed',
//     age:25
// }
// var obj2={
//     address:"123st",
//     nm:'xyz',
//     ...obj
// }

// function fun(x,y){
//     return x+y
// }

// console.log(fun(...arr))

// // var x = arr[0]
// // var y =arr[1]
// var x,y,z
//  [x,y,,,,,z]=arr
// // var [x,y,,,,,z]="hello world"
// // var [x,y,,,,,z]=obj//Error--object is not iterable

// // var x = obj.nm
// // var y = obj.age
// var x,y,w
//  ({age:y=9,skills:w="6",nm}=obj)


// function Employee(nm,age,address){
//     return {
//         nm,
//         age,
//         address
//     }
// }

// var emp = Employee('ahmed',25,"123st")

// console.log(isNaN('123'))//false
// console.log(isNaN('fsdfdf'))//true
// console.log(isNaN(123))//false

// console.log(isFinite('123'))//true
// console.log(isFinite('sdfdsf'))//false
// console.log(isFinite(1235))//true
// console.log(isFinite(false))//true


// console.log(Number.isFinite('123'))//false
// console.log(Number.isFinite(123))//true

// // console.log(Number.isNaN())

// var x = 'hiii'

// console.log(`    hello world  ${x}   `)
// console.log('    hello world     '.trimEnd()+'.........')
// function fun(){
//     return 1
// }
// console.log(fun``)



function myfun(x=1,y=1,obj){
    var defaultObj={nm:'xyz',age:1}
    // var result = {...defaultObj,...obj}
    var result = Object.assign({testObj:'123'},defaultObj,obj)
    return `sum = ${x+y} and name = ${result.nm} age = ${result.age}`
}

console.log(myfun(1,2,{nm:'ahmed',age:20}))//3
console.log(myfun(1,2,{nm:'ahmed'}))//3
console.log(myfun(1,2,{}))//3
console.log(myfun(1,2,{usrnm:'ali'}))//3
console.log(myfun(1,2,'hello'))//3
// console.log(myfun(1,2,5))//3
// console.log(myfun(1,2))
// console.log(myfun(1))//NaN
console.log(myfun(1,2,null))//NaN
// console.log(myfun(1,2,null))//NaN
// console.log(myfun(true,5))//6
// console.log(myfun(true,"hii"))//truehii
// console.log(myfun(1,'test'))//1test
// console.log(myfun({},{}))//
// console.log(myfun("str",null))//3
// console.log(myfun(undefined,2))//3
























