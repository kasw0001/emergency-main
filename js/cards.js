// document.querySelector("#pan").classList.add("pan_animation");
// document.querySelector("#pan").classList.add("stop");

// document.querySelector("#pan").addEventListener("mouseover", startPanorama);
// document.querySelector("#pan").classList.add("mouseout", stopPanorama);

// function startPanorama() {
//     this.classList.remove("stop")
// }

// function stopPanorama() {
//     this.classList.add("stop")
// }





// const pan = document.querySelector("#pan");

// pan.classList.add("pan_animation");
// pan.classList.add("stop");

// pan.addEventListener("mouseover", startPanorama);
// pan.addEventListener("mouseout", stopPanorama);

// function startPanorama() {
//   this.classList.remove("stop");
// }

// function stopPanorama() {
//   this.classList.add("stop");
// }

document.addEventListener("DOMContentLoaded", function () {
    const pan = document.querySelector("#pan");
  
    if (!pan) return;
  
    pan.classList.add("pan_animation");
    pan.classList.add("stop");
  
    pan.addEventListener("mouseover", startPanorama);
    pan.addEventListener("mouseout", stopPanorama);
  
    function startPanorama() {
      this.classList.remove("stop");
    }
  
    function stopPanorama() {
      this.classList.add("stop");
    }
  });