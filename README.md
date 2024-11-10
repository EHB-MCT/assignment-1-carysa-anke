# Art museum of chicago

An overview of all the art in the chicago museum

## Conventions

- Naming
  Images: lowercase, seperated with underscores
  File names: camelCase
  Classes: nouns, starting with a capital
  Functions: camelCase
  Variables: camelCase
  Branches: lowercase, seperated with -
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

- Placing
  Constants: top of the file
  Source: (https://www.w3schools.com/js/js_conventions.asp)

- Formatting
  Before and after a + , - , = , => , < , > a space

  Functions, foreach, and other things that use curly brackets are formatted like this:
  ```
  fun() {

  }
  ```

  line length < 80
  Source: (https://google.github.io/styleguide/jsguide.html), (https://www.w3schools.com/js/js_conventions.asp)

  Use 'prettier' to keep the style consistent. Use it for correct indentation, whitespace, and line lengths
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

  Use single quotes for strings except to avoid escaping
  ```
  console.log('helloWorld');
  ```

  ```
  $("<div class='box'>")
  console.log(`hello ${name}`)
  ```
  Source: (https://standardjs.com/rules.html)

- Arrays
  ```
  const filteredPaintings = [];
  ```
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Comments
  Only use comments if the logic of the code isn't obvious
  Don't use shorthand
  Use single line comments
  Leave a space between the slashes and the comment
  Start with a capital letter, like a sentence, but don't end the comment with a period
  Source: (https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

- Commits
  formatted in the conventional method 
  Source: (https://www.conventionalcommits.org/en/v1.0.0/)

## Files breakdown

- Assets
  Make sure you put your file in the right location, for example: don't put a jpeg in the 'videos' folder
  If a folder starts containing more than 20 items, create subfolders based on the page you are using it for
  Source: (https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)

- CSS
  master.css: css added to all pages for consistency
  reset.css: removes all css defaulted by browser
  media.css: mediaqueries
  index.css: page specific
  Source: (https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)

- Pages
  All HTML pages apart from the index.html file belong in the 'pages' folder

- Scripts
  classes:
    Artwork.js: this class simplifies managing artworks as objects
  js:
    api.js: handles API requests and retrieves artworks
    config.js: stores configuration settings, such as API URLs
    index.js: manages initialization, sorting, filtering, and rendering of artworks

## Data flow

- Data Retrieval
  fetchData in api.js makes a request to the Art Institute of Chicago API and gets artwork data as JSON. If there’s a network issue, it throws an error
- Data Modeling
  Each artwork from the API is turned into an Artwork object, defined in Artwork.js. This class stores artwork info (like title, date, origin, genre, and artist) in properties. It also has a htmlString method that returns an HTML block to render each artwork.
- Data Initialization and Storage
  The fetchData function in index.js calls the API, converts each artwork into an Artwork object and stores it in the artworks array.
  Arrays like filteredArtworks and sortedArtworks are also there to hold data when filtering or sorting is applied.
- Data Manipulation
  Sorting: The sort function will sort artworks based on the selected sort option.
  Filtering: The filter function will filter artworks by the selected filter.
- Rendering 
  The render function clears the gallery element, then loops through artworks and inserts each artwork’s htmlString into the page.

## Data Attribution

This project uses the [Art Institute of Chicago API](https://api.artic.edu/) to fetch data on artworks. The Art Institute of Chicago provides access to data about its collection, including information on artists, artwork titles, dates, origins, and departments.
Data provided by the Art Institute of Chicago API may be subject to their terms of use. Please visit their [website](https://www.artic.edu/open-access/open-access-policy) for more information on data licensing and attribution requirements.
Source: (https://chatgpt.com/share/6730b8aa-be14-8010-b109-c7f599571e3f)

## Sources

- [API](https://api.artic.edu/api/v1/artworks) used in js > index.js
- [Conventions](https://www.w3schools.com/js/js_conventions.asp)
- [Conventions](https://google.github.io/styleguide/jsguide.html) 
- [Conventions](https://www.conventionalcommits.org/en/v1.0.0/) 
- [Conventions](https://stackoverflow.com/questions/2336302/single-huge-css-file-vs-multiple-smaller-specific-css-files)
- [Conventions](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Conventions](https://standardjs.com/rules.html)
- [Conventions](https://pimcore.com/docs/platform/Portal_Engine/Development_Documentation/Customize_Appearance/Frontend_Architecture/)
- [Chatgpt.com](https://chatgpt.com/share/67110f21-ddd8-800d-a4b1-2c59ac5b2c8d) used in js > index.js
- [Chatgpt.com](https://chatgpt.com/share/6730b8aa-be14-8010-b109-c7f599571e3f) used in README
