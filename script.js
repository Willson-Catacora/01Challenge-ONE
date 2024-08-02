const encriptarBoton = document.querySelector("#encriptar");
const desencriptarBoton = document.querySelector("#desencriptar");
const texto = document.querySelector("#texto");
const textoEncriptado = "";

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
}
function Desencriptar() {
  let textoDesencriptado = "";
  const textoOriginal = texto.value;
  for (let i = 0; i < textoOriginal.length; i++) {
    switch (textoOriginal[i]) {
      case "a":
        if (textoOriginal[i] == "a" && textoOriginal[i + 1] == "i")
          textoDesencriptado += "a";
        i++;
        break;
      case "e":
        if (
          textoOriginal[i] == "e" &&
          textoOriginal[i + 1] == "n" &&
          textoOriginal[i + 2] == "t" &&
          textoOriginal[i + 3] == "e" &&
          textoOriginal[i + 4] == "r"
        )
          textoDesencriptado += "e";
        i += 4;
        break;
      case "i":
        if (
          textoOriginal[i] == "i" &&
          textoOriginal[i + 1] == "m" &&
          textoOriginal[i + 2] == "e" &&
          textoOriginal[i + 3] == "s"
        )
          textoDesencriptado += "i";
        i += 3;
        break;
      case "o":
        if (
          textoOriginal[i] == "o" &&
          textoOriginal[i + 1] == "b" &&
          textoOriginal[i + 2] == "e" &&
          textoOriginal[i + 3] == "r"
        )
          textoDesencriptado += "o";
        i += 3;
        break;
      case "u":
        if (
          textoOriginal[i] == "u" &&
          textoOriginal[i + 1] == "f" &&
          textoOriginal[i + 2] == "a" &&
          textoOriginal[i + 3] == "t"
        )
          textoDesencriptado += "u";
        i += 3;
        break;
      default:
        textoDesencriptado += textoOriginal[i];
        break;
    }
  }
  console.log(texto.value);
  console.log(textoDesencriptado);
  limpiarTextarea();
}
function limpiarTextarea() {
  texto.value = "";
}
