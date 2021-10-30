    console.log("----------var example----------");
    var greeter = "hey hi";
    newFunction();
    function newFunction()
     {
        var hello = "hello";
        console.log(greeter);
    }
    // console.log(hello); // error: hello is not defined

    var host;
    console.log(host); // greeter is undefined
    host = "say hello"



    /* So, since times > 3 returns true, greeter is redefined  to "say Hello instead".
      While this is not a problem if you knowingly want greeter to be redefined, 
      it becomes a problem when you do not realize that a variable greeter has already been defined before.

      If you have used greeter in other parts of your code, you might be surprised at the output you might get.
      This will likely cause a lot of bugs in your code. This is why let and const are necessary.*/

    var toy = "hey hi";
    var times = 4;

    if (times > 3) {
        var toy = "say Hello instead"; 
    }
    
    console.log(toy) // "say Hello instead"


    console.log("----------------let example----------------");
    let greeting = "say Hi";
   let four = 4;

   if (four > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   //console.log(hello) // hello is not defined

   console.log("----------const example----------");
   const ex = "say Hi";
   // ex = "say Hello instead";// error: Assignment to constant variable. 
   const ex1 = "say Hi";
   //const ex1 = "say Hello instead";// error: Identifier 'greeting' has already been declared