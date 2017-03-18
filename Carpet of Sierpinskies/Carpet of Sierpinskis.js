function Carpet_of_Sierpinskies(x1, y1, x2, y2, x3, y3, x4, y4, gen) {
	
	if(gen > 0) {
		
		screen.frac();
		screen.lines([[x1, y1], [x2, y2], [x3, y3], [x4, y4], [x1, y1]]);
		screen.end_frac("red", /* "#0ac", */ 4);
		
		Sierpinski_Triangle(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, (x1 + x4) / 2, (y1 + y4) / 2, gen - 1);
		Sierpinski_Triangle(x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, (x1 + x2) / 2, (y1 + y2) / 2, gen - 1);
		Sierpinski_Triangle(x3, y3, (x3 + x4) / 2, (y3 + y4) / 2, (x2 + x3) / 2, (y2 + y3) / 2, gen - 1);
		Sierpinski_Triangle(x4, y4, (x4 + x1) / 2, (y4 + y1) / 2, (x3 + x4) / 2, (y3 + y4) / 2, gen - 1);
		
		Carpet_of_Sierpinskies((x1 + x2) / 2, (y1 + y2) / 2, (x2 + x3) / 2, (y2 + y3) / 2, (x3 + x4) / 2, (y3 + y4) / 2, (x4 + x1) / 2, (y4 + y1) / 2, gen - 1)
		
	}
	
}