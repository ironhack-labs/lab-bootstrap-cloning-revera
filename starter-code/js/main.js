function slideLeft(){
  var slides = document.querySelectorAll(".slide")
  
  for(var i = 0; i < slides.length; i++){
    if(slides[i].classList.contains("active"))
    {
      slides[i].setAttribute("class", "slide")
      if (i === 0) i = 4
      slides[i - 1].setAttribute("class", "slide active")
      return
    } 
  }
}

function slideRight(){
  var slides = document.querySelectorAll(".slide")

  for(var i = 0; i < slides.length; i++){
    if(slides[i].classList.contains("active"))
    {
      slides[i].setAttribute("class", "slide")
      if (i === 3) i = -1

      slides[i + 1].setAttribute("class", "slide active")
      return
    } 
  }
}


window.onload = function(){
  var lefBtn = document.getElementById("control-left")
  var rightBtn = document.getElementById("control-right")

  lefBtn.onclick = slideLeft
  rightBtn.onclick = slideRight
}