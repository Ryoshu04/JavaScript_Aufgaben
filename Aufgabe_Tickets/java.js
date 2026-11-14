window.addEventListener("load", initialize);

const form = document.getElementById("formular")
form.addEventListener("submit", validate)
const email = document.getElementById("email");
function initialize() {

}


function isValidEmail(emailAddr) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)) {
        return (true)
    }
    return (false)
}


function validate(e) {
    const ticktes = document.getElementById("ticket")
    const emailRight = isValidEmail(email.value)
    e.preventDefault();
    if (emailRight == true && ticktes.value != "wahl") {
        form.submit();
        return;
    }
    if (emailRight == false || ticktes.value == "wahl") {
        if (ticktes.value == "wahl" && emailRight != false) {
            alert("Bitte gib die Anzahl Tickets an");
        }

        else if (emailRight == false && ticktes.value == "wahl")
        {
            alert("Beides fehlt...! >:(");
        }
        else { alert("Die Email-Adresse fehlt oder ist invalide :("); }


    }
}
