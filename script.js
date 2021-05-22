//PARA QUE QUEDE EN MODO CLARO
const imgMeme = document.getElementById('imgMeme');
const btnDark = document.getElementById('buttonDarkAppearance');
const textTheme = document.getElementById('textTheme');
const appName = document.getElementById('appName');
const btnsContainer = document.getElementById('btnsContainer');
const btnImg = document.getElementById('btnImg');
const btnTxt = document.getElementById('btnTxt');
const myMain = document.getElementById('myMain');
const panelAsideImg = document.getElementById('asideImg');
const panelAsideTxt = document.getElementById('asideTxt');
const body = document.querySelector('body');

btnDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  if (body.classList.contains('dark')) {
    textTheme.innerText = 'Modo Claro';
  } else {
    textTheme.innerText = 'Modo Oscuro';
  }
})

//PARA QUE APAREZCA Y DESAPAREZCA EL ASIDE DE TEXTO
const panelAsideTexto = document.getElementById('panelAsideTxt');
panelAsideTexto.style = 'display: none';
btnTxt.addEventListener('click', () => {
  panelAsideTexto.style = 'display: inline';
  panelAsideImg.style = 'display: none';
})

//PARA QUE APAREZCA  EL ASIDE DE IMAGEN
panelAsideImg.style = 'display: inline';
btnImg.addEventListener('click', () => {
  panelAsideImg.style = 'display: inline';
  panelAsideTexto.style = 'display: none';
})

// //Boton close aside
const btnAside = document.querySelector('.close-aside');
btnAside.addEventListener('click', () => {
  panelAsideImg.style = 'display: none';
  panelAsideTexto.style = 'display: none';
})
//CAMBIA TEXTO SUPERIOR
const escribirSup = document.getElementById('txtSup');
const topText = document.getElementById('topText');
const cambiarTextoSuperior = () => {
  topText.innerHTML = escribirSup.value;
};
escribirSup.addEventListener('input', cambiarTextoSuperior)

//CAMBIA TEXTO INFERIOR
const escribirInf = document.getElementById('txtInf');
const bottomText = document.getElementById('bottomText');
const cambiarTextoInferior = () => {
  bottomText.innerHTML = escribirInf.value;
};
escribirInf.addEventListener('input', cambiarTextoInferior)

//SACA TEXTO SUPERIOR E INFERIOR
const esconderTextoSuperior = document.getElementById('sinTextoSuperior');
const esconderTextoInferior = document.getElementById('sinTextoInferior');
const sacaTextoSup = (event) => {
  if (event.target === esconderTextoSuperior) {
    topText.classList.toggle('esconderTexto');
  } else if (event.target === esconderTextoInferior) {
    bottomText.classList.toggle('esconderTexto');
  }
}
esconderTextoSuperior.addEventListener('click', sacaTextoSup)
esconderTextoInferior.addEventListener('click', sacaTextoSup)

//  CAMBIAR TAMAÑO DE LETRA 
const cambiarTamanoletra = document.getElementById('fuentesSizeUrl');
const cambiarTamano = () => {
  topText.style.fontSize = cambiarTamanoletra.value + 'px';
  bottomText.style.fontSize = cambiarTamanoletra.value + 'px';
}
cambiarTamanoletra.addEventListener('input', cambiarTamano)

// CAMBIAR FUENTE
const cambiarTipoDeFuente = document.getElementById('letras');
const cambiarTipoDeLetra = () => {
  topText.style.fontFamily = cambiarTipoDeFuente.value;
  bottomText.style.fontFamily = cambiarTipoDeFuente.value;
}
cambiarTipoDeFuente.addEventListener('change', cambiarTipoDeLetra)

//ALINEACION IZQUIERDA
const cambiarAlineacionIzquierda = document.getElementById('alineacionIzq');
const cambiarAlinIzq = () => {
  topText.style.justifyContent = 'flex-start';
  bottomText.style.justifyContent = 'flex-start';
}
cambiarAlineacionIzquierda.addEventListener('click', cambiarAlinIzq)

//ALINEACION CENTRO
const cambiarAlineacionCentro = document.getElementById('alineacionCentro');
const cambiarAlinCentro = () => {
  topText.style.justifyContent = 'center';
  bottomText.style.justifyContent = 'center';
}
cambiarAlineacionCentro.addEventListener('click', cambiarAlinCentro)

//ALINEACION DERECHA
const cambiarAlineacionDerecha = document.getElementById('alineacionDer');
const cambiarAlinDer = () => {
  topText.style.justifyContent = 'flex-end';
  bottomText.style.justifyContent = 'flex-end';
}
cambiarAlineacionDerecha.addEventListener('click', cambiarAlinDer)

const cambiarTexto = () => {
  topText.innerHTML = escribirSup.value;
  bottomText.innerHTML = escribirInf.value;
};
escribirSup.addEventListener('input', cambiarTexto)
escribirInf.addEventListener('input', cambiarTexto)

//Cambia color y codigo de color segun el color elegido
const cambiarColorTexto = document.getElementById('colorfuente');
const cambiarCodigoTexto = document.getElementById('codColorText');
cambiarCodigoTexto.addEventListener('input', () => {
  topText.style.backgroundColor = `${cambiarCodigoTexto.value}`;
  bottomText.style.background = `${cambiarCodigoTexto.value}`;
  cambiarCodigoFondo.innerText = cambiarCodigoTexto.value.toUpperCase();
})

//Cambia fondo y codigo de color segun el color elegido
const cambiarColorFondo = document.getElementById('fondoFuente');
const cambiarCodigoFondo = document.getElementById('codColorBackground');
cambiarColorFondo.addEventListener('input', () => {
  topText.style.backgroundColor = `${cambiarColorFondo.value}`;
  bottomText.style.background = `${cambiarColorFondo.value}`;
  cambiarCodigoFondo.innerText = cambiarColorFondo.value.toUpperCase();
})

//Fondo transparente
const transparentCheckBox = document.getElementById('fondoTransparente');
const ponerFondoTransparente = () => {
  topText.classList.toggle('fondoTransparenteTop');
  bottomText.classList.toggle('fondoTransparenteBottom');
}
transparentCheckBox.addEventListener('click', ponerFondoTransparente)

//CONTORNO
const btnNoneContorno = document.getElementById('btnNoneContorno')
const btnDarkContorno = document.getElementById('btnDarkContorno')
const btnLightContorno = document.getElementById('btnLightContorno')

const cambiarContorno = (event) => {
  if (event.target === btnNoneContorno) {
    topText.classList.remove('light-stroke', 'dark-stroke');
    bottomText.classList.remove('light-stroke', 'dark-stroke');
  } else if (event.target === btnDarkContorno) {
    topText.classList.remove('light-stroke', 'stroke-none');
    bottomText.classList.remove('light-stroke', 'stroke-none');
    topText.classList.add('dark-stroke');
    bottomText.classList.add('dark-stroke');
  } else if (event.target === btnLightContorno) {
    topText.classList.remove('dark-stroke', 'stroke-none');
    bottomText.classList.remove('dark-stroke', 'stroke-none');
    topText.classList.add('light-stroke');
    bottomText.classList.add('light-stroke');
  }
}
btnNoneContorno.addEventListener('click', cambiarContorno);
btnDarkContorno.addEventListener('click', cambiarContorno);
btnLightContorno.addEventListener('click', cambiarContorno);

//Espaciado
const textoEspaciado = document.getElementById('txtEspaciado');
textoEspaciado.addEventListener('input', () => {
  const textoValue = textoEspaciado.value;
  topText.style.padding = `${textoValue}px 50px`;
  bottomText.style.padding = `${textoValue}px 50px`;
})

//Interlineado 
const textoInterlineado = document.getElementById('interlineado');
textoInterlineado.addEventListener('input', () =>{
  const interlineadoValue = textoInterlineado.value;
  topText.style.lineHeight = interlineadoValue;
  bottomText.style.lineHeight = interlineadoValue;
})

//Traer imagen
const urlImg = document.getElementById('imgUrl');
urlImg.addEventListener('change', () => {
  imgMeme.style.backgroundImage = `url('${urlImg.value}')`;
})

//Para que al cambiar el color de fondo la imagen cambie tmbn el codigo de color:
const backgroundImgColor = document.getElementById('colorFondo');
const colorHex = document.getElementById('backgroundColorImg');
backgroundImgColor.addEventListener('input', () => {
  imgMeme.style.backgroundColor = `${backgroundImgColor.value}`
  colorHex.innerText = backgroundImgColor.value.toUpperCase();
})

//Para cambiar los filtros del background de la imagen:
const backgroundFilter = document.getElementById('imgBackgroundFilter');
backgroundFilter.addEventListener('change', () => {
  imgMeme.style.backgroundBlendMode = backgroundFilter.value
})

//Boton descarga de imagen
const contenedorMeme = document.getElementById('editorContent')
const botonDescarga = document.getElementById('btnDownload');
botonDescarga.addEventListener('click', () => {
  domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
      window.saveAs(blob, 'meme.png');
    });
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
  filtros[i].addEventListener('input', valores);
}

//Boton resetear filtros
const resetFilter = document.getElementById('btnReset');
resetFilter.addEventListener('click', () => {
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  escalaGrises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
  valores();
})

