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


// Enums 
// const small = 1 
// const medium = 2 
// const large = 3 instead of this we can use enums such as


enum Size {small =1,medium = 8,large =5} //add const to make it more optimized  try and check index.js
let mySize: Size = Size.large

console.log(mySize)


//functions 
// it is best practice to always annotate out parameters and return funciton. we declare it to avoid return any other data type than the set one 
function calculateTax(income: number, taxYear? : number) :number { // we have this error because js always return an undefined in our funciton, we use ? to make an argument optional or put a default value to make it optional
    if ((taxYear|| 2022)< 50_000){
        return income & 1.2
    }
    return income * 1.3
}

calculateTax(10_000, 2025) // in js we can pass more arguments in out function, basically typescript fixes this , what we passed here will overwrite the value of taxYear


//Objects in TS 

let employee: { // this is how we annotate in objects
    readonly id:number, // we can add readonly here to avoid mutations
    name ?:string // we can use the optional feature 
    retire : (date: Date )=> void // this is how we instantiate methods in objects here in TS

} = {id: 1, name: '' , retire:(date: Date) =>{
    console.log(date) // this just logs our date 
}};
// employee.name= 'Justin' this is how we access it 





// with TYPE ALISAS we can do it like object constructor in vanilla js 

type Employee = { // basically this is like a constructor 
    readonly id:number, // we can add readonly here to avoid mutations
    name ?:string // we can use the optional feature 
    retire : (date: Date )=> void // this is how we instantiate methods in objects here in TS
}

let employees: Employee = { // this is how we annotate in objects  , and this is how we Anotate our Employee Object 
 id: 1, 
 name: '' , 
 retire:(date: Date) =>{ // method
    console.log(date) // this just logs our date 
}};



//Union Type 

function kgToLbs(weight: number | string): number{
// Narrowing 
if(typeof weight === 'number')
    return weight * 2.2
else{
    return parseInt(weight) * 2.2
}
}

kgToLbs(90)
kgToLbs('90')


// intersection types basically parang inheritance ot object prototyping 

type Draggrable = {
    drag :() => void
}

type Resizable = {
    resize : () => void
}


type UIWidget = Draggrable & Resizable

let textBox: UIWidget = {
    drag:()=> {},
    resize:()=>{}
}


//Literal Types == we limit the amount of variables 
// Literal(excat, specific)
type Quantity = 50 | 100
let quantity :  Quantity =100;

type Metric  = 'cm' |  'inch' // another way of using it 


// Nullable types -- in out ts config set stricknullchecks to false as TS is very strict with null values

function greet(name:string | null){ // use union here to add null 
    if(name)
    console.log(name.toLowerCase())
    else
        console.log('Hole')
}

greet(null)


//Optional Changing 
type Customer = {
    birthday : Date
}

function getCustomer(id:number) : Customer | null | undefined {// checking if return value returns null or undefined using union 
    return id=== 0 ? null :{birthday: new Date()}
}

let customer = getCustomer(1)

// if(customer !== null && customer !== undefined) we can change this and use the optional property access operator 

    console.log(customer?.birthday?.getFullYear()) // the questionMark here is the optional property access operator

    // optional element access operator  -- this is for arrays basically same approach "?."

    // optional call operator
    let log: any = null;
    log?.('a') // if we call this and run some value it will cause an error since log is null. what we can use here is the optional call operator where
    // this pirce of code will get executed if log is referencing an actual function otherwise undefined