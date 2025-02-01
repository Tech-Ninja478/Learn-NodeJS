const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Initialize Object
const myEmitter = new MyEmitter(); // Corrected the variable name

// Add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg)); // Use the correct variable name

setTimeout(() => {
  // Emit Event
  myEmitter.emit("log", "Log event emitter!"); // Use the correct variable name
}, 2000);
