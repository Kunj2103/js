//object create by using new keyword

/*var a;
a="Hello!!!";
console.log(a);

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstname = "Mark";
console.log(company["name"]);*/

//object by using literal

/* var facebook = {
	name: "Facebook",
	ceo: {
		firstname : "Mark",
		favcolor : "Blue"
	},
	"stock of company" : 110
};
console.log(facebook.ceo.firstname);*/
/*
console.log('Welcome to console');
let myVar = '34';
myVar = parseFloat('45');
console.log(myVar, typeof myVar);


let number = parseInt('34.222');
console.log(number.toFixed(9), typeof number);


let para = "this is my first js";
console.log(para.indexOf('my')); 
console.log(para.toLowerCase());
console.log(para.endsWith('js'));
console.log(para.substring(4,5));
console.log(para.replace('my','hi'));      


let fruit1 = "Apple";
let fruit2 = "Orange";
let para1 = `Hello ${name}`
<h1> Hello friends </h1>;
*/
// document.body.innerHTML = para1;
// const marks = [12,21,32,64,87];
// console.log(marks);
// let value = marks.indexOf(32);
// console.log(value);

// marks.push(546);
// console.log(marks);
// marks.unshift(100);
// marks.pop();
// marks.shift();
// marks.splice(0,2);
// console.log(marks);


// let link = document.links;
// Array.from(link).forEach(function(element){
// 	if(element.href.includes("#"))
// 		console.log(element.href);
// });

(function (window) {	
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);