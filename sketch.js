function setup(){

createCanvas(windowWidth, windowHeight);

let d = 10;

for(let x = 0; x < width; x += d ){
	for(let y = 0; y < height; y += d){

		let r = random(1);

		if(r > 0.5){
			ellipse(x, y, d, d);
		} else {
			rect(x, y, d, d);
		}
	}
}

}
