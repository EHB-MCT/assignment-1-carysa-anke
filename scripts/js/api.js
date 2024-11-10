// Make a request to the Art Institute of Chicago API and get artwork data as JSON. If there’s a network issue, it throws an error

"use strict";

// Fetches artwork data from the API and throws an error if it doesn't work
export async function fetchData() {
	const response = await fetch("https://api.artic.edu/api/v1/artworks");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}
