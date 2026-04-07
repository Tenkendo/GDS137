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

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

	if((player.x + (player.width / 2)) >= canvas.width){
		xSpeed *= -1;
	}
	if((player.x - (player.width / 2)) <= 0){
		xSpeed *= -1;
	}
	if((player.y + (player.width / 2)) >= canvas.width){
		ySpeed *= -1;
	}
	if((player.y - (player.width / 2)) <= 0){
		ySpeed *= -1;
	}
	player.x += speed;
	player.y += speed;
	
	
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
	player.drawCircle();
}

