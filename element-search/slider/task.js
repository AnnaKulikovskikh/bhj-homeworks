const slide = Array.from(document.querySelectorAll('.slider__arrow'));
const item = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
let image = 0;
dots[0].classList.add('slider__dot_active')

slide.forEach((b) => {
  b.addEventListener('click', handler)
});

dots.forEach((b) => {
  b.addEventListener('click', clicker)
});

function clicker(){
  dots.forEach((b) => b.classList.remove('slider__dot_active'));
  this.classList.add('slider__dot_active');
  for (i  = 0;i < dots.length;i++){
    if (this === dots[i]) {
      item.forEach((b) => b.classList.remove('slider__item_active'));
      item[i].classList.add('slider__item_active');
      image = i;
    }
  }
}

function handler(){
  //console.log(this.className);
  item[image].className = 'slider__item';
  if (this.className == 'slider__arrow slider__arrow_next') {
    dots[image].classList.remove('slider__dot_active');
    image += 1; 
    if (image == item.length) {image = 0};
    dots[image].classList.add('slider__dot_active');
  } 
  if (this.className == 'slider__arrow slider__arrow_prev') {
    dots[image].classList.remove('slider__dot_active');
    image -=1;
    if (image == -1) {image = item.length-1};
    dots[image].classList.add('slider__dot_active');
  }
  //console.log(image);
  item[image].classList.add('slider__item_active');
}
