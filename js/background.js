const images = ['0.jpeg','1.jpeg','2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement('img');
bgImage.id = "bgImage";
bgImage.width = screen.availWidth;
bgImage.height = screen.availHeight-(window.outerHeight-window.innerHeight);
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);