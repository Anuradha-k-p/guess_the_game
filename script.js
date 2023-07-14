let change =document.getElementById("change")
change.innerHTML="Hello world"

//Q5
let replacet=document.getElementById("h2")
function replace(){
    replacet.innerHTML="Welcome to Elevation Acadomy"
}

let color = document.getElementById("hello")
color.style.color="red"
color.setAttribute("id","heading")


//Q7
function change1(){
    const a=document.getElementById("container")


    if(a.style.flexDirection=== "row"){
        a.style.flexDirection = "column";
    }
    else{
        a.style.flexDirection = "row"
    }
}

//Q9
 
  function clk(){
  document.getElementById("clock").innerHTML= new Date().toLocaleTimeString();
  }
  setInterval(clk,1000);