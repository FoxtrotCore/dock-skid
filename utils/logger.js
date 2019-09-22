const colors = require('colors');

const MODE = {
  0: 'INFO',
  1: 'WARN',
  2: 'ERROR',
  3: 'DEBUG'
}

module.exports.log = function(mode, message, date=new Date().toUTCString()){
  if(MODE[mode] != null && MODE[mode] != undefined){
    switch (mode) {
      case 0: console.log(String("[" + MODE[mode] + "] [" + date + "]: " + message).blue); break;
      case 1: console.warn(String("[" + MODE[mode] + "] [" + date + "]: " + message).yellow); break;
      case 2: console.error(String("[" + MODE[mode] + "] [" + date + "]: " + message).red); break;
      case 3: console.debug(String("[" + MODE[mode] + "] [" + date + "]: " + message).orange); break;
    }
  }
  else{ throw "Bad log mode: " + mode; }
}
