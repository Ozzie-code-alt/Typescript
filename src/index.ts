// console.log('JS ')

// let age : number = 20;   'annotation Process'

// if(age < 50)
// age+=10
// console.log(age)


// let sales: number = 123_456_789;  // we can remove this annotation as so and will have the same primitive data type present
let sales = 123455;
let course = 'Typescript'
let is_Published  = true
let level; // this is type any  -- best practice avoid this is much as possible 


// one example as to why we should avoid any is because of 

function render (document:any){ // in this case document is any type 
    console.log(document)
}

let collection  = [1,2,'3']  // this is basically the old way of creating an array in js 
// let newArr :number[] = [1,5,6,'Hello world'] // this is TS array typeChecking. 
let anotherNewArr :number[]= [] // this is any you an add anotations here 


// anotherNewArr.forEach(b=> b.) // this will provide emmet abbrev 


// this is how tuples work in TS 

let user : [number, string] = [1, 'justin'] // we first annotate the data type then we add the value next to it. If you add another
// element it will cause a complitaion error
// user. // we can do this to check all methods

console.log(user[0])