
let osc1, osc2, filter1, delay;
let oscs = [];

function setup(){



  for(let i = 0; i < 100; i++){

    oscs[i] = new p5.Oscillator();

    let type;

    if(int(random(2)) == 0){
      type = "sine";
    } else {
      type = "square";
    }

    oscs[i].setType(type);
    oscs[i].freq(random(1000))
    oscs[i].start();
  }


  // osc1 = new p5.Oscillator();
  // osc2 = new p5.Oscillator();
  //
  // osc1.setType('square');
  // osc1.start();
  //
  // osc2.setType('sine');
  // osc2.start();

  // initialize the dial
  let dial = new Nexus.Dial("#dial", {
    'interaction':'vertical',
    'min':0,
    'max':10000
  });

  // use the dial to adjust the frequency of each oscillator
  dial.on("change", function(val){

    for(let i = 0; i < oscs.length; i++){
      oscs[i].freq(random(val));

    }

    console.log(val);

  });

}
