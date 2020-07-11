const reveal = Array.from(document.querySelectorAll('.reveal'));
let coord = reveal.map(el=>el.getBoundingClientRect());

window.addEventListener('scroll', function() {
  let scrolling = window.pageYOffset;
  for (i=1;i<reveal.length;i++){
    if (coord[i].top - 50 < scrolling) {
    reveal[i].classList.add('reveal_active');
    }
  }
});
