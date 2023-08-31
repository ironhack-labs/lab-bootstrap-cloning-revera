const myCarouselElement = document.querySelector('#carouselActive')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})