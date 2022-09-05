const mensaje = document.querySelector (".mensaje");
const resultado = document.querySelector (".mensajeEncriptado");



function encriptar (array) {

    for (i = 0; i < array.length; i++) {
        if (array [i] == "a") {
            array [i] = ["a","i"];
        }else if (array [i] == "e") {
            array [i] = ["e","n","t","e","r"];
        }else if (array [i] == "i") {
            array [i] = ["i","m","e","s"];
        }else if (array [i] == "o") {
            array [i] = ["o","b","e","r"];
        }else if (array [i] == "u") {
            array [i] = ["u","f","a","t"];
        }
    }
    var resultadoEnString = array.toString ();
    var resultadoEnStringSinComas = resultadoEnString.replaceAll(",", "");
    return resultadoEnStringSinComas;
}

function desencriptar (string) {

    var codigoAi = "ai";
    var codigoEnter = "enter";
    var codigoImes = "imes";
    var codigoOber = "ober";
    var codigoUfat = "ufat";
    if ((string.includes (codigoAi)) || (string.includes (codigoEnter)) || (string.includes (codigoImes)) || (string.includes (codigoOber)) || (string.includes (codigoUfat))) {

        var string1 = string.replaceAll (codigoAi, "a");
        var string2  = string1.replaceAll (codigoEnter, "e");
        var string3 = string2.replaceAll (codigoImes, "i");
        var string4 = string3.replaceAll (codigoOber, "o");
        var string5 = string4.replaceAll (codigoUfat, "u");
    } else {
        string5 = string;
    }

    return string5;
}



function btnEncriptar () {
    var string = mensaje.value;
    var arreglo = Array.from (string);
    const textoEncriptado = encriptar (arreglo);
    resultado.value = textoEncriptado;
    resultado.style.backgroundImage = "none";
}

function btnDesencriptar () {
    var stringParaDesencriptar = mensaje.value;
    const textoDesencriptado = desencriptar (stringParaDesencriptar);
    resultado.value = textoDesencriptado;
}

function btnCopiar () {
    const copia = resultado.value;
    navigator.clipboard.writeText (copia);
    alert ("copiado");

}