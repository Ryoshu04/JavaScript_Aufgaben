window.addEventListener("load", initialize);

function initialize() {
   //alert('Guten Tag und viel Spass mit der Einkaufsliste :-)');
   const hinzufügen = document.getElementById("add-btn");
   hinzufügen.addEventListener("click", hinzufügenJa);

}

function hinzufügenJa() {
   const li = document.createElement("li"); 
   const ul = document.querySelector("ul");
   ul.appendChild(li); 

   const input = document.getElementById("add-input");
   li.innerHTML = input.value;
   input.value = "";
   input.focus();

   li.addEventListener("click", abhackenJa);
}

function abhackenJa(e) {
   e.target.classList.toggle("abgehackt");
}
