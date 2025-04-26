const css = document.querySelector("#lightmode");
console.log(css.href);

// Løsning 3
const btn3 = document.querySelector("#switchBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3() {
    console.log("changeMode")
    if (css.href.includes("css/customdark")) {
        css.href = "css/custom.css";
        switchtext3.textContent = "Dark Mode ";
    } else {
        console.log("skifter til dark")
        css.href = "css/customdark.css";
        switchtext3.textContent = "Light Mode ";
    }
}