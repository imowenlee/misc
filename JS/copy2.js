var foo = { a: 1 };

var bar = Object.create(foo);
bar.b = 2;

var baz = Object.create(bar);
baz.c = 3;

console.log("I can haz 'a' and 'b'? ", !!(baz.a && baz.b));
console.log(foo, bar, baz);
// true

var foo2 = { a: 1 };

var bar2 = foo2;
bar2.b = 2;

var baz2 = bar2;
baz2.c = 3;

console.log("I can haz 'a' and 'b'? ", !!(baz2.a && baz2.b));
console.log(foo2, bar2, baz2);
