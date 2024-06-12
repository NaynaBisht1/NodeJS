const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>{
    console.log('Please turn off the motor! Gentle Reminder');
  }, 3000)
});

console.log("script is running")

myEmitter.emit('WaterFull');