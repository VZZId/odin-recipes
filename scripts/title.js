// Get the filename without the extension
let filename = window.location.pathname.split('/').pop().split('.')[0];

// Your main website title
let websiteTitle = " - Odin Recipes"; 

// Combine and set the title
document.title = filename[0].toUpperCase() + filename.slice(1) + websiteTitle;
