// Create variables for fuction
const fistName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const eMail = document.getElementById("email");
// Creat eventListners 
document.querySelector("form.my-form").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(fistName.value)
})