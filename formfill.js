var readlineSync = require('readline-sync')
const write=require('fs-writefile-promise')
const jsonfile=require('jsonfile')

console.log("FILL THE FORM");
let name,age,phoneno,email,password;
name=nameCheck();
age=ageCheck();
email=mailIdCheck();
phoneno=phonenoCheck();
password=passwordCheck();
const obj={
    "name":name, "age":age, "email":email,"phoneno":phoneno,"password":password
}
readjson();


async function  readjson()
{
    console.log(" Entery");
    await jsonfile.readFile('studentdata.json')
    .then((result) => { 
        let array=[];      
        array=result;
        array.push(obj)
        console.log(array);
        writejson(array);
    }).catch((err) => {
        console.log("FAILED");
    });
}

function writejson(array)
{
write('studentdata.json', JSON.stringify(array) )
.then((result) => {
    console.log(" SUCESS");

}).catch((err) => {
    console.log("FAILED");
});
}




function phonenoCheck()
{
    let i=1;
    while(i==1){
    var ctrl = readlineSync.question('enter Phone Number');
    var regex = /^[0-9]{10,11}$/;    
    var test = regex.test(ctrl);    
    if (test==true)
    {
        i=0;
        return ctrl
    }
    else{
        console.log("INVALID Phone Number___________------------AGAIN ENTER Phone Number");
    }
}
}
    
function ageCheck()
{

    let i=1;
    while(i==1){
    var ctrl = readlineSync.question('enter Age');
    var regex = /^[0-9]{1,3}$/;    
    var test = regex.test(ctrl);
    if (test==true)
    {
       i=0;
       return ctrl
    }
    else{
        console.log("INVALID age___________------------AGAIN ENTER AGE");
    }
}
}



function nameCheck()
{
    let i=1;
    while(i==1){
    var ctrl = readlineSync.question('enter Name');
    var regex = /^[a-zA-Z][a-zA-Z\s]{2,30}$/;    
    var test = regex.test(ctrl);    
    if (test==true)
    {
         i=0;
         return ctrl
    }
    else{
        console.log("INVALID NAME _____----AGAIN ENTER NAME");
    }
}
}


function mailIdCheck()
{
let i=1;
while(i==1)
{
    var mail = readlineSync.question('enter mail Id');    
    var pattern = new RegExp (/^[a-zA-Z][a-zA-Z0-9-_.?]+@[a-zA-Z]*.[a-zA-Z]{2,3}.[a-zA-Z]{2,3}$/);
    var check;    
    check=pattern.test(mail)
    if(check==true)
    {
        i=0;
        return mail
    }
    else
    {
        console.log("INVALID_________-------Again Enter Mail Id");
        i=1;
    }
}
}

function passwordCheck()
{  
let i=1;
    while(i==1)
    { 
    var newPassword = readlineSync.question('enter password');
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    //var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var regularExpression = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var check=regularExpression.test(newPassword); 
    if(check==true)
    {       
        i=0;
        return newPassword;    
    }
    else
    {
        console.log("INVALID PASSWORD______----password should contain atleast one number and one special character");
    }
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars)
    {
        console.log("not a good password");
    }
    }
}