// const Logger = require("./Logger");
// const logger = new Logger();

// logger.on("messageLogged", (args) => {
//   console.log("listener callled", args);
// });

// logger.log("ssss");

var emitter = require("events").EventEmitter;

function LoopProcessor(num) {
  console.log("inside loop processor");
  var e = new emitter();

  setTimeout(function () {
    for (var i = 1; i <= num; i++) {
      e.emit("BeforeProcess", i);

      console.log("Processing number:" + i);

      e.emit("AfterProcess", i);
    }
  }, 100);

  return e;
}
var lp = LoopProcessor(3);

lp.on("BeforeProcess", function (data) {
  console.log("About to start the process for " + data);
});

lp.on("AfterProcess", function (data) {
  console.log("Completed processing " + data);
});
