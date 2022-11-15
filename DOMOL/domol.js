const myDommi = document.getElementById("dommi")
console.dir(myDommi)

const h2 = document.createElement("h2")
h2.textContent = "Grab the bull by the horns"
myDommi.appendChild(h2)


let list = document.getElementById("list")
let data = [
    "dog", "cat", "mouse"]

data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
})
