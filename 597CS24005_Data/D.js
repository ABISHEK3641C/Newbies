/* script.js */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", function () {
      let targetPage = button.getAttribute("data-target");
      let loader = document.getElementById("loader");

      // अगर DOCUMENT बटन है, तो स्लाइडिंग इफेक्ट लागू करें
      if (button.id === "document-btn") {
        document.getElementById("document-section").classList.toggle("active");
        console.log("Document section toggled");
      }
      // अन्य बटनों के लिए 1 सेकंड की देरी से पेज नेविगेट करें
      else if (targetPage) {
        loader.classList.add("active");
        console.log("Page transition started");
        setTimeout(() => {
          window.location.href = targetPage;
        }, 1000); // 1 सेकंड की देरी
      }
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
        downloadBtn.href = pdfUrl; // Set download link
      } else {
        downloadBtn.href = ""; // Remove download link
      }
    } else {
      slider.classList.remove("active");
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

// **Dark Mode Toggle Function**
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// **Check if Dark Mode was previously enabled**
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// **Dark Mode Button Event Listener**
document.querySelector("toggle-btn").addEventListener("click", toggleDarkMode);
