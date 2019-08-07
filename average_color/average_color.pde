
// our image
PImage img;

// variables to store the average r, g, and b 
int avgR = 0;
int avgG = 0;
int avgB = 0;


                 

void setup(){
  size(1024, 684);
  img = loadImage("goucher.jpg");
  noFill();
  
  //load the pixels of the image
  img.loadPixels();
  
  // loop through the pixels array
  for(int x = 0; x < img.width; x++){
    for(int y = 0; y < img.height; y++){
      
      // calculate x, y pixel coordinate in the 1-dimensional pixels array
      int loc = x + y * img.width;
      
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);
      
      // add up all of the r, g, and b values 
      avgR += r;
      avgG += g;
      avgB += b;
            
    }
  }

  //calculate the average r, g, and b values (total value / number of values)
  avgR = avgR / (img.width * img.height);
  avgG = avgG / (img.width * img.height);
  avgB = avgB / (img.width * img.height);
  
  // color the screen with the average color of the image
  fill(avgR, avgG, avgB);
  rect(0, 0, width, height);
    
 
  
  
  
}
