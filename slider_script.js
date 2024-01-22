const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;
const projects = [
  'Memory allocator(lab work)',
  'Mobile weather app',
  'Weather bot in Telegram',
  'Image rotate(lab work)',
  'Database client-server manager',
];
const prlinks = [
  'https://gitlab.se.ifmo.ru/Dustik2003/assignment-memory-allocator',
  '#',
  'https://github.com/dustov2003/Telegram_weather_bot',
  'https://gitlab.se.ifmo.ru/Dustik2003/assignment-image-rotation',
  'https://github.com/dustov2003/GUI-Client-Server-collection-manager',
];

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
};

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
  document.getElementsByClassName('proj_name')[0].textContent = projects[slideIndex];
  document.getElementsByClassName('proj_link').href = prlinks[slideIndex];
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
  document.getElementsByClassName('proj_name')[0].textContent = projects[slideIndex];
  document.getElementById('proj_link').href = prlinks[slideIndex];
});

window.addEventListener('load', () => {
  slide();
});
