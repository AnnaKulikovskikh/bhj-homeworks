const start = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const close = Array.from(document.getElementsByClassName('modal__close'));

start.className = 'modal modal_active';

let timerId = setInterval(() =>
  {success.classList.add('modal_active');
  clearInterval(timerId);}
  ,2000);

close.forEach((b) => {
  b.addEventListener('click', handler)
})

function handler(){
  this.closest(".modal").classList.remove("modal_active");
  //start.classList.toggle('modal_active');
  //success.classList.toggle('modal_active');
}
