const form = document["addItem"];
const list = document.getElementById("list")
//console.log(addItem)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //alert("its all good")
    // used submit eventListner to grab info

    const li = document.createElement("li");
    list.append(li);
//created list item
    const div = document.createElement("div");
    div.textContent = form.title.value;
    li.appendChild(div);
//created div for list items   
    const button = document.createElement("button");
    button.innerHTML = "X";
    div.prepend(button);
//created button    
    var body = document.getElementsByTagName("body")[0];

    button.addEventListener("click", function() {li.remove();

    })
    
    form.title.value = " "



})