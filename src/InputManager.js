import inputTypes from '../../common/input-types';

class InputManager{
    constructor(){
        this.commands = {
            "up": null,
            "down": null,
            "left": null,
            "right": null,
            "primary": null,
            "secondary": null,
            "target": null
        }
        
        window.pressedKeys = [];
        window.addEventListener('keydown', (event) => {
            if(window.pressedKeys.indexOf(event.key.toLowerCase()) < 0){
               window.pressedKeys.push(event.key.toLowerCase());
            }
            event.preventdefault();
        });
        window.addEventListener('keyup', (event) => {
            window.pressedKeys.splice(window.pressedKeys.indexOf(event.key.toLowerCase()), 1);
        });
    }

    bindKeys(up="w", down="s", left="a", right="d", primary=" ", secondary="shift", target="`"){
        this.commands.up = up;
        this.commands.down = down;
        this.commands.left = left;
        this.commands.right = right;
        this.commands.primary = primary;
        this.commands.secondary = secondary;
        this.commands.target = target;
    }

    convertKeysToCommands(keys){
        let commands = [];
        keys.forEach((key) => {
            if(key === this.commands.up){
                commands.push(inputTypes.UP);
            }
            if(key === this.commands.down){
                commands.push(inputTypes.DOWN);
            }
            if(key === this.commands.left){
                commands.push(inputTypes.LEFT);
            }
            if(key === this.commands.right){
                commands.push(inputTypes.RIGHT);
            }
            if(key === this.commands.primary){
                commands.push(inputTypes.BUTTON_1);
            }
            if(key === this.commands.secondary){
                commands.push(inputTypes.BUTTON_2);
            }
            if(key === this.commands.target){
                commands.push(inputTypes.BUTTON_3);
            }
        });
        return commands;
    }

}

module.exports = InputManager;