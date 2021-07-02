let currentPlanet = 0;
const planetOrder = [
	"sun",
	"mercury",
	"venus",
	"earth",
	"mars",
	"jupiter",
	"saturn",
	"uranus",
	"neptune"
];


function changeViewPlanet(operation) {
	let viewingPlanet = document.querySelector(".viewing");
	let viewingPlanetImg = viewingPlanet.firstElementChild;

	viewingPlanetImg_width = viewingPlanetImg.clientWidth;
	viewingPlanetImg_height = viewingPlanetImg.clientHeight;

	let incrementValue = 20;

	if(operation == "remove") {
		incrementValue *= -1;
	} 

	viewingPlanetImg.width = String(viewingPlanetImg_width + incrementValue);
	viewingPlanetImg.height = String(viewingPlanetImg_height + incrementValue);
}

changeViewPlanet("add");

function changePlanet() {
	changeViewPlanet("remove");
	let viewingPlanet = document.querySelector(".viewing");
	viewingPlanet.classList.remove("viewing");

	let currentViewPlanet = this;
	let currentViewPlanetID = currentViewPlanet.firstElementChild.id;
	currentPlanet = planetOrder.indexOf(currentViewPlanetID.substring(0, currentViewPlanetID.length - 5));
	currentViewPlanet.classList.add("viewing");
	changeViewPlanet("add");
}


let planetImages = document.querySelectorAll(".planets-icon-container");

for(let planetImg of planetImages) {
	planetImg.onclick = changePlanet;
}


let nextBtn = document.getElementById("next-btn");
let backBtn = document.getElementById("back-btn");



nextBtn.addEventListener("click", () => {
	currentPlanet++;

	backBtn.style.display = "inline";
	nextBtn.style.display = "inline";

	if(currentPlanet > 0) {
		backBtn.style.display = "inline";
	}

	if(currentPlanet == 8) {
		nextBtn.style.display = "none";
	}

	changeViewPlanet("remove");

	let viewingPlanet = document.querySelector(".viewing");
	viewingPlanet.classList.remove("viewing");

	let currentPlanetElement = document.getElementById(planetOrder[currentPlanet] + "-icon");
	let currentPlanetElement_Parent = currentPlanetElement.parentElement;

	let currentViewPlanet = currentPlanetElement_Parent;
	currentViewPlanet.classList.add("viewing");
	changeViewPlanet("add");

})

backBtn.addEventListener("click", () => {
	currentPlanet--;
	backBtn.style.display = "inline";
	nextBtn.style.display = "inline";

	if(currentPlanet == 0) {
		backBtn.style.display = "none";
	}

	changeViewPlanet("remove");

	let viewingPlanet = document.querySelector(".viewing");
	viewingPlanet.classList.remove("viewing");

	let currentPlanetElement = document.getElementById(planetOrder[currentPlanet] + "-icon");
	let currentPlanetElement_Parent = currentPlanetElement.parentElement;

	let currentViewPlanet = currentPlanetElement_Parent;
	currentViewPlanet.classList.add("viewing");
	changeViewPlanet("add");

})