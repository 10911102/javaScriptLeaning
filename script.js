function myFunction(){
console.log("Hello world");
};

 const botton1=document.querySelector('.botton1');
 const botton2=document.querySelector('.botton2');
 botton1.addEventListener('click',myFunction);
 botton2.addEventListener('click',myAdd);
 const result=document.querySelector('.result');
const botton=document.querySelectorAll('.input');
	
function myAdd(){
var num1= parseInt(document.getElementById("num1").value);
let num2= parseInt(document.getElementById("num2").value);
let total=num1+num2;
setTimeout(function(){ alert("System is slow. Counting"); }, 2000);
setTimeout(function(){ alert("Still Counting"); }, 5000);
setTimeout(function(){callbackExp(total,myCallback);}, 8000);
}

function callbackExp(total,callback){ 
alert("finaly here");
callback(total); 
}

function myCallback(total){
result.textContent='total : '+total;
}


//creating an object(like class)
function Employee(name,salary, experience){
this.name=name;
this.salary=salary;
this.experience=experience;
}

//adding an prototype
Employee.prototype.show=function(){
return `Employee name ${this.name}, having total experience of ${this.experience}`;
}

let emp=new Employee("Swapnil", 33000, 2);
console.log(emp.show());


/*
1.setTimeout()
2.callback()
3.function as parameter
4.creating object
5.setting prototype
6.Math, Date object
7. var(global) let and const (local)
8. localstorage and session storage
*/