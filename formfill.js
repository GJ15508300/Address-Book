var readlineSync = require('readline-sync')
const write=require('fs-writefile-promise')
const jsonfile=require('jsonfile');
const { log } = require('console');

console.log("FILL THE FORM");
let name,age,phoneno,email,password;
name='gjjaa';
age=555;
email='aaa@gmailcom';
phoneno=10000000000;
password=123456;
let id;
let obj;
let i=0;
let del_array=[];

    console.log("which operation u wnat do Enter 1.read 2.write 3.delete 4.updates");
    let operasion=readlineSync.question(' ');
    if(operasion==1){
            onlyreadjson();}
    if(operasion==2){     
        read_writejson();}
   if(operasion==3)  {    
    dele();   }
    if(operasion==4){
        editjson()    }













async function editjson()
{
    await jsonfile.readFile('studentdata.json')
    .then((result) => { 
        console.log("success",result);
        let edit_array=result;
        
    }).catch((err) => {
        console.log("FAILED",err);
        return
    });
}

   async function dele()
{
    await onlyreadjson();    
    console.log("Enter id number which u want to delete");
    let del_id=readlineSync.question(' ');
    //console.log(del_array);
    let new_arr=[];
    del_array.map((item,index)=>{
        if(item.id!==Number(del_id))
        {          

            new_arr.push(item);            
        }       
        console.log(item.name);})
        console.log(new_arr);
       // writejson(new_arr);
    // del_array.forEach(myFunction);

    // function myFunction(del_myid,index,delArr) {
    //     if(del_myid==del_id)
    //     delete del_array[index]  
    // }

    //let map = new Map();
    // let map = new Map(Object.entries(del_array));
    // map.delete(del_id)
}

function myobj()
{
 obj={
     "name":name, "age":age, "email":email,"phoneno":phoneno,"password":password,"id":id
 }
}


async function  onlyreadjson(){
    await jsonfile.readFile('studentdata.json')
    .then((result) => { 
        console.log("success",result);
        del_array=result;
    }).catch((err) => {
        console.log("FAILED",err);
        return
    });
}


async function  read_writejson()
{
    
    await jsonfile.readFile('studentdata.json')
    .then((result) => {        
        console.log("success",result.length);
        if(result.length===undefined)
            {
            let array=[];
            id=1;
            myobj();
            console.log("MY OBJECT",obj);            
            array.push(obj);             
             writejson(array);
            }
        else{           
            console.log(result.length);
            id=result.length+1;
            myobj();
            let array=[];
            array=result;
            // console.log("BEFORE PUSH",array);            
            array.push(obj)
            // console.log("AFTER PUSH",array);
            writejson(array);
        }
    }).catch((err) => {
        console.log("FAILED",err);
        return
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





// for(let j=0;j<del_array.length;j++)
//     {
//         if(del_array[j][5]===del_id){
//             console.log("IN IN IN IN IN IN IN IN IN IN");
//         delete del_array[j];}
//     }
// let i=0;
//             while(i==0)
//             {
//             console.log(result);        
//             i=readlineSync.question('if u want to continue to edit enter 0 else enter 1')
//             }

// let pos=readlineSync.question('which position you want edit!!,,.. enter it')
        // // delete result[pos];
        // let temp=result[pos];
        // console.log(temp);
        // let del=readlineSync.question('"which u want delete enter the key')
        // delete temp[del];
        // console.log(temp);
        // let key_value=readlineSync.question('which u want to edit enter key')
        // let edit_value=readlineSync.question('and then enter updated values')
        // temp[key_value]=edit_value;
        // console.log(temp);
        // result[pos]=temp;
        // for(let x=0; x<result.length;x++)
        // {
        //     console.log("test");
        //     if(temp[x]==key_value)
        //     { console.log("inner if ........");  }
        // }
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