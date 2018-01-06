//1
move();
turn('right');
move();
turn('left');
move();
turn('right');
move();
move();
turn('left');
move();
//2
for (var i= 0; i < 7; i++){
  move();
}
//2-2
for(var i =0; i < 5; i++){move();}
while(move < 5){
  isFinished();}
//3
  stepsDown = 2
  stepsLeft = 1
//3-3
const stepsUp = 3;
const stepsRight= 4;
//4
move();
turn('right');
move();
turn('left');
move();
move();
move();
turn('left');
move();
//4-2
move();
turn('right');
turn('right');
move();
turn('left');
turn('left');
//4-3
function knightMove(direction){
     move();
     move();
     move();
}

//5
stepsRight.unshift(4);
stepsUp.pop(4);
stepsUp.push(1, 2, 2);
//5-2
stepsRight.shift(3);
stepsUp.splice([1],[2]);
stepsRight.splice([1], [2]);
stepsRight.push(2);
//6
for (var i=0; i < instructions.length; i++ ){
   console.log(instructions);
}
