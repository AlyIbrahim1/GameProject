/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(223, 191, 145);
	rect(0, 432, 1024, 144); //draw some green ground
	fill(208, 176,130);
	rect(0,432, 1024, 40); //slightly darker background

	//change into sand ground

	//1. a cloud in the sky
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


	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
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

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	
	function tree(x) {
		//3. a tree
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
	
	
	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	function canyon(x) {
		fill(59, 51, 35);
		triangle(x + 37.5, 472, x + 75, 616, x + 112.5, 472);
		triangle(x, 472, x + 37.5, 566, x + 75, 472);
		fill(88, 76, 52);
		triangle(x, 472, x + 112.5, 526, x + 150, 472);
	}
	//start point: (145)
	canyon(145);


	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
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
	
	noStroke();
	fill(255);
	text("collectable item", 400, 400);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();
}

