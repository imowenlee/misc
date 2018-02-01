function throttle (func, wait, immediate) {
    var isAbletoTrigger = true;
    return function (...args) {
        var context = this;
        if (isAbletoTrigger) {
            func.apply(context, args);
            isAbletoTrigger = false;
            setTimeout(function(){
                isAbletoTrigger = true;
            }, wait);

        }
    }

}
let i = 0, fn;
for (i = 0; i < 10; i++) {

    console.log("test...");
    fn = throttle(function(){
        console.log(`test ${i}`);
    }, 10);
    fn(i);

    //fn();
}
