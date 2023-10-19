console.log('Carosello')

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

console.log(images);

// recupero elemento div container dal DOM
const wrapperDOMElement = document.querySelector('.wrapper');
console.log(wrapperDOMElement);

// Creo il carosello
for (let i = 0; i < images.length; i++) {

    console.log(i);

    const caroselloImages = images[i];
    console.log(caroselloImages);

    // creo struttura html inserendo images dentro a wrapper
    const imgDOMElment = document.createElement('img');
    console.log(imgDOMElment);
    imgDOMElment.classList.add('img-lg');
    wrapperDOMElement.appendChild(imgDOMElment);


    // inerisco img dentro il wrapper
    imgDOMElment.src = caroselloImages.image;

    console.log('Image:', caroselloImages.image);

    console.log('Title:', caroselloImages.title);

    console.log('Photo:', caroselloImages.text);
}



const imageCarouselElements = document.querySelectorAll('.img-lg');
const thumbImagesDOMElements = document.querySelectorAll('.img-sm');
console.log(thumbImagesDOMElements)

let imageCarouselActualIndex = 0;
let imageThumbCurrentIndex = 0;

imageCarouselElements[imageCarouselActualIndex].classList.add('active');

thumbImagesDOMElements[imageThumbCurrentIndex].classList.add('border-active')


// btn-down

document.querySelector('.btn-down').addEventListener('click', function() {
    imageCarouselElements[imageCarouselActualIndex].classList.remove('active');
    thumbImagesDOMElements[imageThumbCurrentIndex].classList.remove('border-active');

    imageCarouselActualIndex++;
    imageThumbCurrentIndex++;

    if (imageCarouselActualIndex >= images.length) {
        imageCarouselActualIndex = 0;
        imageThumbCurrentIndex = 0;
    }
    
    
    imageCarouselElements[imageCarouselActualIndex].classList.add('active');
    thumbImagesDOMElements[imageThumbCurrentIndex].classList.add('border-active');

});

// btn-up

document.querySelector('.btn-up').addEventListener('click', function() {

    imageCarouselElements[imageCarouselActualIndex].classList.remove('active');
    thumbImagesDOMElements[imageThumbCurrentIndex].classList.remove('border-active');


    
    if (imageCarouselActualIndex === 0 && imageThumbCurrentIndex === 0) {
        imageCarouselActualIndex = images.length;  
        imageThumbCurrentIndex = thumbImagesDOMElements.length;
    }

    imageCarouselActualIndex--;
    imageThumbCurrentIndex--;
    
    imageCarouselElements[imageCarouselActualIndex].classList.add('active');
    thumbImagesDOMElements[imageThumbCurrentIndex].classList.add('border-active');

});