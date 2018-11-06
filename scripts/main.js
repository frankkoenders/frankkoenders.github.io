/* var myHeading = document.querySelector('h1'); */
/* myHeading.textContent = 'Hello world!'; */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dehavilland-chipmunk.jpg') {
      myImage.setAttribute ('src','images/166756_big.jpg');
    } else {
      myImage.setAttribute ('src','images/dehavilland-chipmunk.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Chippies are great, ' + myName;
}

var storedName = localStorage.getItem('name');
if(!storedName) {
  setUserName();
} else {
  myHeading.textContent = 'Chippies are great, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}