document.addEventListener("DOMContentLoaded", function() {
  let grid = document.getElementById('grid')
  let palette = document.getElementById('palette')
  let currentColor = document.getElementById('currentColor')


  function togglePixel(event) {
    // conditional to avoid setting parent div to different color
    if (event.target !== this) {
      event.target.setAttribute("class", "pixel" + " " + currentColor.classList[1])
    }
  }

  function selectColor(event) {
    // conditional to avoid getting color from parent div
    if (event.target !== this) {
      currentColor.className = (event.target.className + " " + "currentColor")
    }
  }

  grid.addEventListener("click", togglePixel)
  palette.addEventListener("click", selectColor)
});