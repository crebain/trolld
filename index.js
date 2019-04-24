const Gpio = require('onoff').Gpio;
const radar = new Gpio(17, 'in', 'rising');
radar.watch((err, value) => console.log('motion! ' + value + ';'));
console.log('Started');

process.on('SIGINT', () => {
  radar.unexport();
});
