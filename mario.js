
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    var heightStr = document.querySelector('.slider').value;
    // here we convert the string to an int
    height = parseInt(heightStr);
    if (height <= 200){
      drawPyramid(height);
    }
    else {
      document.getElementById("pyramid").innerText = 'Sorry, only enough bricks to build under 200 units!';
    }
}

// hook up the button's click event to our determineHeightAndThenDrawPyramid function
document.querySelector('.symbol-needed').onchange= function() {
  determineHeightAndThenDrawPyramid();
}


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // before drawing, clear the old content
     console.log(document.getElementById("pyramid"));
     document.getElementById("pyramid").innerText = '';

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
