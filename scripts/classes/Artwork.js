// Each artwork from the API is turned into an Artwork object. Artwork info is stored in properties
// HtmlString returns an HTML block to render each artwork

"use strict";

// Represents an artwork with details: title, date, origin, genre, and artist
export default class Artwork {
    constructor(title, dateDisplay, placeOfOrigin, genre, artist){
        this.title = title;
        this.date_display = dateDisplay;
        this.place_of_origin = placeOfOrigin;
        this.department_title = genre;
        this.artist_title = artist;
    }
    // Generates an HTML string to render the artwork
    get htmlString() {
		return `
        <div class="frame">
			<h2 id="nameArtwork" >${this.title} </h2>
			<h3 id="dateDisplay" >${this.date_display} </h3>
			<h3 id="placeOfOrigin" >${this.place_of_origin}</h3>
			<h3 id="genre"> ${this.department_title}</h3>
			<h3 id="artist" >${this.artist_title}</h3>
		</div>`;
	}
}