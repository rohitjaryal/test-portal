const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log("msg content:", msg);
    this.emit("messageLogged", msg);
  }
}

module.exports = Logger;
