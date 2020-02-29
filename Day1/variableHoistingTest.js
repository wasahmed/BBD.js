var myvar = 'my value';

(function() {
  console.log(myvar); // undefined since myvar is given a new value
  var myvar = 'local value';
})();
