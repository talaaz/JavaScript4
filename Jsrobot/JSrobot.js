//Step1

function init(robot){
  // your code here
}

function loop(robot){
  robot.move(10)
}

//Step2
function init(robot){
  robot.number = 0;
}

function loop(robot){
  robot.move();
  robot.jump(4);
  if(robot.number % 2 == 0){
	robot.jump()
} else {
	robot.move(2)
}
robot.number++;
}
//Step3
robot.move(2);
 robot.jump(1);
//Step4

//Step5
 robot.move(4)
 robot.jump(4);
//Step6
