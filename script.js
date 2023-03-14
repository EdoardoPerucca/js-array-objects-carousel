/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup 
statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare 
dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà 
visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la 
prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà 
l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
*/


/*
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
*/

// creo le variabili per il collegamento degli elementi dall'HTML
const carouselContainerEl = document.getElementById('carousel-container');
const carouselInnerEl = document.getElementById('carousel-inner');
const slideContainerEl = document.getElementById('slider-container');
const activeImgEl = document.getElementById('active-img');
const arrowUpEl = document.getElementById('arrow-up');
const arrowDownEl = document.getElementById('arrow-down');
const titleEl = document.getElementById('title');
const textEl = document.getElementById('text');
const thumbnailsEl = document.getElementById('thumbnails');



// creo array di oggetti
let images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// indice contatore
let index = 0;

newThumbnails(thumbnailsEl, images);

const newThumbnailArray = document.querySelectorAll('.thumbnail');

showImg(images, index);

arrowUpEl.addEventListener('click', function() {
    
    index = indexUpdate(index, 'su');
    
    showImg(images, index);
    
});


arrowDownEl.addEventListener('click', function() {
    
    index = indexUpdate(index, 'giu');
    
    showImg(images, index);
    
});




// ----------- Function --------------



// mostra le immagini, titolo e descrizioni delle slide
function showImg(slideArray, actualIndex) {

    const showObject = slideArray[actualIndex];

    activeImgEl.src = showObject.image;

    titleEl.innerText = showObject.title;

    textEl.innerText = showObject.text;

   

    newThumbnailArray.forEach((actualThumbnail) => {
        actualThumbnail.classList.remove('active');
      })
    
      // rendo "active" la miniatura relativa all'index
      newThumbnailArray[actualIndex].classList.add('active');

}


// funzione per il carosello infinito
function indexUpdate(actualIndex, direction) {

    if(direction == 'su') {

        if(actualIndex <= 0) {

            return images.length - 1;

        } else {

            return actualIndex - 1;

        }

    }   else {

        if(actualIndex >= images.length - 1) {

            return 0;

        }   else {

            return actualIndex + 1;
        }
    }

}


function newThumbnails(thumbnailsElContainer, arrayThumbnails) {

    arrayThumbnails.forEach((actualImage) => {

        let newElementThumbnail = document.createElement('img');
        newElementThumbnail.src = actualImage.image;
        newElementThumbnail.classList.add('thumbnail');
        
        thumbnailsElContainer.append(newElementThumbnail);
    });

    

}
