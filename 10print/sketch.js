function setup(){

createCanvas(windowWidth, windowHeight);
background(255);
noFill();
strokeWeight(2);
let d = 50;

for(let x = 0; x < width; x += d ){
	for(let y = 0; y < height; y += d){

		let r = random(1);

		if(r > 0.5){
			line(x, y, x + d, y + d);
		} else {
			rect(x, y, d, d);
		}
	}
}

save("10cubed.png");
}
