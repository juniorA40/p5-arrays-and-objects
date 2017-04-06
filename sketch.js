var allMehBubbles = []
var numOfBubbles = prompt("How many blood cell do you want to see? ")
var sizeOfBubble = 25;


function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
    allMehBubbles[i] = new bubble(random(0, 600), random(0, 400));
    }
}

function draw(){
    background(0);
for(var i = 0; i < allMehBubbles.length; i++){
   allMehBubbles[i].display();
   allMehBubbles[i].move(); 
 
    }   
}

function bubble(x,y){
    this.x = x;
    this.y = y;
    fill(0, 0, 255, 125)
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBubble, sizeOfBubble);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
}