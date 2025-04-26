// Summary kode

// console.log(document.querySelector("#solution1").value);

const submit = document.querySelector("#submitbtn");
const situation = document.querySelector("#sumSituation");

submit.addEventListener("click",submitForm);


function submitForm() {
    document.querySelector("#sumSituation").textContent = document.querySelector("#").value;

}

function submitForm() {
    console.log(document.querySelector('input[name="solution"]:checked').value);
    document.querySelector("#sumSituation").textContent = document.querySelector("#situation").value;

   
    document.querySelector("#sumPlan").textContent = document.querySelector("#plan").value;

    document.querySelector("#sumStress").textContent = document.querySelector("#stresslevel").value;

    // radiobuttons
    document.querySelector("#sumSlut").textContent = document.querySelector('input[name="solution"]:checked').value;

    console.log(document.querySelector('input[name="solution"]:checked').value);
}

document.querySelector("#resetbtn").addEventListener("click", reset);

function reset() {
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
}


// STRESS LEVEL
const slider = document.getElementById("stresslevel");
const output = document.getElementById("stressValue");

output.textContent = slider.value;

slider.addEventListener("input", () => {
  output.textContent = slider.value;
});