
var initialvalue=100;
var highscore=null;
let randomnumber= random(100);
document.getElementById("hide").innerHTML=randomnumber;


function refresh(){
  document.body.style.backgroundColor="brown"
  document.querySelector(".message").innerHTML="Start guessing..."
  document.querySelector(".Chances").textContent="100"
  document.querySelector(".Highscore").textContent="0"
  document.querySelector("select").value=" "
  randomnumber= random(100);
  

}

function random(n){
 return Math.floor(Math.random()*n)+1;
 

}

function check(){
  let inputnumber=document.getElementById("guess").value 

if(initialvalue !==0){
  if(inputnumber > randomnumber){
    document.querySelector(".message").innerHTML="Your guess is high"
    document.querySelector(".Chances").textContent=--initialvalue
  }
  else if(inputnumber < randomnumber){
    document.querySelector(".message").innerHTML="Your guess is low"
    document.querySelector(".Chances").textContent=--initialvalue
    

  }
  else{
    document.body.style.backgroundColor="green"
    document.querySelector(".message").textContent="Hurry you won"
    document.querySelector(".Chances").textContent=--initialvalue
    highscore= initialvalue;
    document.querySelector(".Highscore").textContent=highscore
    document.querySelector(".btn").style.display="none"
    document.querySelector(".hide1").style.display="none"


  }

}
  else{
    document.querySelector(".message").textContent="game over"
}

}