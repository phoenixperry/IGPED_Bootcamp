void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); 
  pinMode(4, INPUT); 
  pinMode(19, INPUT); 

}

void loop() {
  int sensorVal = analogRead(A5); 
  Serial.print("I am the light sensor "); 
  Serial.println(sensorVal); 
  
  //reading the buttons
  int leftBtn = digitalRead(4);
  int rightBtn = digitalRead(19); 
  Serial.print("left button "); 
  Serial.println(leftBtn); 
  Serial.print("right button "); 
  Serial.println(rightBtn); 
 
}


