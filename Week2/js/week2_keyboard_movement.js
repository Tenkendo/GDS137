//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var xSpeed = 5;
var ySpeed = 5;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 100;
	player.color = "green";

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

	if((player.x + (player.width / 2)) >= canvas.width){
		xSpeed *= -2;
		ySpeed *= 2;
		player.color = "red";
		console.log("Hit Side");
	}
	if((player.x - (player.width / 2)) < 0){
		xSpeed *= -2;
		ySpeed *= 2;
		player.color = "red";
		console.log("Hit Side");
	}
	if((player.y + (player.width / 2)) >= canvas.height){
		ySpeed *= -0.7;
		xSpeed *= 0.7;
		player.color = "blue";
		console.log("Hit Bottom");
	}
	if((player.y - (player.width / 2)) < 0){
		ySpeed *= -0.7;
		xSpeed *= 0.7;
		player.color = "blue";
		console.log("Hit Top");
	}
	player.x += xSpeed;
	player.y += ySpeed;
	
	
	// //Move the Player to the right
	// if(d)
	// {
	// 	console.log("Moving Right");
	// 	player.x += 2;
	// }
	// if(a)
	// {
	// 	console.log("Moving Left");
	// 	player.x += -2;
	// }
	// if(w)
	// {
	// 	console.log("Moving Up");
	// 	player.y += -2;
	// }
	// if(s)
	// {
	// 	console.log("Moving Down");
	// 	player.y += 2;
	// }
	
	//Update the Screen
	console.log("xSpeed:"+ xSpeed + " ySpeed:" + ySpeed);
	player.drawCircle();
}

