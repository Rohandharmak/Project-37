var canvas,gameState=0,contestCount,database,quiz,question;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
