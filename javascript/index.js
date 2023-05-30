
function encriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = encriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
  }
  
  function desencriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = desencriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
  }
  
  function copiarAlPortapapeles() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + resultado.value);
  }
  
  function encriptarTexto(texto) {
    var textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return textoEncriptado;
  }
  
  function desencriptarTexto(textoEncriptado) {
    var texto = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return texto;
  }