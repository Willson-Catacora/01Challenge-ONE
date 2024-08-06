const encriptarBoton = document.querySelector("#encriptar");
const desencriptarBoton = document.querySelector("#desencriptar");
const texto = document.querySelector("#texto");
const div = document.querySelector('.div2');

document.addEventListener("DOMContentLoaded", () => {
  encriptarBoton.addEventListener("click", Encriptar);
  desencriptarBoton.addEventListener("click", Desencriptar);
});

function Encriptar() {
  let textoEncriptado = "";
  const textoOriginal = texto.value;
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
  vaciarDiv(textoEncriptado); // Pasa el texto encriptado a la función
}

function Desencriptar() {
  let textoDesencriptado = "";
  const textoOriginal = texto.value;
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
  // vaciarDiv(textoDesencriptado); // Pasa el texto desencriptado a la función
}

function limpiarTextarea() {
  texto.value = "";
}

function vaciarDiv(contenido) {
  const img = div.querySelector("img");
  if (img) {
    img.remove();
  }
  // Actualizamos el contenido del <p>
  const p = div.querySelector('p');
  if (p) {
      p.textContent = 'Texto actualizado en el párrafo.';
  }
  // Creamos y agregamos el nuevo texto en la parte superior
  const nuevoTexto = document.createElement('div');
  nuevoTexto.classList.add('nuevo-texto');
  nuevoTexto.textContent = 'Nuevo texto en la parte superior';
  div.prepend(nuevoTexto);
  // Creamos y agregamos el botón en la parte inferior
  const boton = document.createElement('button');
  boton.classList.add('boton');
  boton.textContent = 'Nuevo Botón';
  boton.onclick = function() {
      alert('Botón clickeado');
  };
  div.appendChild(boton);
}
