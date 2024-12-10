console.log("fichier ui");

document.getElementById('imgbaniere').onload = function() {
	console.log("onload");
	charge();
};    

const video = document.getElementById("video");
let startX;
let isMoving = false;

video.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Position initiale
    isMoving = true; // Indique que le mouvement a commencé
});

video.addEventListener('touchmove', (event) => {
    if (!isMoving) return; // Ne rien faire si pas en mouvement

    const currentX = event.touches[0].clientX; // Position actuelle
    const diffX = startX - currentX; // Calculer la différence

    // Vous pouvez ajouter une logique pour déterminer si le geste doit être considéré
    // par exemple, si diffX dépasse un certain seuil
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextSlide(); // Glissement vers la gauche
        } else {
            prevSlide(); // Glissement vers la droite
        }
        isMoving = false; // Réinitialiser le flag pour éviter les appels répétés
    }
});

video.addEventListener('touchend', () => {
    isMoving = false; // Réinitialiser le flag lorsque le toucher se termine
});


document.addEventListener('keydown', (event) => {
	if (window.getComputedStyle(document.getElementById('video')).style.display === 'flex') {
	console.log('proutzerrr');
		if (event.key === "ArrowLeft") {
		prevSlide();
		} else if (event.key === "ArrowRight") {
		nextSlide();
		};
	};

});


const info = document.querySelectorAll('.info');
const des = document.querySelectorAll('.description');

info.forEach(div => {
	div.addEventListener('mouseover', () => {
		des.forEach(des => {
			des.style.opacity = 1;
			des.style.zIndex = 2;
		});
	});

	div.addEventListener('mouseout', () => {
		des.forEach(des => {
			des.style.opacity = 0;
			des.style.zIndex = 0;
		});
	});

});


if (window.innerHeight < window.innerWidth) {
	window.addEventListener('resize', hauteur);
}


