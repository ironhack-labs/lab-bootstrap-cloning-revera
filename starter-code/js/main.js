

    let slider = document.getElementById("slider-wrapper");
    let sliders = slider.getElementsByTagName("article");

    for(let x = 0; x <= sliders.length; x++){
            var item = sliders[x];
     let sliderImage = item.getElementsByTagName("img")[0];
      

      item.setAttribute('style','background-image:url('+sliderImage.getAttribute('src')+');background-size:vcover;');
      sliderImage.remove();
    }

