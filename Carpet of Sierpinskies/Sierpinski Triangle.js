function Sierpinski_Triangle(x1, y1, x2, y2, x3, y3, gen) {
	
	if(gen > 0) {
		
		screen.frac();
		screen.lines([[x1, y1], [x2, y2], [x3, y3], [x1, y1]]);
		screen.end_frac("blue", /* "#50381E", */ 2);
		
		Sierpinski_Triangle(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, (x1 + x3) / 2, (y1 + y3) / 2, gen - 1);
		Sierpinski_Triangle((x1 + x2) / 2, (y1 + y2) / 2, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, gen - 1);
		Sierpinski_Triangle((x1 + x3) / 2, (y1 + y3) / 2, (x2 + x3) / 2, (y2 + y3) / 2, x3, y3, gen - 1);
		
	}
	
}