function map_x_to_y(val, min1, max1, min2, max2) {
	
	return (((val - min1) / (max1 - min1)) * (max2 - min2)) + min2;
	
}

function Begin() {
	
	size = Math.min(window.innerWidth, window.innerHeight);
	screen = new Canvas(size, size);
	
	gens = Math.min(parseInt(prompt("How many generations?", Math.floor(size / 400) + 8)), Math.floor(size / 400) + 8);
	
	Carpet_of_Sierpinskies(0, 0, screen.width, 0, screen.width, screen.height, 0, screen.height, gens);
	
}

Begin();