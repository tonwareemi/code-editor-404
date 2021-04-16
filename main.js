const text = document.getElementsByClassName("text")[0];
const striText = text.textContent;
const splitText = striText.split("");
text.textContent = "";
for (var i = 0; i < striText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
var timer = setInterval(add,50);//you can ajust the speed of the animation here

  //ADDING THE EFFECT
function add(){
  var span = document.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}