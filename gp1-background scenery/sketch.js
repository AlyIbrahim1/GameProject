/*
Ideas: 
- Have a day and night cycle with blinking stars
- Draw a palm tree
- integrate key of life in something
*/  

let stars = []; //Stores each star position, size and brightness 

function setup()
{
	createCanvas(1024, 576);
	timeOfDay = 0;
}

function draw()
{
	timeOfDay = (timeOfDay + 1) % 1000; 
	// increment timeOfDay variable each frame (Each day cycle is 1000 frames, day 500, night 500)


	//background that changes between day (time < 0) and night(time > 0)
	const time = sin(timeOfDay * 0.00314) //Sine wave for time between -1 and 1
	const r = map(time, -1, 1, 100, 0);
	const g = map(time, -1, 1, 155, 0);
	const b = map(time, -1, 1, 255, 40);
	background(r, g, b);

	noStroke();
	fill(223, 191, 145);
	rect(0, 432, 1024, 144); //Desert ground
	fill(208, 176,130);
	rect(0,432, 1024, 40); //slightly darker background
	
	//generates 200 stars with random possitions, size and brighness
	function generateStars() {
		for (let i = 0; i < 200; i++) {
			stars.push({
				x: random(0, 1024),
				y: random(0, 432),
				size: random(1, 3),
				brightness: random(150, 255)
			});
		}
	}

	//draws each star from the array stars[]
	function drawStars() {
		for (let star of stars) {
			fill(star.brightness);
			noStroke();
			ellipse(star.x, star.y, star.size, star.size)
		}
	}

	if (time > 0) {
		if (stars.length === 0) {
			generateStars();
		}
		drawStars();
	}

	//cloud shape 1
	function cloud1(x, y) {
		fill(255);
		ellipse(x - 65 , y + 5, 40, 40)
		ellipse(x - 40, y + 5, 70, 70);
		ellipse(x, y, 90, 90);
		ellipse(x + 40, y + 5, 70, 70);
		ellipse(x + 65 , y + 5, 40, 40)
	}
	cloud1(215, 150)
	//midpoint: (215, 150)

	//cloud shape 2
	function cloud2(x, y) {
		fill(255);
		ellipse(x - 90, y, 40, 40);
		ellipse(x - 60, y,  80,  80);
		ellipse(x - 40, y + 20, 80, 80);
		ellipse(x - 40, y - 20, 80, 80);
		ellipse(x, y + 20, 80, 80);
		ellipse(x, y - 20, 80, 80);
		ellipse(x + 40, y + 20, 80, 80);
		ellipse(x + 40, y - 20, 80, 80);
		ellipse(x + 60, y, 80, 80);
		ellipse(x + 90, y, 40, 40);
	}
	cloud2(410, 90);
	//midpoint: (410, 90)

	//Pyramids in the background
	fill(188, 146, 97);
	triangle(594, 432, 757, 280, 920, 432);
	fill(138, 107, 71);
	triangle(702.6, 432, 594, 432, 757, 280); //pyramid 3 shadow
	fill(188, 146, 97);
	triangle(268, 432, 512.5, 150, 757, 432);
	fill(138, 107, 71);
	triangle(341.6, 432, 268, 432, 512.5, 150); //pyramid 2 shadow
	fill(188, 146, 97);
	triangle(105, 432, 268, 200, 431, 432);
	fill(138, 107, 71);
	triangle(178.6, 432, 105, 432, 268, 200); //pyramid 1 shadow

	//missing white cap with golden stroke
	
	function tree(x) {
		fill(100, 64, 11);
		rect(x - 20, 432, 40, -150);
		//leaves
		fill(31, 112, 38);
		triangle(x - 40, 370, x, 310, x + 40, 370);
		triangle(x - 105, 360, x, 290, x + 105, 360);
		triangle(x - 95, 330, x, 260, x + 95, 330);
		triangle(x - 85, 300, x, 230, x + 85, 300);
		triangle(x - 75, 270, x, 200, x + 75, 270);
		triangle(x - 55, 240, x, 170, x + 55, 240);
	}
	//start point: (850)

	// tree(850);
	//change tree into palm tree

	//Canyon
	function canyon(x) {
		fill(59, 51, 35);
		triangle(x + 37.5, 472, x + 75, 616, x + 112.5, 472);
		triangle(x, 472, x + 37.5, 566, x + 75, 472);
		fill(88, 76, 52);
		triangle(x, 472, x + 112.5, 526, x + 150, 472);
	}
	//start point: (145)
	canyon(145);

	//Collectable item (Ruby / Diamond)
	function ruby(x, y) {
		strokeWeight(1);
		stroke(120, 0, 23);
		fill(213, 17, 95);
		triangle(x - 10, y + 5, x + 10, y + 5, x, y - 25);
		fill(183, 0, 63);
		triangle(x - 10, y + 5, x - 20, y - 5, x, y - 25);
		fill(193, 0, 73);
		triangle(x + 10, y + 5, x + 20, y - 5, x, y - 25);
		fill(203, 7, 85);
		triangle(x - 10, y + 5, x + 10, y + 5, x, y + 25);
		fill(173, 0, 53);
		triangle(x - 10, y + 5, x - 20, y - 5, x, y + 25);
		fill(178, 0, 60);
		triangle(x + 10, y + 5, x + 20, y - 5, x, y + 25);
	}
	//midpoint: (460,445)
	ruby(460,445);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();
}

