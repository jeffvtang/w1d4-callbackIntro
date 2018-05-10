/* var myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
 */

// The second argument/parameter is expected to be a function
let indexlocation = 0

function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
        // foundlocation = i
        found(i);   // execute callback
      }
    }
/*   arr.forEach(function (element) {
    if (element === "Waldo") {
      found()
    }
    indexlocation += 1
  }) */
}

function actionWhenFound(index) {
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
