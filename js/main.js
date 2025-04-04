
document.querySelector("#knap1").addEventListener("mouseover", headHighLight);
document.querySelector("#knap1").addEventListener("mouseout", headUnHighLight);
document.querySelector("#knap1").addEventListener("click", headInfo);

// function headHighLight () {
//     console.log("headHighLight");
//     document.querySelector("#knap1").style.fill = "#6F90EB";
// }
// function headUnHighLight () {
//     console.log("headUnHighLight");
//     document.querySelector("#knap1").style.fill = "#f00";
// }
function headInfo() {
    console.log("headInfo");
    document.querySelector(".info-text > h2").textContent = "Brug hovedet";
    document.querySelector(".info-text > article > p").textContent = "Giv dit hoved lov til at vandre. Tænk over dine drømme, løs et problem i hovedet, eller lav din egen indre koncert ved at nynne en sang. Du kan også prøve at huske alle sangteksterne til din yndlingssang - uden hjælp!";
}

document.querySelector("#knap2").addEventListener("mouseover", headHighLight);
document.querySelector("#knap2").addEventListener("mouseout", headUnHighLight);
document.querySelector("#knap2").addEventListener("click", eyeInfo);


// function headHighLight2 () {
//     console.log("headHighLight2");
//     document.querySelector("#knap2").style.fill = "#6F90EB";
// }
// function headUnHighLight2 () {
//     console.log("headUnHighLight2");
//     document.querySelector("#knap2").style.fill = "#f00";
// }
function eyeInfo() {
    console.log("eyeInfo");
    document.querySelector(".info-text > h2").textContent = "Brug øjnene";
    document.querySelector(".info-text > article > p").textContent = "Måske har du aldrig lagt mærke til den smukke arkitektur, de sjove reklamer eller de små øjeblikke mellem mennesker omkring dig. Uden musik i ørerne kan du opdage en ny verden lige foran dig.";
}

document.querySelector("#knap3").addEventListener("mouseover", headHighLight);
document.querySelector("#knap3").addEventListener("mouseout", headUnHighLight);
document.querySelector("#knap3").addEventListener("click", mouthInfo);


// function headHighLight3 () {
//     console.log("headHighLight3");
//     document.querySelector("#knap3").style.fill = "#6F90EB";
// }
// function headUnHighLight3 () {
//     console.log("headUnHighLight3");
//     document.querySelector("#knap3").style.fill = "#f00";
// }
function mouthInfo() {
    console.log("mouthInfo");
    document.querySelector(".info-text > h2").textContent = "Brug munden";
    document.querySelector(".info-text > article > p").textContent = "Livet er fyldt med små, uventede samtaler, der kan gøre din dag bedre. Sig hej til sidemanden, ros en forbipasserendes outfit, eller kom i snak med en barista. Måske får du et nyt perspektiv - eller bare et smil med på vejen.";
}

function headHighLight () {
    console.log("headHighLight");
    console.log(this);
    this.style.fill = "#6F90EB";
}

function headUnHighLight () {
    console.log("headUnHighLight");
    console.log(this);
    this.style.fill = "#f00";
}