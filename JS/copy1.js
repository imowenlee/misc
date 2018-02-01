function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.random();
          result > 0.5 ? resolve(result) : reject('Oppps....I cannot calculate')
        }, 1)
    });
}

// for (let i=0; i<10; i++) {
// 	asyncFunc()
//     	.then(result => console.log('Result is: ' + result))
//     	.catch(result => console.log('Error: ' + result))
// }


function testFn() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            const time = Math.random() % 2;
            time > 0.5 ? resolve(time) : reject(time);
        }, 100);
    });
}

for (let i = 0; i < 10; i++) {
    testFn()
        .then(result => console.log("Result is " + result))
        .catch(result => console.log("Error is " + result));
}
