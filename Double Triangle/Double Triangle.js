function Double_Triangle(_1, _2, _3, _4, gen) {
	
	if(gen > 0) {
		
		screen.frac();
		screen.lines([_1.val, _2.val, _3.val, _4.val, _1.val]);
		screen.end_frac("red", 1);
		
		Triangularr(_1, _2, _4, gen - 1);
		Triangularr(_3, _4, _2, gen - 1);
		
	}
	
}