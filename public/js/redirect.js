/* About Page Redirect */

let aboutPageLinks = document.querySelectorAll(".about-page-link");

for (let item of aboutPageLinks) {
	item.setAttribute("href", window.location.protocol + "//" + window.location.host + "/about/");
}

/* Games Page Redirect */

let gamePageLinks = document.querySelectorAll(".game-page-link");

for (let item of gamePageLinks) {
	item.setAttribute("href", window.location.protocol + "//" + window.location.host + "/game/");
}


/* Button Redirect */

let exploreBtn = document.getElementById("explore-btn");
let homeDownBtn = document.getElementById("home-down-btn");
let newsBtn = document.getElementById("learn-more-news-btn");
let planetsBtn = document.getElementById("learn-more-planets-btn");

exploreBtn.addEventListener("click", () => {
	window.location.href = "#planets";
})

homeDownBtn.addEventListener("click", () => {
	window.location.href = "#planets";
});

newsBtn.addEventListener("click", () => {
	window.location.href = "https://www.space.com/";
})

planetsBtn.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host + "/planets";
})