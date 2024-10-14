var portfolio = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function hauteur() {
	const haut = window.innerHeight/100;
    document.documentElement.style.setProperty('--haut', `${haut}px`);
}

function device() {
	    if (window.innerHeight < window.innerWidth) {
    	document.getElementById("description").style.display = "none";
    }
}

async function animation() {

		window.scrollTo({
	        top: 0,
	        behavior: 'auto'
	    });


		var bio = document.getElementById("bio");
		var baniere = document.getElementById("baniere");
		/*var body = document.getElementByName("body")*/
		var video = document.getElementById("video");
		var titre = document.getElementById("titre");
		var marge = document.getElementById("marge");

		//mettre les transitions//
		baniere.style.transition = '0.4s';
		titre.style.transition = '1.5s';
		video.style.transition = '0.5s';


		if (bio.style.opacity == 1){
			bio.style.opacity = 0;
			baniere.style.opacity = 0;
			titre.style.top = "calc(var(--haut) * 0)";
			await sleep(1000);
			bio.style.display = "none";
			marge.style.display = "none";
			baniere.style.display = "none";
			/*baniere.style.display = "none";*/

			/*document.body.style.backgroundImage = "url('image/background_port.png')";*/
			video.style.display = "flex";
			await sleep(400);
			video.style.opacity = 1;
			await sleep(500);
			document.getElementById("titre_bouton").innerHTML = "AFFICHER BIO";


		} else {
			video.style.opacity = 0;
			titre.style.top = "calc(var(--haut) * 24)";
			await sleep(500);
			video.style.display = "none";
			marge.style.display = "block";
			bio.style.display = "flex";
			baniere.style.display = "flex";
			/*baniere.style.display = "flex";*/
			await sleep(500);
			baniere.style.opacity = 1;
			bio.style.opacity = 1;
			await sleep(400);
			document.body.style.backgroundImage = "none";
			document.getElementById("titre_bouton").innerHTML = "DECOUVRIR LE PORTFOLIO";
		}	

		baniere.style.transition = '0s';
		titre.style.transition = '0s';
		video.style.transition = '0s';

}

function next_video() {
	var video1 = document.getElementById("video1");
	var video2 = document.getElementById("video2");
}


function loader() {
	console.log('fonction loader'); 

	const loader = document.getElementById("loader");
	loader.style.display = 'none';
}

let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carrousel-item');
    if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;
    const offset = -currentIndex * 100; // chaque item fait 100% de largeur
    document.querySelector('.carrousel-wrapper').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

/*

let currentIndex = 0;
let startX = 0;
let isDragging = false;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carrousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carrousel-container').style.transform = `translateX(${offset}%)`;
}

// Événements tactiles sur le carrousel
const carrousel = document.querySelector('.carrousel');

carrousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

carrousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX - startX;

    if (moveX > 50) {
        moveSlide(-1); // Glissement vers la droite
        isDragging = false; // Empêche le glissement multiple
    } else if (moveX < -50) {
        moveSlide(1); // Glissement vers la gauche
        isDragging = false; // Empêche le glissement multiple
    }
});

carrousel.addEventListener('touchend', () => {
    isDragging = false;
});

// Pour s'assurer que les événements tactiles sont capturés
const iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {
    iframe.addEventListener('touchstart', (e) => {
        e.stopPropagation(); // Empêche la propagation pour éviter le comportement par défaut
    });
});

*/

/*

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        nextSlide();
    } else {
        prevSlide();
    }
});

*/

let startX;

window.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

window.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX > endX + 50) {
        nextSlide(); // glissement vers la gauche
    } else if (startX < endX - 50) {
        prevSlide(); // glissement vers la droite
    }
});
