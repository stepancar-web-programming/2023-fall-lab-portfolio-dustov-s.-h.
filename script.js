const toggle = document.getElementById('themeToggle');

function setDarkTheme() {
  document.body.className = 'dark-theme';
  toggle.src = 'assets/sun.png';
  localStorage.theme = 'dark';
}

function setLightTheme() {
  document.body.className = 'light-theme';
  toggle.src = 'assets/moon.png';
  localStorage.theme = 'light';
}

function switchTheme() {
  if (document.body.className === 'dark-theme') setLightTheme();
  else setDarkTheme();
}
const curtheme = localStorage.getItem('theme');

if (curtheme === 'dark') {
  setDarkTheme();
}

toggle.addEventListener('click', switchTheme);
