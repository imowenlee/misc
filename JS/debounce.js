// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;

	return function() {

		var context = this, args = arguments;
		var later = function() {
            console.log("....in later");
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
var myEfficientFn = debounce(function() {
    console.log("hi");
}, 1000);

myEfficientFn();
myEfficientFn();
myEfficientFn();
myEfficientFn();

//
// function debounce(func, wait) {
//   let timeout
//   return function(...args) {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(this, args), wait)
//   }
// }
//
// function sayHello() {
//   console.log('My name is', this.name)
// }
//
// const amy = {
//   name: 'amy',
//   speak: debounce(sayHello),
// }
//
// amy.speak()
