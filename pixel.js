document.addEventListener("DOMContentLoaded", function() {
  // console.log(this);
  console.log(document);
  console.log(document.querySelector('.pixel'));


  let pixelColor = document.querySelectorAll('.pixel')
  let grid = document.getElementById('grid')


  function togglePixel(event) {
    //console.log(grid)
    console.log(event);
    console.log("toggle class coming soon", event.target)

    if (event.target.classList.contains('off')) {
      event.target.classList.replace('off', 'lightup')
      console.log('turning on')
    } else {
      event.target.classList.replace('lightup', 'off')
      console.log('turning off')
    }
  }

  grid.addEventListener("click", togglePixel)

});