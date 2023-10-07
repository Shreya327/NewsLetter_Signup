var x = document.querySelector("#error");
x.style.visibility = "hidden";

function redirect() {
  window.location.href = "http://127.0.0.1:5500/index.html?";
}
function myFunc() {
  window.location.href = "http://127.0.0.1:5500/success.html";
}
var enteredMail = document.getElementById("text");


function validate() {
  
  
  if (enteredMail.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
    return myFunc();
  } 
  else {
    x.style.visibility = "visible";
    document.querySelector("#text").style.borderColor =
      "hsl(4, 100%, 67%)";
      document.querySelector("#text").style.backgroundColor =
      "hsl(4, 90%, 89%)";
      document.querySelector("#text").style.color =
      "hsl(4, 100%, 67%)";
  }
}
