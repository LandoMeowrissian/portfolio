const body = document.querySelector('body');

setInterval(() => {
  const backgroundColors = ['#0d1b2a', '#212529', '#323232', '#353530', '#495057', '#6c757d', '#adb5bd', '#ced4da', '#e9ecef','#6c757d','#495057','#212529','#0d1b2a','#323232','#353530','#adb5bd','#343a40'];
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  body.style.backgroundColor = backgroundColors[randomIndex];
}, 5000);

// const services = document.getElementById('services');

// const images = ['./img/brainbeat-grid.png', './img/brainbeat-grid.jpeg']
// let currentImageIndex = 0;



// function changeServicesBackground () {
//    services.style.backgroundImage = `url(${images[currentImageIndex]})`;
//    currentImageIndex = (currentImageIndex + 1) % images.length;
// }

 
// setInterval(changeServicesBackground, 3000);
