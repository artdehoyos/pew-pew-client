import ObjectGroup from './ObjectGroup';
import SocketManager from './SocketManager';
import InputManager from './InputManager';
import config from '../config';

export default class Game{
    constructor(mountPoint, width = 800, height = 600, bgColor = '#000'){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.bgColor = bgColor;
        this.objects = [];
        this.start = null;
        this.id = null;
        this.socketManager = new SocketManager(config.serverAddress, this);
        this.inputManager = new InputManager();
        this.run = this.run.bind(this); // without binding, function loses 'this' context when passed to rAF.
        
        document.getElementById(mountPoint).appendChild(this.canvas);
    }

    clearCanvas(){
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render(){
        this.clearCanvas();
        this.objects.forEach((object) => {
            object.render();
        });
    }
    registerObject(object){
        this.objects.push(object)
    }
    registerObjectGroup(name){
        this.objects.push(new ObjectGroup(name));
    }
    run(timestamp){
        if(!this.start){
            this.start = timestamp;
        }
        if((timestamp - this.start) >= 16){
            let commands = this.inputManager.convertKeysToCommands(window.pressedKeys);
            this.sendInput(commands);
            this.render();
            this.start = timestamp;
        }
        requestAnimationFrame(this.run);
    }
    sendInput(commands){
        this.socketManager.sendInput(commands, this.id);
    }
}