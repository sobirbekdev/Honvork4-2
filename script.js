// let ageValue =prompt("Yoshni kriting");

// function yoshniTanlash(str){
// let yosh = [30,20];
// let yoshArray=str.

// }

let elInput1 = document.querySelector("#input1");
let elInput2 = document.querySelector("#input2");
let elBtn = document.querySelector("#btn");
let elEkuk = document.querySelector("#Ekuk");
let elEkub = document.querySelector("#Ekub");


// let value =[20,10,40,10];

// console.log(value.reduce((a,b)=>a+b));

function Ekuk(a,b){
   if(a===0){
    return b;
   }else if(b===0){
    return a;
   }else if(b===a){
    return a;
   }else if(a>b){
    return Ekuk(a-b,b);
   }else{
    return Ekuk(a,b-a);
   }



}
function Ekub(a,b){
  return Math.abs(a*b)/Ekuk(a,b)
}
function EkubEkukFunc(a,b){
  elEkuk.innerHTML = Ekuk (a,b);
  elEkub.innerHTML = Ekub (a,b);
}


































