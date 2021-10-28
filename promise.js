var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function myDisplayer(some) {
    console.log(some);
  }





const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I am  GJ "); }, 3000);
  });
   
  myPromise.then(function(value) {
    console.log(value);
  });





 
  
  let myPromise1 = new Promise(function(myResolve, myReject) {
    let x = 0;  
    if (x == 0) {
      myResolve("OK equal to x");
    } else {
      myReject("Error");
    }
  });
  
  myPromise1.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  let myPromise2 = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise2.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );












async function myFunction() {return "async";}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


async function myDisplay1() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I ready... !!");}, 5000);
    });
    console.log( await myPromise );
  }
  
  myDisplay1();





  async function getFile1() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    console.log( await myPromise );
  }
  
  getFile1();