function Infi(_1, _2, _3, gen) {
	
	if(gen > 0) {
		
		screen.frac();
		screen.lines([_1.val, _2.val, _3.val, _1.val]);
		screen.end_frac("blue", 1);
		
		Double_Triangle(_1, _1.mid(_2, 1, 3), (_1.mid(_2, 2, 3)).mid((_1.mid(_3, 2, 3)), 1, 2), _1.mid(_3, 1, 3), gen - 1);
		Double_Triangle(_1.mid(_2, 1, 3), _1.mid(_2, 2, 3), _2.mid(_3, 1, 3), (_1.mid(_2, 2, 3)).mid((_1.mid(_3, 2, 3)), 1, 2), gen - 1);
		Double_Triangle(_1.mid(_3, 1, 3), (_1.mid(_2, 2, 3)).mid((_1.mid(_3, 2, 3)), 1, 2), _2.mid(_3, 2, 3), _1.mid(_3, 2, 3), gen - 1)
		Triangularr(_1.mid(_2, 2, 3), _2, _2.mid(_3, 1, 3), gen - 1);
		Infi((_1.mid(_2, 2, 3)).mid((_1.mid(_3, 2, 3)), 1, 2), _2.mid(_3, 1, 3), _2.mid(_3, 2, 3), gen - 1);
		Triangularr(_1.mid(_3, 2, 3), _2.mid(_3, 2, 3), _3, gen - 1);
		
	}
	
}