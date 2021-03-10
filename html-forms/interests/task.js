const check = [...document.getElementsByClassName('interest__check')];

check.forEach((el) => {
  el.addEventListener('change', event)
});

function event(){
  if (this.checked == true) {
    this.childNodes.forEach((i) => i.checked = true);
  } else {
    this.childNodes.forEach((i) => i.checked = false);
  }
}
