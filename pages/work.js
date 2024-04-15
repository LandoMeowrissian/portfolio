import '../script'

function importSection(selector) {
  fetch('index.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, 'text/html');
      const section = htmlDocument.querySelector(selector);
      document.body.appendChild(section);
    })
    .catch(err => {
      console.error('Failed to fetch page: ', err);
    });
}

// Use the function
importSection('intro');
