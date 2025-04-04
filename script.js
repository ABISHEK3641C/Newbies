document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    var loading = document.getElementById("loading");
    var spinner = document.querySelector(".spinner");

    errorMessage.innerText = ""; // Clear previous errors

    var users = {
      "AKKSHUN PURBIA": {
        "597CS24005": "DATA/597CS24005_Data/A.html",
      },

      "GURUNANDAN NADIG": {
        "597CS24020": "DATA/597CS24020_Data/A.html",
      },

      "PRAVATA PANDA": {
        "597CS24042": "DATA/597CS24042_Data/A.html",
      },
      
      "VINAY PRAKASH": {
        "597CS24060": "DATA/597CS24060_Data/A.html",
      },
    };

    if (users[username] && users[username][password]) {
      loading.style.display = "block"; // Show loading text
      spinner.style.display = "block"; // Show spinner animation

      setTimeout(function () {
        // Delay of 1 second before redirecting

        window.location.href = users[username][password];
      }, 1000); // 1-second delay
    } else {
      errorMessage.innerText = "Incorrect username or password!";
      alert("Incorrect username or password! Please try again.");
    }
  });

