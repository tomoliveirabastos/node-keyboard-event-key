const {exec} = require('child_process');
const path = require("path");

class KeyboardEvent{

    constructor(){
        this.isWindows = true;
    }

    eventKeyCode(keyCode){
        
        if(this.isWindows){
        
            const windowsPath = path.join(__dirname, 'key_event.exe');
            exec(`${windowsPath} ${keyCode}`);
            
        
        }else{

            const otherPath = path.join(__dirname, 'key_event.jar');
            const keyCodeMap = require('./keyCodeMap.json')
            const keyCodeSend = keyCodeMap[keyCode];

            exec(`java -jar ${otherPath} ${keyCodeSend}`)
        
        }
    }

}
module.exports = new KeyboardEvent();