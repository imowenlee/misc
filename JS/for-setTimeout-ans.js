//method 1
function doSomething(i) {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(doSomething, 100, i);
}

//method 2
for (var i = 0; i < 10; i++) {
    (function(index){
        setTimeout(function(){
            console.log(index)
        }, 100);
    })(i);
}

//method 3
for (var i = 0; i < 10; i++) {
    setTimeout(function(index){console.log(index);}, 1000, i);
}

