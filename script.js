const encriptador = document.querySelector(".encriptador");
const resultado = document.querySelector(".resultado");

// e = "enter"
// i = "imes"
// a = "ai"
// o = "ober"
// u = "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(encriptador.value)
    resultado.value = textoEncriptado;
    encriptador.value = "";
    resultado.style.backgroundImage = "none";
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(encriptador.value)
    resultado.value = textoEncriptado;
    encriptador.value = "";
    resultado.style.backgroundImage = "none";
}

function botonCopiar() {
    let textoEncriptado = document.querySelector(".resultado").value;
        navigator.clipboard.writeText(textoEncriptado).then(function() {
            alert("Texto copiado al portapapeles");
        }).catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
}

function encriptar(stringEncriptado){
let matrizCodigo = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"],];
        stringDesencriptado = stringDesencriptado.toLowerCase()
    
        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    
            }
    
        }
        return stringDesencriptado
    }