// JavaScript for collapsible menus
const collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Function to load content dynamically from other HTML files
function loadContent(page) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("page-content").innerHTML = this.responseText;
  }
  xhttp.open("GET", page, true);
  xhttp.send();
}

