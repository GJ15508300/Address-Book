var readlineSync = require('readline-sync')
console.log("FILL THE FORM");
let name,age,phoneno,email;
name=nameCheck();
email=mailIdCheck();
age=ageCheck();
phoneno=phonenoCheck();

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
    }
    else{
        console.log("INVALID Phone Number");
        console.log("AGAIN ENTER Phone Number");
    }
}
}
    
function ageCheck()
{

    let i=1;
    while(i==1){
    var ctrl = readlineSync.question('enter Age');
    var regex = /^[0-9]{2}$/;    
    var test = regex.test(ctrl);
    if (test==true)
    {
       i=0;
    }
    else{
        console.log("INVALID age");
        console.log("AGAIN ENTER AGE");
    }
}
}



function nameCheck()
{
    let i=1;
    while(i==1){
    var ctrl = readlineSync.question('enter Name');
    var regex = /^[a-zA-Z]{2,30}$/;    
    var test = regex.test(ctrl);    
    if (test==true)
    {
         i=0;
    }
    else{
        console.log("INVALID NAME");
        console.log("AGAIN ENTER NAME");
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
    }
    else
    {
        console.log("INVALID");
        console.log("Again Enter Mail Id");
        i=1;
    }
}
}