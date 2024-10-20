"use strict";

import Artwork from "../classes/Artwork.js";

let artworks = [];

/**
 * desciµ
 *
 * params:
 * returns:
 */
function init() {
	fetch("https://api.artic.edu/api/v1/artworks")
		.then((response) => response.json())
		.then((jsonData) => {
			jsonData.data.forEach((artworkData) => {
				const artwork = new Artwork(artworkData.title, artworkData.date_display, artworkData.place_of_origin, artworkData.department_title, artworkData.artist_title);
				artworks.push(artwork);
				console.log(artworks);
			});
			render();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function render() {
	document.getElementById("gallery").innerHTML = "";
	artworks.forEach((artwork) => {
		document.getElementById("gallery").insertAdjacentHTML("beforeend", artwork.htmlString);
	});
}

init();
