class Vec {
	
	constructor(x, y) {
		
		this.val = [x, y];
		
	}
	
	mid(vec, dividend, divider) {
		
		var x1 = this.val[0] * ((divider - dividend)/divider);
		var x2 = vec.val[0] * (dividend/divider);
		var x = x1 + x2;
		
		var y1 = this.val[1] * ((divider - dividend)/divider);
		var y2 = vec.val[1] * (dividend/divider);
		var y = y1 + y2;
		
		return new Vec(x, y);
		
	}
	
}