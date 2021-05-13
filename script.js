// PARA QUE QUEDE EN MODO CLARO

const btnDark = document.getElementById(`button-dark-appearance`);
const appName = document.getElementById(`app-name`)
const btnsContainer = document.getElementById('btns-container')
const btnImg = document.getElementById('btn-img')
const btnTxt = document.getElementById('btn-txt')
const myMain =document.getElementById('my-main')
const panelAsideImg = document.getElementById('panel-aside-img')
const panelAsideTxt = document.getElementById('panel-aside-txt')
const btnLight = document.getElementById('btn-light-appearance')

btnDark.addEventListener('click', () => {
  appName.style =`background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnsContainer.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnImg.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnTxt.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  btnDark.style = `background-color: rgb(220, 220, 220); color: rgb(50, 50, 50);`
  myMain.style = `background-color: rgb(230, 230, 230); color: rgb(50, 50, 50);`
  panelAsideImg.style = 'background-color: rgb(240, 240, 240); color: rgb(50, 50, 50);'
  panelAsideTxt.style = 'background-color: rgb(240, 240, 240); color: rgb(50, 50, 50);'
  btnDark.style = 'display:none'
  btnLight.style ='display:inline'

})






const escribirSup = document.getElementById("idTxtSup");
const topText = document.getElementById("topText")
const escribirInf = document.getElementById('idTxtInf')
const bottomText = document.getElementById('bottomText')

const cambiarTexto = ()=>{
    topText.innerHTML = escribirSup.value;
    bottomText.innerHTML = escribirInf.value;
 };
 escribirSup.addEventListener("input",cambiarTexto)
 escribirInf.addEventListener("input",cambiartexto)

 





