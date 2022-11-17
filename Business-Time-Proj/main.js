// create variable for button for eventListner
const btn = document.getElementById("btn");
// add eventListner to button
btn.addEventListener("click", function handleClick(event){
    event.preventDefault()
    // create variable for input
    const form = document.getElementById("form");
    console.log(form.value)
    // clear input filed
    form.value = "";
})