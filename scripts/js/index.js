// The fetchData function calls the API, converts each artwork into an Artwork object and stores it in the artworks array
// This file is used for everything that has to do with data sorting, filtering and rendering

"use strict";

import Artwork from "../classes/Artwork.js";

let artworks = [];
let filteredArtworks = [];
let sortedArtworks = [];
let artworkCount = 0;
let selectedSort = "Date";
let selectedFilter = "All";

// Fetches artwork data, creates Artwork instances, and stores them in the artworks array
// Calls filter(), sort() and render() to display the artworks on the page
function fetchData() {
	fetch("https://api.artic.edu/api/v1/artworks")
		.then((response) => response.json())
		.then((jsonData) => {
			jsonData.data.forEach((artworkData) => {
				const artwork = new Artwork(artworkData.title, artworkData.date_display, artworkData.place_of_origin, artworkData.department_title, artworkData.artist_title);
				artworks.push(artwork);
				console.log(artworks);
			});
			filter();
			sort();
			render();
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function sort() {
	console.log("sorting");
}

function filter() {
	console.log("filtering");
}

// Clears existing content and inserts the HTML string for each artwork
function render() {
	document.getElementById("gallery").innerHTML = "";
	artworks.forEach((artwork) => {
		document.getElementById("gallery").insertAdjacentHTML("beforeend", artwork.htmlString);
	});
}

fetchData();
