// The "revealing module pattern"
// This is the module with the 
// the return of an object
var createWorker = function() {
  // this internal implementation details is
  // not visible to the outside and cannot 
  // be manipulated
  var workCount = 0;
  
  var task1 = function() {
    workCount += 1;
    console.log('This is task 1');
  };
  
  var task2 = function() {
    workCount += 1;
    console.log('This is task 2');
  };
  // The API to the outside world referring
  // to the private functions (task1 + task2)
  // as kind of an alias to them
  // the returning object of the function
  return {
    job1: task1,
    job2: task2
  };
};

// The 'worker' object calls a function
var worker = createWorker();
// The instantiation of the worker object
worker.job1();
worker.job2();
console.dir('worker.task1()');