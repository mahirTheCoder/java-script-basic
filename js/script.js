
// ------------------------alert 
// alert('Hey wellcome java script' )
// alert ()
// confirm ('Do You Like This')
// prompt('Enter Your Number')


// console.log (' hello ')
// console.log ('hello', 'hi')
// console.log ('hello', 'This', 'is', 'me', 'mahir')

// console.log (`this
//   is 
//   java 
//   script`)


  // ------------data type 

// console.log('hello')--------------------string 
// console.log (897546877)------------number
// console.log (135465465415346545645645454)---bigint
// console.log(true, false)----------boolean
 

// -----------------------variable

// var a = 30 -----------var redeclaration working 
var w = 69
// a = 23--------------re assign working 

console.log(w)



// ----------------let variable

let p = 20 
// let a = 23---------------redeclare not working 
p = 54
// a = 34 -------------re assign working 

console.log (p);

// ----------------const variable 
// const x = 20
// console.log (typeof(x)------------------data type cheak number
// )

// const x = true
// console.log (typeof(x)--------------data tupe boolean 
// )


// const x = 'hello'
// console.log (typeof(x))-------------data type string 


const xb = 20
console.log(xb)

// ------------------------arithmatic operator 

let a = 50;
let b = 20;

console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);
console.log (a**b);
console.log (a++);
console.log (++b);



// ------------------------assignment operetor

let x = 5;

x -= 3;
console.log (x);

let d = 5;
d += 4;
console.log (d);


let e = 4;
e /= 2;
console.log (e);

let f = 10;
f %= 3;
console.log (f);

let g = 9;
g *= 2;
console.log (g);



// -------------------compariosn operator 

let num1 = 5;
let num2 = '5';
// --------------------value cheak 
console.log (num1 == num2); 

// -----------------------value and type cheak 
console.log (num1 === num2);

let num3 = 10;
let num4 = 8;
// -------------------- valu soman noy 
console.log (num3 != num4);


let num5 = 100;
let num6 = '100';
// -----------------type and value soman noy 
console.log (num5 !== num6);

let num7 = 50;
let num8 = 70;
// ---------------------choto 
console.log (num7 > num8);
// -----------------------------boro 
console.log (num7 < num8);



let tempereture = 25;
console.log (tempereture >=25);
console.log (tempereture <=20);


//  ------------------------logical Operetor

let age = true;
let old = false;
// ------------------------logical and Operetor
console.log (age && age);
console.log (age && old);
// ------------------------logical OR Operetor
console.log (age || old);

// -------------------logical not Operetor 
console.log (!age);
console.log (!old);


let first = 'Mahir'
let last = 'hossain'
let full = first + '' + last;

console.log (full);



// let boyos = prompt('tomar boyos koto')


// if ( boyos >= 20){
//   let income = prompt('tmr salary koto')
//   if(income >= 50000){
//     console.log('okh fine we are agree')
//   }
//   else{
//     console.log('age income kor pore biya korte ashis')
//   }
//    }
// else{
//   console.log('age boro how')
// }


let boyos = prompt('tomar boyos koto')

if(boyos >= 20){
  let income = prompt('tomar salary koto')
  if(income >= 50000){
    console.log('okh biyate amra raji')
  }
  else{
    console.log('dhuru ai taka diya to amr mey er pani gorom o hbe na')
  }
}
else{
  let kaj = prompt('tumi ki koro')
  if(kaj == 'business'){
    console.log('buh amra sby raji baba')
  }
  else[
    console.log('dhuru beta tui to fokir')
  ]
}

// ----------------------------name function
function myFunction(){
  console.log('this is name function');
}
myFunction()


// -----------------expression functions

let myExpressionfunction = function(){
  console.log('this is expression funtion');
}
myExpressionfunction()

// --------------------arrow functions

// let myarrow = ()=>{
//   console.log('this is arrow funtion')
// }
// myarrow();


// -------------------iife function

// (
//   ()=>{
//     console.log('this is IIFE function')
//   }

// )();


// ------------------------------dom dhora

let alu = document.querySelectorAll('.result');
console.log(alu)


let dim = document.getElementById('result')
console.log(dim)

let peyaj = document.getElementsByClassName('.result')
console.log(peyaj)

let rosun = document.querySelector('.result')
console.log(rosun)

// ------------------------------button

// let button = document.querySelector('button')
// let h2 = document.querySelector('h2');


// button.addEventListener('click' , ()=>{
//   console.log(input.value);
// })

let button = document.querySelector('button')
let h2 = document.querySelector('h2');


button.addEventListener('click' , ()=>{
  console.log('output  ashtese');


  h2.style='color:pink; background:red;'
})













