document.addEventListener("DOMContentLoaded", function() {
  // console.log(this);
  console.log(document);
  console.log(document.querySelector('.pixel'));


  let pixelColor = document.querySelectorAll('.pixel')
  let grid = document.getElementById('grid')
  let palette = document.getElementById('palette')
  let currentColor = document.getElementById('currentColor')


  function togglePixel(event) {
    //console.log(grid)
    console.log(event);
    console.log("toggle class coming soon", event.target)

    console.log("pixel" + " " + currentColor.classList[1]);
    if (event.target != this)
      event.target.setAttribute("class", "pixel" + " " + currentColor.classList[1])
    console.log("new pixel classes " + event.target.ClassName);
    console.log(document.querySelectorAll('.pixel')[0]);
    // if (event.target.classList.contains('off')) {
    //   event.target.classList.replace('off', 'lightup')
    //   console.log('turning on')
    // } else {
    //   event.target.classList.replace('lightup', 'off')
    //   console.log('turning off')
    // }
  }

  function selectColor(event) {
    //console.log(grid)
    console.log(event);
    console.log("selectColor event" + event.target.style.backgroundColor)


    console.log("palette" + event.target.className);
    if (event.target != this)
      currentColor.className = (event.target.className + " " + "currentColor")

    console.log(currentColor)
  }
  // if (event.target.classList.contains('off')) {
  //   event.target.classList.replace('off', 'lightup')
  //   console.log('turning on')
  // } else {
  //   event.target.classList.replace('lightup', 'off')
  //   console.log('turning off')
  // }


  grid.addEventListener("click", togglePixel)
  palette.addEventListener("click", selectColor)
});