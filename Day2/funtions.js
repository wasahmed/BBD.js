
//normal function 
function square(number)
{
    return number * number;
}
console.log(square(2));

//function expression
var _square = function(num){return num * num}
console.log(_square(3));

//function taken as a parameter
function map(f, a) {
    var result = [];
    var i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
        return result;
  }
  var f = function(x) {
     return x * x * x; 
  }
  var numbers = [0, 1, 2, 5, 10];
  var cube = map(f,numbers);
  console.log(cube);

//recursive function
  function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
  foo(3);

  //nested functions
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                          // it
  result = fn_inside(5); // returns 8
  
  result1 = outside(3)(5); // returns 8
  console.log(result1);

  //////////////////////////Closures//////////////////////////////////////////////////////////////////
//   var pet = function(name) {   // The outer function defines a variable called "name"
//   var getName = function() {
//     return name;             // The inner function has access to the "name" variable of the outer 
//                              //function
//   }
//   return getName;            // Return the inner function, thereby exposing it to outer scopes
// }
// myPet = pet('Vivie');

// myPet();                     // Returns "Vivie"
var createPet = function(name) {
    var sex;
  
    return {
      setName: function(newName) {
        name = newName;
      },
  
      getName: function() {
        return name;
      },
  
      getSex: function() {
        return sex;
      },
  
      setSex: function(newSex) {
        if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
          newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = createPet('Vivie');
  console.log(pet.getName());                  // Vivie
  
  pet.setName('Oliver');
  pet.setSex('male');
  console.log(pet.getSex());                   // male
  console.log(pet.getName()); 

  var today = new Date();
  console.log(today.getTime);