const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSize.forEach((b) => {
  b.addEventListener('click', handler)
});

function handler(){
  event.preventDefault();
  fontSize.forEach(el => el.classList.remove('font-size_active'));
  this.classList.add('font-size_active');
  book.className = 'book';
  if (this.className == 'font-size font-size_small font-size_active'){
    book.classList.add('book_fs-small');  
  }
  if (this.className == 'font-size font-size_big font-size_active'){
    book.classList.add('book_fs-big');  
  }
}
