/* Redirect Home */

let homeLink = document.getElementById("home-link");

homeLink.setAttribute("href", window.location.protocol + "//" + window.location.host);

let exploreNowBtn = document.getElementById("explore-now-btn");

exploreNowBtn.addEventListener("click", () => {
	window.location.href = window.location.protocol + "//" + window.location.host;
})

/* Redirect Planets Page */

let planetsLinks = document.querySelectorAll(".planets-link");

for (let planetsLink of planetsLinks) {
	planetsLink.setAttribute("href", window.location.protocol + "//" + window.location.host + "/#planets");
}

/* Redirect News Page */

let newsLinks = document.querySelectorAll(".news-link");

for (let newsLink of newsLinks) {
	newsLink.setAttribute("href", window.location.protocol + "//" + window.location.host + "/#news");
}

/* Redirect Contact Page */

let contactLinks = document.querySelectorAll(".contact-link");

for (let contactLink of contactLinks) {
	contactLink.setAttribute("href", window.location.protocol + "//" + window.location.host + "/#contact");
}

/* Redirect Game Page */


let gameLinks = document.querySelectorAll(".game-link");

for (let gameLink of gameLinks) {
	gameLink.setAttribute("href", window.location.protocol + "//" + window.location.host + "/game");
}
