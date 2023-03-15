const sections = document.querySelectorAll('.snap');

let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
  isScrolling = true;
  
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  sections[index].classList.add('active');
  
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

scrollToSection(currentSection);

window.addEventListener('wheel', (event) => {
  if (isScrolling) {
    return;
  }
  
  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
    scrollToSection(currentSection);
  } else if (event.deltaY < 0 && currentSection > 0) {
    current
