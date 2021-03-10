const sideText = [...document.getElementsByClassName('chat-widget__side')];
const widget = document.getElementsByClassName('chat-widget');
const inputLine = document.getElementById('chat-widget__input');
const messenger = document.getElementById('chat-widget__messages');
let history = '';
let time;
const answer = [
  'Чего надо?',
  'Добрый день, мы ещё не проснулись.Позвоните через 10 лет',
  'К сожалению все операторы заняты. Не звоните нам больше',
  'Если вы хотите послать нас одни раз нажмите один. Если вы хотите послать нас два раза нажмите два',
  'Добрый день, до свидания!'
];
//'<div class="message__text">Добрый день, мы ещё не проснулись.Позвоните через 10 лет</div>',

sideText.forEach((b) => {
  b.addEventListener('click', e => {
    widget[0].classList.toggle('chat-widget_active');
    time = new Date(); 
  });
});

inputLine.addEventListener('change', onInput);

//onInput = (e) => messenger.textContent = inputLine.value;

function onInput(){
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  history += `${hour}:${minutes} ${inputLine.value} /n`;
  messenger.textContent = history;
  inputLine.value = '';
  //widget.innerHTML = '<div class="message message_client"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div>';
  let rand = Math.round(0 - 0.5 + Math.random() * (answer.length + 1));
  history += `${hour}:${minutes} ${answer[rand]}/n`;
  messenger.textContent = history;
};
