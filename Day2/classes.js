class Cat { 
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(this.name + ' roars.');
    }
  }
  
  var l = new Cat('Fuzzy');
  l.speak(); 
  