const toggle = document.querySelector(".toggle");;
const ul = document.querySelector("ul");

function toggleMenu() {
    if (ul.classList.contains("none")) {
        ul.classList.remove("none");
        toggle.querySelector("a").innerHTML = "X";
    } else {
        ul.classList.add("none");
        toggle.querySelector("a").innerHTML = "+";
    }
}
  
  