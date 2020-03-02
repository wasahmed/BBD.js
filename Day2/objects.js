// var person = new Object();
// person.age = 10;
// person.name = "test";
// person.surname = "testsurname";

// console.log(person);

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
  }

  function displayCar() {
    var result = 'A Beautiful ' + this.year + ' ' + this.make
      + ' ' + this.model;
    console.log(result);
  }
  var car1 = new Car('Eagle', 'Talon TSi', 1993, "test");
  var car2 = new Car('test', 'test', 2000, 'test');
  car2.displayCar();
  car1.displayCar();