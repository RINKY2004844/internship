//javascript program to calculate the area of triangle
let h=20;
let b=10;
let area=(1/2*(b*h));
console.log("area of the traingle is : ", area)

//javascript program to convert celcius to Fahrenheit
let c=20;
let f=((9/5)*c)+32;
console.log("temperature in Fahrenheit is : ",f)

// JavaScript Program to Find the Factorial of a Number
let a=5;
let fact=1;
for (let i =1; i <=a; i++ ){
    fact*=i;    
}
console.log(fact);

/*JavaScript Program to function as Calculator
‘+’ : sum
‘-’  : subtract
‘x’  : multiplication
‘/’   : division
‘%’ : display remainder*/
let char="+";
let d=10;
let e=5;

switch(char){
    case "+":
        console.log(d+e);
        break;
    case "-":
        console.log(d-e);
        break;
    case"*":
        console.log(d*e);
        break;
    case"/":
        console.log(d/e);
    case"%":
        console.log(d%e);
    default:
        console.log("wrong character")
    
}




