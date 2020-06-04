var angle = 0;
var myTurtle;
function setup(){
    createCanvas(342.5,342.5);
    background(0);
    stroke(255);
    noFill();
    noLoop();
    myTurtle = new Turtle();
    myTurtle.penUp();
    myTurtle.turnLeft(45);
    myTurtle.moveTo(0,0);

    // for (let i=0; i<5;i++){
    //     beginShape();
    //     nextPoint(i*0.5*PI).forEach((point)=>vertex(point.x,point.y));
    //     endShape();
    // }
}

function draw() {
    sierpinski(6,50);
    stroke(255, 204, 100)
    

}

function sierpinski(order,length){
    myTurtle.moveTo((sqrt(2)+2)/2*length/pow(2,order),(sqrt(2)+2)/2*length/pow(2,order));
    myTurtle.penDown();
    drawCurve(order,length/(pow(2,order-1)),45);
}

function turn(angle) {
    myTurtle.turnLeft(angle);
}

function drawLine(length){
    myTurtle.moveForward(length);
}


function X(order, length,angle){
    if (order!=0){
        X(order-1,length,angle);
    }
    drawLine(length);
    turn(angle);
    drawLine(length*2);
    turn(angle);
    if (order!=0){
        X(order-1,length,angle);
    }
    drawLine(length);
    turn(-angle*2)
    drawLine(length);
    turn(-angle*2);
    if (order!=0){
        X(order-1,length,angle);
    }
    drawLine(length);
    turn(angle);
    drawLine(length*2);
    turn(angle);
    if (order!=0){
        X(order-1,length,angle);
    }
}
function drawCurve(order,length,angle) {
    drawLine(length);
    turn(-angle*2)
    if (order!=0){
        X(order-1,length,angle);
    }
    drawLine(length);
    turn(-angle*2);
    drawLine(length);
    turn(-angle*2);
    if (order!=0){
        X(order-1,length,angle);
    }
    drawLine(length);
}

// function sierpinski(order) {
//     let total = pow(4,order);
//     let w = width/total;
//     for (let i=0; i<total; i++){
//     };
    

// }

// function nextPoint(angle) {
//     let spots = [ createVector(-0.5, 0),
//                   createVector(-0.5, 0.25),
//                   createVector(-0.75,0.5),
//                   createVector(-0.5,0.75),
//                   createVector(-0.25,0.5),
//                   createVector(0, 0.5)];
//     spots.map( (point) => point.mult(200));
//     spots.map( (point) => point.rotate(angle));    
 
//     return spots;
// }
