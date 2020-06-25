const modal = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const save = modal.className;

modal.className = 'modal modal_active';
const close = document.getElementsByClassName('modal__close');
close[1].onclick = function(){
  modal.className =save;
  success.className = 'modal modal_active';
  console.log(modal.className);
}
close[2].onclick = function(){
  success.className = save;
}
console.log(modal.className);
