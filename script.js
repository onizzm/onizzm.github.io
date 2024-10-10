var portfolio = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function hauteur() {
	const haut = window.innerHeight/100;
    document.documentElement.style.setProperty('--haut', `${haut}px`);
}

//





// 


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
			titre.style.top = "calc(var(--haut) * 30)";
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
