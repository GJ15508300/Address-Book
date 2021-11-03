var readlineSync = require('readline-sync')
const write=require('fs-writefile-promise')
const jsonfile=require('jsonfile');
const { log } = require('console');

console.log("FILL THE FORM");
let name,age,phoneno,email,password;

function inputdata()
{
    console.log("U3ser Data");
name=nameCheck();
age=ageCheck();
email=mailIdCheck();
phoneno=phonenoCheck();
password=passwordCheck();
}
let id;
let obj;
let i=0;
let point_array=[];
var exit_check=1;
operation_list();
var operasion;
async function operation_list()
{
    
while(exit_check==1)
{
    
    console.log("which operation u wnat do Enter 1.read 2.write 3.delete 4.updates 5.Search 6.sort assending order");
    operasion=readlineSync.question(' ');
    if(operasion==1){
        await onlyreadjson();}
    if(operasion==2){ 
        inputdata();    
        await read_writejson();}
   if(operasion==3)  {    
    await       dele();   }
    if(operasion==4){
        await   editjson();    }
        if(operasion==5)
        {            await searchjson();        }
        if(operasion==6)
        {            await sortjson();        }

        console.log("^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-");
    exit_check=readlineSync.question('do u continue enter 1 else exit');
}
console.log("-------------------------------------END FILE-------------------------------------");
}

async function sortjson()
{
    await readjson(); 
    let sort_array=[];
    await point_array.map((item,index)=>
    {
        sort_array.push(item);
    })

    
    console.log("------------STORED JSON FILE------------",sort_array);
    console.log("sort an element by which key based???...1.name  3.Id ")
    let sort_basedon=readlineSync.question(' ');
    if(sort_basedon==1)
    {
        sort_array.sort(GetSortOrder("name") );

        for (var item in sort_array) {    
            console.log(sort_array[item].name);  } 
    }
    // else if(sort_basedon==2)
    // {
    //     sort_array.sort(GetSortOrder("age")  );
    // }
    else if(sort_basedon=3)
    {
        sort_array.sort(GetSortOrder("id")  );
    }
    
    console.log("------------ASSENDING ORDER------------",sort_array);



    console.log("If u eant to sort in DECENDING order Enter -----> '1' ");
    let dece=readlineSync.question('');
    if(dece==1)
    {
        sort_array.reverse();
        console.log("------------IN DECENDING ORDER------------",sort_array);

    }
   
    console.log("If u want to UPDATE sord array enter '1' else exit to NON-UPDATE sord array in JSON file");
    let update_sort=readlineSync.question('');
    if(update_sort==1){
    writejson(sort_array);}
}



function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }   
}



var search_id;
let search_array=[];

async function searchjson(){

    await readjson(); 
    console.log(" Number of ID in files");
    for (var item in point_array) {    
    console.log(point_array[item].id); }

    console.log("Enter 'name' or 'id' or 'age'  to search result");
    search_id=readlineSync.question(' ');
    await point_array.map((item,index)=>
    {
        search_array.push(item);
    })
    //console.log(" search_array",search_array);
    search_array.map((item1,index)=>{
        
        if(item1.id===Number(search_id))
        { 
            console.log("My Search ID datas-^-^-^-^-^--^-^-^-^-",item1);
        } 
        else if(item1.name===(search_id))
        { 
            console.log("My Search ID datas-^-^-^-^-^--^-^-^-^-",item1);
        } 
        else if(item1.age===(search_id))
        { 
            console.log("My Search ID datas-^-^-^-^-^--^-^-^-^-",item1);
        } 
        
     })
    // const my_search_id = search_array.filter(element => element === search_array.id);
 
    // console.log("my_search_id",my_search_id);
}

async function editjson()
{
    await readjson(); 
    console.log(" Number of ID");
    for (var item in point_array) {    
    console.log(point_array[item].id); }  
    console.log("Enter id number which u want to edit");
    let edit_id=readlineSync.question(' ');   
    // Object.values(point_array).map((item,index)=>{
    //     console.log("My keys---",item);
    // })
    point_array.map((item1,index)=>{
        if(item1.id===Number(edit_id))
        {    
            console.log(item1);
            console.log("if u want to edit 1st enter the 'key values enter that key' and then enter changed values");
            console.log("item1.name",[item1.name]);
            let edit_key_values=readlineSync.question('Enter the key values which u want to edit ');
            let changed_values=readlineSync.question('Enter the new values ')
            console.log("edit_key_name",edit_key_values);
            if(edit_key_values===item1.name) 
            {                
                item1.name=changed_values
                console.log("name changed");
                console.log(item1);
            }
            if(edit_key_values===item1.age){
                item1.age=changed_values
                console.log("age changed");
                console.log(item1);
            }
            if(edit_key_values===item1.email){
                item1.email=changed_values
                console.log("Email changed");
                console.log(item1);
            }
            if(edit_key_values===item1.phoneno){
                item1.phoneno=changed_values
                console.log("Phone number changed");
                console.log(item1);
            }
            if(edit_key_values===item1.password){
                item1.password=changed_values
                console.log("password changed");
                console.log(item1);
            }
           // point_array.push(item1); 
        } 
        
    })
    console.log(point_array);
        writejson(point_array);
}







   async function dele()
{
    await readjson();   
    console.log(" Number of ID");
    for (var item in point_array) {    
    console.log(point_array[item].id); } 
    console.log("Enter id number which u want to delete");
    let del_id=readlineSync.question(' ');
    //console.log(del_array);
    let new_arr=[];
    await point_array.map((item,index)=>{
        if(item.id!==Number(del_id))
        {   
            new_arr.push(item);            
        }       
        console.log(item.name);
    })
   
       writejson(new_arr);
}

function myobj()
{
 obj={
     "name":name, "age":age, "email":email,"phoneno":phoneno,"password":password,"id":id
 }
}


async function  readjson(){

    await jsonfile.readFile('studentdata.json')
    .then((result) => {         
        point_array=result; 
    }).catch((err) => {
        console.log("FAILED",err);
        return
    });
}



async function  onlyreadjson(){
    await jsonfile.readFile('studentdata.json')
    .then((result) => { 
        console.log("success",result);        
        point_array=result;
        console.log("if u want to view particular data THEN Enter ID");
        let particular_data_id=readlineSync.question(' ');
        result.map((item,index)=>{
            if(item.id===Number(particular_data_id))
            {   
               console.log(result[index]);            
            }       
            
        })
           



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



