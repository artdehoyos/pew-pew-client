import Game from './Game';
var game = new Game('mount', 800, 600, '#000');
game.inputManager.bindKeys();
game.run();