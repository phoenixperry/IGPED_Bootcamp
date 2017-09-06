var cats = ["Tiny", "Snowflake", "Bob", "Jack", "MCSkatkat"]
//create an array
function setup() {

  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < cats.length; i++) {
      //iterate thorugh the array
      console.log(cats[i]);
        textSize(32);
        //print to screen
        if(i==0){
          fill(0, 102, 153);
          text(cats[i], 100,50);
        }else{
        fill(0, 102, 153);
          text(cats[i], 100,100*i);
        }
  }

}
