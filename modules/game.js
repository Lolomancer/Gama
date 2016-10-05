// requirejs.config({
//     baseUrl: 'modules',
//     paths: {
//         phaser: 'engine'
//     }
// });

//requirejs(['../engine/phaser.min'], function(Phaser){

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'data-main', {preload: preload, create: create, update: update, render: render});

var starfield;
var starpar;
var starpar2;


function preload() {
    game.load.image('starfield', 'graphics/starfield_600s.png');
    game.load.image('ship', 'graphics/player_horizontal.png');
    game.load.image('starpar', 'graphics/starfield_foreground.gif');
}

function create() {
    //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    starfield.tileScale.y = 0.6;
    starfield.tileScale.x = 0.6;
    starpar2 = game.add.tileSprite(10, 20, 800, 600, 'starpar');
    starpar2.tileScale.y = 0.7;
    starpar2.tileScale.x = 0.7;
    starpar = game.add.tileSprite(0, 0, 800, 600, 'starpar');
    player = game.add.sprite(30, 300, 'ship');
}

function update() {
starfield.tilePosition.x -= 0.8;
starpar2.tilePosition.x -=0.9;
starpar.tilePosition.x -=0.9;
}

function render() {

}

//});