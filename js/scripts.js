// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var nameUpperCased = dinosaur.toUpperCase();
var textAfterReplace = text.replace('Velociraptor', nameUpperCased);

var textHalfChars = textAfterReplace.length/2;
var halfOfText = textAfterReplace.slice(0, textHalfChars)

console.log(halfOfText); 
