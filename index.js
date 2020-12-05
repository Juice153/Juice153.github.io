
document.getElementById('morecookie').addEventListener('click', function() {
    var DOM_img = document.createElement("img");
    DOM_img.classList.add("draggable");
    DOM_img.src = "https://cdn.lowgif.com/small/543f4f1c17f9afc9-gif-pixel-art-requests-minecraft-amino.gif";
    document.getElementById('container').appendChild(DOM_img);
    var draggie = new Draggabilly( DOM_img, {
        // options...
      });
      draggies.push( draggie );
 }, false);


// if you have multiple .draggable elements
// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0; i < draggableElems.length; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    // options...
  });
  draggies.push( draggie );
}