function logSubmit(event) {
    log.textcontent = `Information Submitted! Time Stamp: ${event.timeStamp}`;
    event.preventDefault()
}
// create variables for eventListner
const form = document.getElementById("form");
const log = document.getElementById("log");
// create eventListner
form.addEventListener("submit", logSubmit);
