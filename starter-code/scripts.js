
// let carousels = document.getElementsByClassName('image-carousel');
//
// [].forEach.call(carousels, function (c) {
//     let next = c.getElementsByClassName('next')[0],
//         prev = c.getElementsByClassName('prev')[0],
//         bubblesContainer = c.getElementsByClassName('bubbles')[0],
//         inner = c.getElementsByClassName('inner')[0],
//         imgs = inner.getElementsByTagName('img'),
//         currentImageIndex = 0,
//         width = 640,
//         bubbles = [];
//
//     for (let i = 0; i < imgs.length; i++) {
//         let b = document.createElement('span');
//         b.classList.add('bubble');
//         bubblesContainer.appendChild(b);
//         bubbles.push(b);
//
//         b.addEventListener('click', function () {
//             currentImageIndex = i;
//             switchImg();
//         });
//     }
//
//     function switchImg () {
//         inner.style.left = -width * currentImageIndex + 'px';
//
//         bubbles.forEach(function (b, i) {
//             if (i === currentImageIndex) {
//                 b.classList.add('active');
//             } else {
//                 b.classList.remove('active');
//             }
//         });
//     }
//
//     next.addEventListener('click', function () {
//         currentImageIndex++;
//
//         if (currentImageIndex >= imgs.length) {
//             currentImageIndex = 0;
//         }
//
//         switchImg();
//     });
//
//     prev.addEventListener('click', function () {
//         currentImageIndex--;
//
//         if (currentImageIndex < 0) {
//             currentImageIndex = imgs.length - 1;
//         }
//
//         switchImg();
//     });
//
//     switchImg();
// });
//


//$(window).load(function() {
//  $('.flexslider').flexslider({
//    animation: "slide",
//    pauseOnHover: true,
//    controlNav: true,
//    directionNav: false,
//    });
//});

//$(window).load(function() {
//  $('.flexslider').flexslider({
//    animation: "slide",
//    controlNav: "thumbnails"
//  });
//});


//$(window).load(function() {
//  $('.flexslider').flexslider({
//    animation: "slide",
//    controlsContainer: $(".custom-controls-container"),
//    customDirectionNav: $(".custom-navigation a")
//  });
//});
