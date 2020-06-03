var x = 0;
var y = 0;
var angle = 0;
function setup(){
    createCanvas(400,400);
    translate(width/2,width/2);
    background(0);
    stroke(255);
    noFill();


    for (let i=0; i<5;i++){
        beginShape();
        nextPoint(i*0.5*PI).forEach((point)=>vertex(point.x,point.y));
        endShape();
    }
}

function sierpinski(order) {
    let total = pow(4,order);
    let w = width/total;
    for (let i=0; i<total; i++){
    };
    

}

function nextPoint(angle) {
    let spots = [ createVector(-0.5, 0),
                  createVector(-0.5, 0.25),
                  createVector(-0.75,0.5),
                  createVector(-0.5,0.75),
                  createVector(-0.25,0.5),
                  createVector(0, 0.5)];
    spots.map( (point) => point.mult(200));
    spots.map( (point) => point.rotate(angle));    
 
    return spots;
}