// Our base "class" Animal
function Animal(name) {
    this.me = name;
}
// Some base "class" methods
Animal.prototype.who = function() {
    return "I am " + this.me;
};
Animal.prototype.speak = function() {
    // What should this do? I dunno...
    console.log("(Animal) speak!");
}

// A child "class" that "inherits" from Animal
function Dog(name) {
    Animal.call(this, name);
}
// Ensure we properly inherit from our base class
Dog.prototype = Object.create( Animal.prototype );
Dog.prototype.constructor = Dog;

// Add our own 'speak' method and call our base class 'speak' as well
Dog.prototype.speak = function() {
    Animal.prototype.speak.call(this);
    console.log("Hello, " + this.who() + "." );
};

// Puppies! Awwwww
var fluffy = new Dog( "Fluffy" );
//var spot = new Dog( "Spot" );
//console.log(fluffy.who());
fluffy.speak();
