const Gpio = require('pigpio').Gpio;
const radar = new Gpio(17, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.EITHER_EDGE
});
radar.on('interrupt', (level) => console.log(new Date().toISOString() + ' motion! ' + level + ';'));
console.log('Started');

//process.on('SIGINT', () => {
//  radar.unexport();
//});
