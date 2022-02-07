
//Criptografar
document.getElementById("btn-cifrar").addEventListener("click", () => {
  let suaSenha = document.getElementById("criptografar").value;
  let offset = parseInt(document.getElementById("key").value);
  // let desp = document.getElementById("descriptografar").checked; //descriptografa
  cifrar(suaSenha, offset);
})

function cifrar(suaSenha, offset) {
  let asciiCode = 0;
  let senhaPronta = "";

    for(let i=0; i < suaSenha.length; i++){
      console.log(suaSenha[i])
      if (char.charCodeAt() == 32) {
        senhaPronta += " ";
      }
      else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        asciiCode = mod((char.charCodeAt() - 65 + offset), 26) + 65;
        senhaPronta += String.fromCharCode(asciiCode);
      }
      else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
        asciiCode = mod((char.charCodeAt() - 97 + offset), 26) + 97;
        senhaPronta += String.fromCharCode(asciiCode);
      }
      else {
        senhaPronta += char;
      }

  console.log(senhaPronta)
    }
}   

export default cipher;
