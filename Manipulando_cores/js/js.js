window.addEventListener('load', start);
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
function start() {
  // Recuperando dado do input

  red.addEventListener('change', vermelho);
  green.addEventListener('change', verde);
  blue.addEventListener('change', azul);
}

function vermelho(event) {
  //salvando valor do input
  var valorRed = event.target.value;

  //Adcionando o valor ao input disable
  document.querySelector('#vRed').value = event.target.value;
  adicionaCor();
}

function verde(event) {
  var valorGreen = event.target.value;
  document.querySelector('#vGreen').value = event.target.value;
  adicionaCor();
}

function azul() {
  var valorBlue = event.target.value;
  document.querySelector('#vBlue').value = event.target.value;
  adicionaCor();
}

function adicionaCor() {
  red = document.querySelector('#red').value;
  green = document.querySelector('#green').value;
  blue = document.querySelector('#blue').value;
  quadro = document.querySelector('#quadro');
  var span = document.querySelector('#mostrar');

  span.textContent = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  //Adicionando cor de fundo
  quadro.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
