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



// creo le variabili per il collegamento degli elementi dall'HTML
const carouselContainerEl = document.getElementById('carousel-container');
const carouselInnerEl = document.getElementById('carousel-inner');
const arrowUpEl = document.getElementById('arrow-up');
const arrowDownEl = document.getElementById('arrow-down');
let activePageEl = document.getElementById('active-page');
let cardEl = document.getElementById('cards');




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

console.log(images[0]);


// creo variabile contatore
let index = 0;

cardEl = index;


// creo il ciclo for per identificare gli elementi
for(let i = 0; i < images.length; i++){

    
    // creo l'elemento div e lo appendo al container
    let cardEl = document.createElement('div');
    cardEl.classList.add('cards');
    carouselInnerEl.append(cardEl);
    
    console.log(cardEl)



    // creo variabile per poter pescare i singoli elementi
    let arrayInnerEl = images[i];

    

    // creo l'elemento immagine e lo appendo al container
    let imageEl = document.createElement('img');
    imageEl.classList.add('image')
    imageEl.src = arrayInnerEl.image;
    
    cardEl.append(imageEl);




  

    
    


    /*let titleEl = document.createElement('div');
    titleEl.classList.add('title');
    titleEl.innerText = arrayInnerEl.title;

    carouselInnerEl.append(titleEl);
    */

    
}




arrowUpEl.addEventListener('click', function(){

    
    index++;

    activePageEl = cardEl[index];
    
    console.log(index);
});



