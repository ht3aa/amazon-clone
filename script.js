// Function to toggle language dropdown visibility
function toggleLanguageDropdown() {
  const dropdown = document.getElementById("language-dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Function to change the selected language
function changeLanguage(language) {
  const languageElement = document.getElementById("language");
  languageElement.textContent = language;
  toggleLanguageDropdown(); // Hide the dropdown after selecting a language
}

// Function to handle search (for now, just alerts the search term)
function searchAmazon() {
  const searchTerm = document.getElementById("search-input").value;
  alert(`Searching for: ${searchTerm}`);
}

/////////////// Start Slideshow container ///////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/////////////// End Slideshow container ///////////////////
