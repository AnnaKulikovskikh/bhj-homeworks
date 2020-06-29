const slide = Array.from(document.querySelectorAll('.slider__arrow'));
const item = Array.from(document.querySelectorAll('.slider__item'));
let image = 0;

slide.forEach((b) => {
  b.addEventListener('click', handler)
});

function handler(){
  console.log(this.className);
  item[image].className = 'slider__item';
  if (this.className == 'slider__arrow slider__arrow_next') {
    image += 1;
    if (image == item.length) {image = 0};
  } 
  if (this.className == 'slider__arrow slider__arrow_prev') {
    image -=1;
    if (image == -1) {image = item.length-1};
  }
  console.log(image);
  item[image].className = 'slider__item slider__item_active';
}
