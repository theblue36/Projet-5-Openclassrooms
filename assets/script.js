const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById("banner");
	const bannerImg = document.querySelector(".banner-img");
	const bannerTagline = document.querySelector("#banner p");
	const dots = document.querySelector(".dots");
	const dotSpans = dots.querySelectorAll('span');

	let currentSlideIndex = 0;

	const leftArrow = document.querySelector("#left-arrow");
	const rightArrow = document.querySelector("#right-arrow");

	leftArrow.addEventListener("click", showPreviousSlide);
	rightArrow.addEventListener("click", showNextSlide);

	for (let i = 0; i < dotSpans.length; i++) {
		dotSpans[i].addEventListener('click', function () {
			currentSlideIndex = i;
			updateSlide();
		});
	}

	function showNextSlide() {
		currentSlideIndex++;
		if (currentSlideIndex >= slides.length) {
			currentSlideIndex = 0;
		}
		updateSlide();
	}

	function showPreviousSlide() {
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
			currentSlideIndex = slides.length - 1;
		}
		updateSlide();
	}
	function updateSlide() {
		const slide = slides[currentSlideIndex];
		bannerImg.src = `./assets/images/slideshow/${slide.image}`;
		bannerTagline.innerHTML = slide.tagLine;
		updateDots();
	}


	function updateDots() {
		dots.innerHTML = "";
		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement("span");
			dot.classList.add("dot");
			dot.setAttribute("data-index", i);
			if (i === currentSlideIndex) {
				dot.classList.add("active");
			}
			dots.appendChild(dot);
			dot.addEventListener("click", function () {
				currentSlideIndex = parseInt(this.getAttribute("data-index"));
				updateSlide();
			});
		}

		const activeDots = dots.querySelectorAll(".active");
		for (let i = 0; i < activeDots.length; i++) {
			activeDots[i].classList.add(`fill-${i + 1}`);
		}
	}

	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerTagline.innerHTML = slides[currentSlideIndex].tagLine;
	updateDots();