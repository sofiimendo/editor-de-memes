// PARA QUE QUEDE EN MODO CLARO
const btnDark = document.getElementById(`button-dark-appearance`);
const appName = document.getElementById(`app-name`)
const btnsContainer = document.getElementById('btns-container')
const btnImg = document.getElementById('btn-img')
const btnTxt = document.getElementById('btn-txt')
const myMain =document.getElementById('my-main')
const panelAsideImg = document.getElementById('panel-aside-img')
const panelAsideTxt = document.getElementById('panel-aside-txt')
const btnLight = document.getElementById('button-light-appearance')
btnDark.style = 'display:inline'
btnLight.style = 'display:none'
const body = document.querySelector('body')


btnDark.addEventListener('click', () => {
  appName.style =`background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnsContainer.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnImg.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnTxt.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  // btnDark.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnDark.style = 'display:none'
  btnLight.style ='display:none'
  btnLight.style =`background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  myMain.style = `background-color: rgb(230, 230, 230); color: rgb(50, 50, 50);`
  panelAsideImg.style = 'background-color: rgb(240, 240, 240); color: rgb(50, 50, 50);'
  panelAsideTxt.style = 'background-color: rgb(240, 240, 240); color: rgb(50, 50, 50);'
  body.style = 'background-color: (rgb: 40,40, 40)'
})

btnLight.addEventListener('click', () => {
  appName.style =`background-color: rgb(50, 50, 50); color: rgb( 220, 220, 220);`
  btnsContainer.style = `background-color: rgb(50, 50, 50); color: rgb(220, 220, 220);`
  btnImg.style = `background-color: rgb(50, 50, 50); color: rgb(220, 220, 220);`
  btnTxt.style = `background-color: rgb(50, 50, 50); color: rgb(220, 220, 220);`
  btnDark.style = `background-color: rgb(50, 50, 50); color: rgb(220, 220, 220);`
  myMain.style = `background-color: rgb(40, 40, 40); color: rgb(250, 250, 250);`
  panelAsideImg.style = 'background-color: rgb(50, 50, 50); color: rgb(250, 250, 250);'
  panelAsideTxt.style = 'background-color: rgb(40, 40, 40); color: rgb(250, 250, 250);'
  // btnDark.style = 'display:none'
  btnLight.style ='display:none'
  // btnLight.style =`background-color: rgb(40, 40, 40); color: rgb(250, 250, 250);`
  body.style = 'background-color: (rgb: 40,40, 40)'
})

// PARA QUE APAREZCA Y DESAPAREZCA EL ASIDE DE TEXTO
const panelAsideTexto = document.getElementById('panel-aside-txt')
panelAsideTexto.style = 'display: none'
btnTxt.addEventListener('click',() => {
  panelAsideTexto.style = 'display: inline'
  panelAsideImg.style = 'display: none'
})

// PARA QUE APAREZCA  EL ASIDE DE IMAGEN

panelAsideImg.style = 'display: inline'
btnImg.addEventListener('click',() => {
  panelAsideImg.style = 'display: inline'
  panelAsideTexto.style = 'display: none'
})

// CAMBIA TEXTO SUPERIOR
const escribirSup = document.getElementById("idTxtSup");
const topText = document.getElementById("topText")
const cambiarTextoSuperior = ()=>{
  topText.innerHTML = escribirSup.value;
};
escribirSup.addEventListener("input",cambiarTextoSuperior)

// CAMBIA TEXTO INFERIOR
const escribirInf = document.getElementById('idTxtInf')
const bottomText = document.getElementById('bottomText')
const cambiarTextoInferior = ()=>{
  bottomText.innerHTML = escribirInf.value;
};
  escribirInf.addEventListener("input",cambiarTextoInferior)


//SACA TEXTO SUPERIOR
const esconderTextoSuperior = document.getElementById('idSinTextoSuperior')
const esconderTextoInferior = document.getElementById('idSinTextoInferior')
const sacaTextoSup =(event) =>{
  if (event.target === esconderTextoSuperior){
    topText.classList.toggle('esconderTexto')
  }
  else if (event.target === esconderTextoInferior){
    bottomText.classList.toggle('esconderTexto')
  }
  }
  esconderTextoSuperior.addEventListener('click',sacaTextoSup)
  esconderTextoInferior.addEventListener('click',sacaTextoSup)

//  CAMBIAR TAMAÑO DE LETRA 
const cambiarTamanoletra = document.getElementById('fuentesSizeUrl')
const cambiarTamano =() => {
  topText.style.fontSize = cambiarTamanoletra.value + 'px';
  bottomText.style.fontSize = cambiarTamanoletra.value + 'px';
}
cambiarTamanoletra.addEventListener('change',cambiarTamano)

// CAMBIAR FUENTE
const cambiarTipoDeFuente = document.getElementById('letras')
const cambiarTipoDeLetra = () => {
  topText.style.fontFamily = cambiarTipoDeFuente.value
  bottomText.style.fontFamily = cambiarTipoDeFuente.value
}
cambiarTipoDeFuente.addEventListener('change',cambiarTipoDeLetra)

//ALINEACION IZQUIERDA
const cambiarAlineacionIzquierda = document.getElementById('alineacion-izq')
const cambiarAlinIzq = () => {
 topText.style.justifyContent = 'flex-start' 
 bottomText.style.justifyContent = 'flex-start'
}
cambiarAlineacionIzquierda.addEventListener('click',cambiarAlinIzq)

//ALINEACION CENTRO
const cambiarAlineacionCentro = document.getElementById('alineacion-centro')
const cambiarAlinCentro = () => {
 topText.style.justifyContent = 'center' 
 bottomText.style.justifyContent = 'center'
}
cambiarAlineacionCentro.addEventListener('click',cambiarAlinCentro)

//ALINEACION DERECHA
const cambiarAlineacionDerecha = document.getElementById('alineacion-der')
const cambiarAlinDer = () => {
 topText.style.justifyContent = 'flex-end' 
 bottomText.style.justifyContent = 'flex-end'
}
cambiarAlineacionDerecha.addEventListener('click',cambiarAlinDer)






