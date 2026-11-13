
function hoverAn(e) {
    e.target.parentElement.classList.add("hover");
}
function hoverAb(e) {
    e.target.parentElement.classList.remove("hover");
}
function anschalten(e) {
    e.preventDefault();
    e.target.parentElement.classList.add("anschalten");
    e.currentTarget.textContent = "Abgeschaltet!!!!!";
}


function initialize() {
    const schalter = ["antrieb", "holodeck", "hitzeschild", "transporter"];
    for (let i = 0; i < schalter.length; i++) {
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseover", hoverAn);
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseout", hoverAb);
        document.getElementById("schalter-" + schalter[i]).addEventListener("click", anschalten);
    }
}
window.addEventListener("load", initialize);