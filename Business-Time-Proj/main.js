// create variable for button for eventListner
const btn = document.getElementById("btn");
// add eventListner to button
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
btn.addEventListener("submit", function (e){
    e.preventDefault()
    // create variable for input
    const form = document.getElementById("form");
    console.log(fname.value, lname.value, email.value);
    clearInputs();
});
function clearInputs(){
    fname.value = "";
    lname.value = "";
    email.value = "";
};