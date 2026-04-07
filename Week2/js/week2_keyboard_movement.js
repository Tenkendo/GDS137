//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var xSpeed = 5;
var ySpeed = 5;
var topCD = 10;
var bottomCD = 10;
var sideCD = 5;
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

	if(((player.x + (player.width / 2)) >= canvas.width) && sideCD < 0){
		xSpeed *= -2;
		ySpeed *= 2;
		player.color = "red";
		console.log("Hit Side");
		sideCD = 10;
	} else if(sideCD > 0){
		console.log("Side Bounce on CD");
	}
	if(((player.x - (player.width / 2)) < 0) && sideCD < 0){
		xSpeed *= -2;
		ySpeed *= 2;
		player.color = "red";
		console.log("Hit Side");
		sideCD = 10;
	} else if(sideCD > 0){
		console.log("Side Bounce on CD");
	}
	if(((player.y + (player.width / 2)) >= canvas.height) && bottomCD < 0){
		ySpeed *= -0.7;
		xSpeed *= 0.7;
		player.color = "blue";
		console.log("Hit Bottom");
		bottomCD = 10;
	} else if(bottomCD > 0){
		console.log("Bottom Bounce on CD");	
	}
	if(((player.y - (player.width / 2)) < 0) && topCD < 0){
		ySpeed *= -0.7;
		xSpeed *= 0.7;
		player.color = "blue";
		console.log("Hit Top");
		topCD = 10;
	} else if (topCD > 0){
		console.log("Top Bounce on CD");
	}
	player.x += xSpeed;
	player.y += ySpeed;
	topCD -= 1;
	bottomCD -= 1;
	sideCD -= 1;
	
	
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

