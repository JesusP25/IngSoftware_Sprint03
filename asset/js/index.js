const images = [
    'asset/img/carrusel01.jpg',
    'asset/img/carrusel03.jpg',
    'asset/img/carrusel02.jpg',
    'asset/img/carrusel04.jpg'
  ];

  let index = 0;
  const section = document.getElementById('heroSection');

  function changeBackground() {
    section.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 4000);