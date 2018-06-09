class Canvas {
	
	constructor(width, height) {
		
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.width = width;
		this.canvas.height = this.height = height;
		this.draw = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);
		
		this.canvas.style.position = "absolute";
		this.canvas.style.margin = "auto";
		this.canvas.style.top = "0px";
		this.canvas.style.left = "0px";
		this.canvas.style.bottom = "0px";
		this.canvas.style.right = "0px";
		// this.canvas.style.backgroundColor = "white"; // why bother?
		
	}
	
	frac() {
		
		this.draw.beginPath();
		
	}
	
	lines(lines_to_draw) {
		
		this.draw.moveTo(lines_to_draw[0][0], lines_to_draw[0][1]);
		
		for(var count = 1; count < lines_to_draw.length; count++) {
			
			this.draw.lineTo(lines_to_draw[count][0], lines_to_draw[count][1]);
			
		}
		
	}
	
	end_frac(colour, /* bg_colour, */ width) {
		
		this.draw.strokeStyle = colour;
		// this.draw.fillStyle = bg_colour;
		this.draw.lineWidth = width;
		this.draw.stroke();
		// this.draw.fill();
		this.draw.closePath();
		
	}
	
	/* rect(x, y, width, height, colour) { // this time it's just lines!
		
		this.draw.fillStyle = colour;
		this.draw.fillRect(x, y, width, height);
		
	}
	
	circle(x, y, radius, colour) {
		
		this.draw.beginPath();
		this.draw.fillStyle = colour;		
		this.draw.arc(x, y, radius, 0, 2 * Math.PI);
		this.draw.fill();
		this.draw.closePath();
		
	}
	
	text(text, x, y, colour, size, font, extras) {
		
		if(extras != undefined) {
			
			this.draw.font = extras + " " + size + "px " + font;
			
		} else {
			
			this.draw.font = size + "px " + font;
			
		}
		
		this.draw.fillStyle = colour;
		this.draw.textAlign = "center";
		this.draw.fillText(text, x, y + (size / 2));
		
	}
	
	clear_screen() {
		
		this.draw.clearRect(0, 0, this.width, this.height);
	
	} */
		
}