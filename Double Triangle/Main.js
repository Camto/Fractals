function Begin() {
	
	size = Math.min(window.innerWidth, window.innerHeight);
	screen = new Canvas(size, size);
	
	gens = parseInt(prompt("How many generations?", Math.floor(size / 400) + 9));
	
	Double_Triangle(new Vec(0, 0), new Vec(screen.width, 0), new Vec(screen.width, screen.height), new Vec(0, screen.height), gens);
	
}

Begin();