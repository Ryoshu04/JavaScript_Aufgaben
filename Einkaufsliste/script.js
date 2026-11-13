window.addEventListener("load", initialize);

function initialize() {
   //alert('Guten Tag und viel Spass mit der Einkaufsliste :-)');
   const hinzufügen = document.getElementById("add-btn");
   hinzufügen.addEventListener("click", hinzufügenJa);
   const inputEnter = document.getElementById("add-input");
   inputEnter.addEventListener("keydown", enter)
}

function enter(e) {
   if (e.key === "Enter") {
      hinzufügenJa();
   }
}

function hinzufügenJa() {
   const li = document.createElement("li");
   const p = document.createElement("button");
   const ul = document.querySelector("ul");
   const input = document.getElementById("add-input");

   if (input.value != "") {
      li.innerHTML = input.value;
      ul.appendChild(li);
      li.appendChild(p);
      p.innerText = "x";
      input.value = "";
      input.focus();

   }

   li.addEventListener("click", abhackenJa);
   p.addEventListener("click", delet);
}

function abhackenJa(e) {
   e.target.classList.toggle("abgehackt");
}

function delet(e) {
   console.log("Hi");
   e.stopPropagation();
   e.target.parentElement.classList.add("delete");
}