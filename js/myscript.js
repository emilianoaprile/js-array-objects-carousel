console.log('Carosello Oggetti')

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



// recupero elemento div carosello dal DOM
const caroselloDOMElement = document.querySelector('.carosello');
console.log(caroselloDOMElement);

// Creo il carosello
for (let i = 0; i < images.length; i++) {

    console.log(i);

    const caroselloImages = images[i];
    console.log(caroselloImages);

    // creo elemento div, gli do classe img-wrapper e lo appendo al div carosello
    const imgWrapperDOMElement = document.createElement('div');
    console.log(imgWrapperDOMElement);
    imgWrapperDOMElement.classList.add('img-wrapper');
    caroselloDOMElement.appendChild(imgWrapperDOMElement);

    // creo tag img, gli do classe carosello-img e lo appendo a img-wrapper
    const imgDOMElment = document.createElement('img');
    console.log(imgDOMElment);
    imgDOMElment.classList.add('carosello-img');
    imgWrapperDOMElement.appendChild(imgDOMElment);

    // creo tag paragrafo, gli do classe img-text e lo appendo a img-wrapper
    const textImgDOMElement = document.createElement('p');
    console.log(textImgDOMElement);
    textImgDOMElement.classList.add('img-text');
    imgWrapperDOMElement.appendChild(textImgDOMElement);

    // inerisco img dentro il wrapper
    imgDOMElment.src = caroselloImages.image;

    console.log('Image:', caroselloImages.image);

    console.log('Title:', caroselloImages.title);

    console.log('Text:', caroselloImages.text);
}

const imageCarouselElements = document.querySelectorAll('.img-wrapper');

let imageCarouselActualIndex = 0;

imageCarouselElements[imageCarouselActualIndex].classList.add('active');

// btn-right

document.querySelector('.btn-right').addEventListener('click', function() {
    imageCarouselElements[imageCarouselActualIndex].classList.remove('active');

    imageCarouselActualIndex++;

    if (imageCarouselActualIndex >= images.length) {
        imageCarouselActualIndex = 0;
    }

    imageCarouselElements[imageCarouselActualIndex].classList.add('active');
});

// btn-left

document.querySelector('.btn-left').addEventListener('click', function() {

    imageCarouselElements[imageCarouselActualIndex].classList.remove('active');

    
    if (imageCarouselActualIndex === 0) {
        imageCarouselActualIndex = images.length;
    }

    imageCarouselActualIndex--;
    
    imageCarouselElements[imageCarouselActualIndex].classList.add('active');
});