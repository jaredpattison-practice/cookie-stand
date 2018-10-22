'use strict';

function changeImage() {
  var salmon = document.getElementById('salmon');
  
  if (salmon.src.match('img/chinook.jpg'))
  {
    salmon.src = 'img/salmon.png';
  }
  else
  {
    salmon.src = 'img/chinook.jpg';
  }
}
