var readlineSync = require('readline-sync')
const write=require('fs-writefile-promise')
const jsonfile=require('jsonfile')

console.log("FILL THE FORM");
let name,age,phoneno,email,password;
name='gj';
age=25;
email='aaa@gmailcom';
phoneno=10000000000;
password=123456;
 const obj={
     "name":name, "age":age, "email":email,"phoneno":phoneno,"password":password
 }
console.log(obj);
delete obj.name;
obj.name='jaga'

readjson();


async function  readjson()
{
    
    await jsonfile.readFile('studentdata.json')
    .then((result) => { 
        //console.log(result);
        let pos=readlineSync.question('which position you want edit!!,,.. enter it')
        // //delete result[pos];
        let temp=result[pos];
        console.log(temp);
        let del=readlineSync.question('"which u want delete enter the key')
        delete temp[del];
        console.log(temp);
        let key_value=readlineSync.question('which u want to edit enter key')
        let edit_value=readlineSync.question('and then enter updated values')
        temp[key_value]=edit_value;
        result[pos]=temp;
        // for(let x=0; x<result.length;x++)
        // {
        //     console.log("test");
        //     if(temp[x]==key_value)
        //     { console.log("ULLA ........");  }
        // }
        console.log(result.length);
        let array=[];
        array=result;
        console.log(array);
        //array.splice(0,1);
        array.push(obj)
        console.log(array);
        writejson(array);
    }).catch((err) => {
        console.log("FAILED",err);
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