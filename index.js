import cipher from "./cipher.js";

document.getElementById("btncifrar").addEventListener("click", cifrarSenha)
function cifrarSenha() {

    let suaSenha = document.getElementById("suaSenha").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    let senhaEncode = cipher.encode(offset, suaSenha);
    document.getElementById("senhaPronta").value = senhaEncode;

}

document.getElementById("btndecifrar").addEventListener("click", decifrarSenha);
function decifrarSenha() {

    let suaSenha = document.getElementById("suaSenha").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    let senhaDecode = cipher.decode(offset, suaSenha);
    document.getElementById("senhaPronta").value = senhaDecode;


}