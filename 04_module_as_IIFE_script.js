// Immediately invoked function expression (IIFE - say: "iffy")
// On this way no global variables are created
(function() {

  var createWorker = function() {
    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log('This is task 1');
    };

    var task2 = function() {
      workCount += 1;
      console.log('This is task 2');
    };
    return {
      job1: task1,
      job2: task2
    };
  };

  var worker = createWorker();
  worker.job1();
  worker.job2();
} ());
