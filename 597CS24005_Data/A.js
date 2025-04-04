/* script.js */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", function () {
      let targetPage = button.getAttribute("data-target");
      let loader = document.getElementById("loader");
    });
  });

  // Page load होने के बाद लोडर हटाएं
  window.addEventListener("load", function () {
    document.getElementById("loader").classList.remove("active");
    console.log("Page loaded, loader hidden");
  });
});

/*Sliders Toggle Function*/
function toggleSlider(sliderId, pdfUrl) {
  let sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    let downloadBtn = slider.querySelector(".download-btn");

    if (slider.id === sliderId) {
      slider.classList.toggle("active");
      if (slider.classList.contains("active")) {
        slider.querySelector("iframe").src = pdfUrl; // Load PDF
        downloadBtn.href = pdfUrl; // Set download link
      } else {
        slider.querySelector("iframe").src = ""; // Unload PDF
        downloadBtn.href = ""; // Remove download link
      }
    } else {
      slider.classList.remove("active");
      slider.querySelector("iframe").src = ""; // Unload other PDFs
      slider.querySelector(".download-btn").href = ""; // Remove other download links
    }
  });
}

// Close sliders when clicking outside
document.addEventListener("click", function (event) {
  let isClickInsideSlider = event.target.closest(".slider");
  let isClickInsideButton = event.target.closest(".nav-button");

  if (!isClickInsideSlider && !isClickInsideButton) {
    document.querySelectorAll(".slider").forEach((slider) => {
      slider.classList.remove("active");
      slider.querySelector("iframe").src = ""; // Unload PDF
      slider.querySelector(".download-btn").href = ""; // Remove link
    });
  }
});


//Image Sliders
let clgslideIndex = 0;
const clgslides = document.querySelectorAll(".clgslides img");

function clgshowSlides() {
  clgslides.forEach((slide, index) => {
    slide.classList.remove("clgactive");
    if (index === clgslideIndex) {
      slide.classList.add("clgactive");
    }
  });
  clgslideIndex = (clgslideIndex + 1) % clgslides.length;
}
setInterval(clgshowSlides, 2000); // Change image every 2 seconds
