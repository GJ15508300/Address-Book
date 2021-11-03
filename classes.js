class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      console.log(" 'I have a ' "+ this.carname);
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
        console.log( this.present() )
        console.log(" it is a " + this.model);
    }
    static hello(x) {
        console.log("Hello ", + x.name);
      }
  }
  
  let myCar = new Model("Ford", "Mustang");
  myCar.show();
    Model.hello(myCar);

















// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age_method(x) {
//       return x - this.year;
//     }
//   }
  
//   let date = new Date();
//   let year = date.getFullYear();
  
//   let myCar = new Car("Ford", 2014);
//   console.log("My name " + myCar.name + "\n years ."+ myCar.year );
//   console.log("age method ",myCar.age_method(year));


// module.exports.Car = Car;

//   function Customer(){
//     this.name="Jhon";
//     this.getName=function(){
//         return this.name;
//     }
// }
// function customer(){
//     return new Customer();
// }


// // export function getFiles(input){
    
// // }


// class first{
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     }