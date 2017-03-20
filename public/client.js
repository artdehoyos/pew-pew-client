
var pressedKeys = [];
var msgTypes = require('../common/message-types');
function Game(mountPoint, width, height, bgColor){
    // Object Properties
    this.canvas = document.createElement('canvas');
    this.canvas.width = width || 800;
    this.canvas.height = height || 600;
    this.context = this.canvas.getContext("2d");
    this.bgColor = bgColor;
    this.objects = [];
    this.start = null;
    this.ws = new WebSocket('ws://localhost:3000');
    var self = this;

    ws.addEventListener('open', function(event){
        console.log("Clent connected.");
    })
    // Object Functions
    this.sendInput = function(){
        ws.send(JSON.stringify({
            type: msgTypes.client.INPUT,
            data: pressedKeys
        }));
    }
    this.clearCanvas = function(){
        self.context.fillStyle = self.bgColor;
        self.context.fillRect(0, 0, self.canvas.width, self.canvas.height)
    }
    this.render = function(){
        self.clearCanvas();
        self.objects.forEach(function(object){
            object.render();
        })
    }
    this.registerObject = function(object){
        self.objects.push(object);
    }
    this.run = function(timestamp){
        if(!self.start) self.start = timestamp;
        if((timestamp - self.start) >= 16){
            self.sendInput(pressedKeys);
            pressedKeys = [];
            self.render();
            self.start = timestamp;
        }
        requestAnimationFrame(self.run);
    }
    // Setup Actions
    document.getElementById(mountPoint).appendChild(this.canvas);
    window.addEventListener('keydown', function(event){
        pressedKeys.push(event.key);
    })
}

function Rectangle(x, y, width, height, color){
    this.x = x || 400;
    this.y = y || 300;
    this.width = width || 100;
    this.height = height || 100;
    this.color = color || '#f00';

    this.render = function(){
        game.context.fillStyle = this.color;
        game.context.fillRect(this.x, this.y, this.width, this.height);
    }
}

var game = new Game("mount", 800, 600, "#000");
var rekt = new Rectangle();
game.registerObject(rekt);
game.run();
