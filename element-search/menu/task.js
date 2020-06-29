const link = Array.from(document.querySelectorAll('.menu__link'));
const submit = Array.from(document.querySelectorAll('.menu_sub'));
console.log(link.length);
//console.log(submit[0].className);
//console.log(submit.length);

function handler() {
  console.log(this.textContent);
  if (this.textContent == "О компании"){
    submit[1].className ="menu menu_sub";
    submit[0].className ="menu menu_sub menu_active";
  }
  if (this.textContent == "Услуги"){
    submit[0].className ="menu menu_sub";
    submit[1].className ="menu menu_sub menu_active";
  }

}

link.forEach((b) => {
  b.addEventListener('click', handler)
});
