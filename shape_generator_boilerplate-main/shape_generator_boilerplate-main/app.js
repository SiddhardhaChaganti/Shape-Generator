let button=document .getElementById("button")
var numberinshape=1
var oldvalue=0

button.onclick =()=> {
let n = document.getElementById("number").value;
const circle = document.getElementById("circle")
const square = document.getElementById("square")
const rectangle = document.getElementById("rectangle")
const $box = document.getElementById("box")
n = Number(oldvalue) + Number(n);
for(let j = numberinshape; j<=n; j++){
    var shape = document.createElement("div")
    shape.innerHTML += numberinshape;
    if(circle.checked){
        shape.classList.add("circle")
     } else if(square.checked){
            shape.classList.add("square")
      } else if(rectangle.checked){
                shape.classList.add("rectangle")
    }

    $box.appendChild(shape)
    numberinshape++;
    oldvalue=document.getElementById("box").lastElementChild.innerHTML;
 }

}
