const encriptarBoton = document.querySelector("#encriptar");
const desencriptarBoton = document.querySelector("#desencriptar");
const texto = document.querySelector("#texto");
const div = document.querySelector('.div2');
let textoEncriptado = "";
let textoDesencriptado = "";

document.addEventListener("DOMContentLoaded", () => {
  encriptarBoton.addEventListener("click", Encriptar);
  desencriptarBoton.addEventListener("click", Desencriptar);
});

function Encriptar() {
  const textoOriginal = texto.value;
  if(textoOriginal !== ""){
    for (let i = 0; i < textoOriginal.length; i++) {
      switch (textoOriginal[i]) {
        case "a":
          textoEncriptado += "ai";
          break;
        case "e":
          textoEncriptado += "enter";
          break;
        case "i":
          textoEncriptado += "imes";
          break;
        case "o":
          textoEncriptado += "ober";
          break;
        case "u":
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += textoOriginal[i];
      }
    }
    console.log(texto.value);
    console.log(textoEncriptado);
    limpiarTextarea();
    vaciarDiv(textoEncriptado);
  }
}

function Desencriptar() {
  const textoOriginal = texto.value;
  if(textoOriginal !== ""){
    for (let i = 0; i < textoOriginal.length; i++) {
      switch (textoOriginal[i]) {
        case "a":
          if (textoOriginal[i + 1] === "i") {
            textoDesencriptado += "a";
            i++;
          }
          break;
        case "e":
          if (textoOriginal.substr(i, 5) === "enter") {
            textoDesencriptado += "e";
            i += 4;
          }
          break;
        case "i":
          if (textoOriginal.substr(i, 4) === "imes") {
            textoDesencriptado += "i";
            i += 3;
          }
          break;
        case "o":
          if (textoOriginal.substr(i, 4) === "ober") {
            textoDesencriptado += "o";
            i += 3;
          }
          break;
        case "u":
          if (textoOriginal.substr(i, 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3;
          }
          break;
        default:
          textoDesencriptado += textoOriginal[i];
          break;
      }
    }
    console.log(texto.value);
    console.log(textoDesencriptado);
    limpiarTextarea();
    vaciarDiv(textoDesencriptado); 
  }
}

function limpiarTextarea() {
  texto.value = "";
}

function vaciarDiv(contenido) {
  div.innerHTML = '';
  // Creamos y agregamos el nuevo texto en la parte superior
  const nuevoTexto = document.createElement('h2');
  nuevoTexto.textContent = contenido;
  div.prepend(nuevoTexto);
  // Creamos y agregamos div y el botón en la parte inferior
  const divAux = document.createElement('div');
  const mensaje = document.createElement('div');
  mensaje.id = 'mensaje';
  divAux.className = 'button';
  divAux.style.padding = '10px';
  divAux.style.margin = '10px';
  divAux.style.paddingBottom = '0';
  divAux.style.marginBottom = '0';
  const boton = document.createElement('button');
  boton.id = 'desencriptar';
  boton.style.margin = '0px';
  boton.textContent = 'Copiar';
  divAux.appendChild(mensaje);
  divAux.appendChild(boton);
  div.appendChild(divAux);
  div.style.display = 'flex';
  textoEncriptado = "";
  textoDesencriptado = "";
  boton.onclick = async function() {
    try{
      await navigator.clipboard.writeText(contenido);
      mensaje.textContent = '¡Texto copiado al portapapeles!';
    }catch(err){
      console.error('Error al copiar al portapapeles:', err);
      mensaje.textContent = 'Error al copiar al portapapeles.';
    }
    setTimeout(() => {
      mensaje.textContent = '';
    }, 1000);
  };
}
