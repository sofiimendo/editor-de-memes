
const escribir = document.getElementById("idTxtSup");
const topText = document.getElementById("topText")
const cambiarTexto = ()=>{
    topText.innerText=escribir.value;
};

escribir.addEventListener("input",cambiarTexto)
