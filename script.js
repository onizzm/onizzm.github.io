var portfolio = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function animation() {
		var bio = document.getElementById("bio");
		var baniere = document.getElementById("baniere");
		/*var body = document.getElementByName("body")*/
		var video = document.getElementById("video");
		var titre = document.getElementById("titre");
		var marge = document.getElementById("marge");


		if (bio.style.opacity == 1){
			bio.style.opacity = 0;
			baniere.style.opacity = 0;
			titre.style.top = "0vh"
			await sleep(1000);
			bio.style.display = "none";
			marge.style.display = "none";
			baniere.style.display = "none";
			/*baniere.style.display = "none";*/

			/*document.body.style.backgroundImage = "url('image/background_port.png')";*/
			video.style.display = "flex";
			await sleep(400);
			video.style.opacity = 1;
			document.getElementById("titre_bouton").innerHTML = "AFFICHER BIO";


		} else {
			video.style.opacity = 0;
			titre.style.top = "30vh";
			await sleep(500);
			video.style.display = "none";
			marge.style.display = "block";
			bio.style.display = "flex";
			baniere.style.display = "flex";
			/*baniere.style.display = "flex";*/
			await sleep(400);
			baniere.style.opacity = 1;
			bio.style.opacity = 1;
			document.body.style.backgroundImage = "none";
			document.getElementById("titre_bouton").innerHTML = "DECOUVRIR LE PORTFOLIO";
		}	

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

function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVh);
window.addEventListener('load', setVh);


function setVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setVH);
setVH();
