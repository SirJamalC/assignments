const square = document.getElementById("square")

square.addEventListener("mouseover", function() {
    document.getElementById("square").style.backgroundColor = "blue";
})

square.addEventListener("mousedown", function() {
    document.getElementById("square").style.backgroundColor = "red";
})

square.addEventListener("mouseout", function() {
    document.getElementById("square").style.backgroundColor = "black";
})

square.addEventListener("mouseup", function() {
    document.getElementById("square").style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function() {
    document.getElementById("square").style.backgroundColor = "green";
})

window.addEventListener("wheel", function() {
    this.document.getElementById("boz").style.backgroundColor = "orange";
})

window.addEventListener("keydown", pressedKey)
window.addEventListener("keyup", releasedKey)

function pressedKey(e) {
    if(e.key === "b"){square.style.backgroundColor = "blue"}
    else if(e.key === "r"){square.style.backgroundColor = "red"}
    else if(e.key === "y"){square.style.backgroundColor = "yellow"}
    else if(e.key === "g"){square.style.backgroundColor = "green"}
}

function releasedKey(e) {
    if(e.key === "b" && (square.style.backgroundColor = "blue")) {square.style.backgroundColor = "black"}
    else if(e.key === "r" && (square.style.backgroundColor = "red")) {square.style.backgroundColor = "black"}
    else if(e.key === "y" && (square.style.backgroundColor = "yellow")) {square.style.backgroundColor = "black"}
    else if(e.key === "g" && (square.style.backgroundColor = "greeen")) {square.style.backgroundColor = "black"}
}




