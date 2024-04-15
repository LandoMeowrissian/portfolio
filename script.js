const body = document.querySelector('body');

setInterval(() => {
  const backgroundColors = ['#0d1b2a', '#212529', '#323232', '#353530', '#495057', '#323232', '#0d1b2a', '#343a40','#313131','#495057','#212529','#0d1b2a','#323232','#353530','#000000','#343a40'];
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  body.style.backgroundColor = backgroundColors[randomIndex];
}, 10000);
