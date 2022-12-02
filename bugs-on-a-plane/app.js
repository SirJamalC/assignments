const form = document["airline-form"];
const submit = document.getElementById("submit");
//var query = document.querySelector;


function formAlert() {

    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    const diet = [];  
    
    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    else if (form.elements["gluten"].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    else { (form.elements["paleo"].checked) 
        diet.push(document.getElementById("paleo").value);
    };
  
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    
};

submit.addEventListener("submit", formAlert);
