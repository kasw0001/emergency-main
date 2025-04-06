// Summary kode

// console.log(document.querySelector("#solution1").value);

const submit = document.querySelector("#submitbtn");
const situation = document.querySelector("#sumSituation");

submit.addEventListener("click",submitForm);

function submitForm() {
    document.querySelector("#sumSituation").textContent = document.querySelector("#").value;

}

function submitForm() {
    situation.textContent = document.querySelector("#").value;
    document.querySelector("#sumSituation").textContent = document.querySelector("#solution").value

    document.querySelector("#sum").textContent = document.querySelector("#solution").value;

    // radiobuttons
    document.querySelector("#sumSlut").textContent = document.querySelector('input[name="solution"]:checked').value;

}

document.querySelector("#resetbtn").addEventListener("click", reset);

function reset() {
    document.querySelector("#").reset();
    document.querySelector("#").style.display = "none";
}