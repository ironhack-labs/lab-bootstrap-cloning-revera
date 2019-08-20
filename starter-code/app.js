          // Activate Carousel
          $("#myCarousel").carousel();

          // Enable Carousel Indicators
          $(".item").click(function(){
            $("#myCarousel").carousel(1);
          });
          
          // Enable Carousel Controls
          $(".left").click(function(){
            $("#myCarousel").carousel("prev");
          });
          