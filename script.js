// PARA QUE QUEDE EN MODO CLARO
const imgMeme = document.getElementById('imgMeme');
const btnDark = document.getElementById('button-dark-appearance');
const textTheme = document.getElementById('text-theme');
const appName = document.getElementById('app-name');
const btnsContainer = document.getElementById('btns-container');
const btnImg = document.getElementById('btn-img');
const btnTxt = document.getElementById('btn-txt');
const myMain = document.getElementById('my-main');
const panelAsideImg = document.getElementById('panel-aside-img');
const panelAsideTxt = document.getElementById('panel-aside-txt');
const body = document.querySelector('body');

btnDark.addEventListener('click', () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  if(body.classList.contains("dark")){
    textTheme.innerText = "Modo Claro"
  }else{
    textTheme.innerText = "Modo Oscuro"
  }
})

// cambiar texto (probemos desp de hacerlas x separado)
const escribirSup = document.getElementById("idTxtSup");
const topText = document.getElementById("topText")
const escribirInf = document.getElementById('idTxtInf')
const bottomText = document.getElementById('bottomText')

const cambiarTexto = () => {
  topText.innerHTML = escribirSup.value;
  bottomText.innerHTML = escribirInf.value;
};
escribirSup.addEventListener("input", cambiarTexto)
escribirInf.addEventListener("input", cambiarTexto)

//Traer imagen
const urlImg = document.getElementById('imgUrl');
urlImg.addEventListener('change',() => {
  imgMeme.style.backgroundImage = `url('${urlImg.value}')`;
})

imgMeme.style.backgroundImage = `url('https://i.pinimg.com/originals/08/99/ea/0899eafb344f09b3656c18938718e1ff.jpg')`;

//Background filter:
const backgroundFilter = document.getElementById('imgBackgroundFilter');
backgroundFilter.addEventListener('change', () => {
  imgMeme.style.backgroundBlendMode = backgroundFilter.value
})

//Inputs filtros Imagenes:
const brillo = document.getElementById('brightness');
const opacidad = document.getElementById('opacity');
const contraste = document.getElementById('contrast');
const desenfoque = document.getElementById('blur');
const escalaGrises = document.getElementById('grayScale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hueRotation');
const saturado = document.getElementById('saturate');
const negativo = document.getElementById('invert');
const filtros = document.getElementsByClassName('filter');

const valores = () => {
  let brilloValue = brillo.value;
  let opacidadValue = opacidad.value;
  let contrasteValue = contraste.value;
  let desenfoqueValue = desenfoque.value;
  let escalaGrisesValue = escalaGrises.value;
  let sepiaValue = sepia.value;
  let hueValue = hue.value;
  let saturadoValue = saturado.value;
  let negativoValue = negativo.value;
  imgMeme.style.filter = `brightness(${brilloValue}) opacity(${opacidadValue}) contrast(${contrasteValue}%) blur(${desenfoqueValue}px) grayscale(${escalaGrisesValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturadoValue}%) invert(${negativoValue})`;
}
for (let i = 0; i < filtros.length; i++) {
  filtros[i].addEventListener('input',valores);
}
