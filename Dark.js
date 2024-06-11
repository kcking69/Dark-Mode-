const body = document.body;
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

toggle.addEventListener('click', () => {
  darkMode();
  JSON.parse(darkMode);
  localStorage.getItem('darkmode');
});

function darkMode() {
  body.classList.toggle('dark');
  circle.classList.toggle('dark');
  circle.classList.toggle('left');
  localStorage.setItem('darkmode', JSON.stringify(darkMode));
}
// localStorage still not working
