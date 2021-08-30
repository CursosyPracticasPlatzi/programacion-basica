/*
 Logic simulator AND
 
 Input  SW1 SW2
 Output LED1

 LED1 = SW1 + SW2

 created 2018
 NextStep LLC <https:next-step.asia/>
 by Kaz Ueno
 
 This example code is in the public domain.
 
*/
 
// set pin numbers:

int amarillo = 13;
int rojo = 7;
int milisegundos = 200;

void setup(){
	pinMode(amarillo,OUTPUT);
  	pinMode(rojo, OUTPUT);
}

void loop(){
	digitalWrite(amarillo, HIGH);
  	digitalWrite(rojo,LOW);
  	delay(milisegundos);
  	digitalWrite(amarillo, LOW);
  	digitalWrite(rojo,HIGH);
  	delay(milisegundos * 2);
}