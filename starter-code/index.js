/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
// ========================================================================================================================
// for the GALLERY
// ========================================================================================================================
// var leftbut = document.getElementById('leftbutton');
// var rightbut = document.getElementById('rightbutton');
// console.log(leftbut);
// console.log(rightbut);
//
// function slide1off() {
//   var slide1 = document.getElementById('slide1');
//   slide1.style.display = "none";
//   var slide1t = document.getElementById('slide1t');
//   slide1t.style.display = "none";
// }
// function slide1on() {
//   var slide1 = document.getElementById('slide1');
//   slide1.style.display = "inline-block";
//   var slide1t = document.getElementById('slide1t');
//   slide1t.style.display = "block";
// }
//
// function slide2off() {
//   var slide2 = document.getElementById('slide2');
//   slide2.style.display = "none";
//   var slide2t = document.getElementById('slide2t');
//   slide2t.style.display = "none";
// }
// function slide2on() {
//   var slide2 = document.getElementById('slide2');
//   slide2.style.display = "inline-block";
//   var slide2t = document.getElementById('slide2t');
//   slide2t.style.display = "block";
// }
//
// function slide3off() {
//   var slide3 = document.getElementById('slide3');
//   slide3.style.display = "none";
//   var slide3t = document.getElementById('slide3t');
//   slide3t.style.display = "none";
// }
// function slide3on() {
//   var slide3 = document.getElementById('slide3');
//   slide3.style.display = "inline-block";
//   var slide3t = document.getElementById('slide3t');
//   slide3t.style.display = "inline-block";
// }
//
// function slide4off() {
//   var slide4 = document.getElementById('slide4');
//   slide4.style.display = "none";
//   var slide4t = document.getElementById('slide4t');
//   slide4t.style.display = "none";
// }
// function slide4on() {
//   var slide4 = document.getElementById('slide4');
//   slide4.style.display = "inline-block";
//   var slide4t = document.getElementById('slide4t');
//   slide4t.style.display = "inline-block";
// }
//
// rightbut.onclick = function() {
// slide1off();
// slide2on();
// };
// leftbut.onclick = function() {
//    slide1on();
// };
// function autoplay(){
// var interval1 = setInterval (function slide1off() {
//   var slide1 = document.getElementById('slide1');
//   slide1.style.display = "none";
//   var slide1t = document.getElementById('slide1t');
//   slide1t.style.display = "none";
//   clearInterval(interval1);
// },3000);
// var interval12 = setInterval (function slide2on() {
//   var slide2 = document.getElementById('slide2');
//   slide2.style.display = "inline-block";
//   var slide2t = document.getElementById('slide2t');
//   slide2t.style.display = "block";
//   clearInterval(interval12);
// },3000);
//
//
// var interval2 = setInterval (function slide2off() {
//   var slide2 = document.getElementById('slide2');
//   slide2.style.display = "none";
//   var slide2t = document.getElementById('slide2t');
//   slide2t.style.display = "none";
//   clearInterval(interval2);
// },6000);
// var interval21 = setInterval (function slide3on() {
//   var slide3 = document.getElementById('slide3');
//   slide3.style.display = "inline-block";
//   var slide3t = document.getElementById('slide3t');
//   slide3t.style.display = "inline-block";
//   clearInterval(interval21);
//
// },6000);
//
//
// var interval3 = setInterval (function slide3off() {
//   var slide3 = document.getElementById('slide3');
//   slide3.style.display = "none";
//   var slide3t = document.getElementById('slide3t');
//   slide3t.style.display = "none";
//   clearInterval(interval3);
// },9000);
// var interval31 = setInterval (function slide4on() {
//   var slide4 = document.getElementById('slide4');
//   slide4.style.display = "inline-block";
//   var slide4t = document.getElementById('slide4t');
//   slide4t.style.display = "inline-block";
//   clearInterval(interval31);
// },9000);
//
//
// var interval4 = setInterval (function slide4off() {
//   var slide4 = document.getElementById('slide4');
//   slide4.style.display = "none";
//   var slide4t = document.getElementById('slide4t');
//   slide4t.style.display = "none";
//   clearInterval(interval4);
// },12000);
// var interval41 = setInterval (function slide1on() {
//   var slide1 = document.getElementById('slide1');
//   slide1.style.display = "inline-block";
//   var slide1t = document.getElementById('slide1t');
//   slide1t.style.display = "block";
//   clearInterval(interval41);
//   count ++;
//
// },12000);
// }
// var count = 0;
//
//   autoplay();
