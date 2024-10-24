var portfolio = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function hauteur() {
	const haut = window.innerHeight/100;
    document.documentElement.style.setProperty('--haut', `${haut}px`);
}

function device() {
	    if (window.innerHeight < window.innerWidth) { //version Ordi
	    	const description = document.querySelectorAll('.description');

			description.forEach((element) => { 
    // Exemple : change la couleur de fond de chaque élément
    		element.style.display = 'none';
			});
		}

		if (window.innerHeight > window.innerWidth) { //version telephone
			const arrow = document.querySelectorAll('.arrow');

			arrow.forEach((element) => {
				element.style.display = 'none';
			});

			const nav = document.querySelectorAll('.nav_carrousel');

			nav.forEach((element) => {
				element.style.position = 'absolute';
			});
		}



}

async function animation() {

		window.scrollTo({
	        top: 0,
	        behavior: 'auto'
	    });


		var bio = document.getElementById("bio");
		var baniere = document.getElementById("baniere");
		var video = document.getElementById("video");
		var titre = document.getElementById("titre");
		var marge = document.getElementById("marge");
		var footer = document.getElementById('footer');

		//mettre les transitions//
		baniere.style.transition = '0.4s';
		titre.style.transition = '1.5s';
		video.style.transition = '0.5s';


		if (bio.style.opacity == 1){
			document.body.classList.add('no-scroll');
			bio.style.opacity = 0;
			baniere.style.opacity = 0;
			titre.style.top = "calc(var(--haut) * 0)";
			footer.style.position = 'absolute';
			await sleep(1000);
			bio.style.display = "none";
			//marge.style.display = "none";
			baniere.style.display = "none";
			/*baniere.style.display = "none";*/
			video.style.display = "flex";
			await sleep(400);
			video.style.opacity = 1;
			await sleep(500);
			document.getElementById("titre_bouton").innerHTML = "AFFICHER BIO";



		} else {
			video.style.opacity = 0;
			titre.style.top = "calc(var(--haut) * 24)";
			
			document.body.classList.remove('no-scroll');
			await sleep(500);
			footer.style.position = 'relative';
			video.style.display = "none";
			//marge.style.display = "block";
			bio.style.display = "flex";
			baniere.style.display = "flex";
			/*baniere.style.display = "flex";*/
			await sleep(500);
			baniere.style.opacity = 1;
			bio.style.opacity = 1;
			await sleep(400);
			document.getElementById("titre_bouton").innerHTML = "DECOUVRIR LE PORTFOLIO";


			
		}	

		baniere.style.transition = '0s';
		titre.style.transition = '0s';
		video.style.transition = '0s';

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


