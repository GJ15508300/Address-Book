var readlineSync = require('readline-sync')
const write=require('fs-writefile-promise')
const jsonfile=require('jsonfile')

const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}
localStorage.setItem("text", data);
// accessing JSON object
// console.log(data.name); 
// console.log(data.hobby); 
// console.log(data.hobby.sport); 
// console.log(data.class[1]); 
// console.log(data["name"]); 

// // json object
// const jsonData = '{ "name": "John", "age": 22 }';
// const obj = JSON.parse(jsonData);// converting to JavaScript object
// console.log("converting JSON to JS");
// console.log(obj); // accessing the data


// const jsonData1 = { "name": "John", "age": 22 };// JavaScript object
// const obj2 = JSON.stringify(jsonData1);// converting to JSON
// console.log("converting JS to JSON");
// console.log(obj2); /// accessing the data

// const demo=JSON.parse(data);
// console.log(demo);

//console.log(JSON.parse(data.hobby[0]))


// var person = {
//     name: "Brad",
//     age: 35
// }
// jsonPerson = JSON.stringify(person); //convert to JSON
// console.log(jsonPerson.name); //undefined

// jsPerson = JSON.parse(jsonPerson); //convert to JS Object
// console.log(jsPerson.name); //Brad