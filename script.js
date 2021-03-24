function myFunction(){
console.log("Hello world");
};

 const botton1=document.querySelector('.botton1');
 const botton2=document.querySelector('.botton2');
 botton1.addEventListener('click',myFunction);
 botton2.addEventListener('click',myAdd);
 const result=document.querySelector('.result');
	
function myAdd(){
var num1= parseInt(document.getElementById("num1").value);
let num2= parseInt(document.getElementById("num2").value);
let total=num1+num2;
alert(total);
result.textContent='total : '+total;
}
