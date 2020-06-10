var backgroundImg;
var playerAnim;
var player, groundImg,ground;


function preload() {
    backgroundImg = loadImage("background.png");
playerAnim=loadAnimation("wizard.jpg","wizard2.jpg","wizard 3.jpg");
groundImg=loadImage("ground.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-200);
    player = createSprite(50,displayHeight-270,20,20);
    player.addAnimation("wiz",playerAnim);
    player.scale=0.55
    ground=createSprite(displayWidth/2-10,displayHeight-220,displayWidth-20,30);
    ground.addImage(groundImg);
}
function draw(){
background(backgroundImg)
drawSprites();







}