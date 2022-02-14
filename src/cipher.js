function encode(suaSenha, offset, escolhaFun) {
  let asciiCode = 0;
  let senhaFinal = "";

  function caractere (n, m) {
    return ((n % m) + m) % m;
  }   
  
  if (escolhaFun == true) {
    offset = offset * -1;
  }
  for (let letr of suaSenha) {
    if (letr.charCodeAt() == 32) {
      senhaFinal += "";
    }
    else if (letr.charCodeAt() >= 65 && letr.charCodeAt() <= 90) {
      asciiCode = caractere((letr.charCodeAt() - 65 + offset), 26) + 65;
      senhaFinal += String.fromCharCode(asciiCode);
    }
    else if (letr.charCodeAt() >= 97 && letr.charCodeAt() <= 122) {
      asciiCode = caractere((letr.charCodeAt() - 97 + offset), 26) + 97;
      senhaFinal += String.fromCharCode(asciiCode);
    }
    else {
      senhaFinal += letr;
    }
  }
  let result = document.getElementById("input-result");
  result.value = senhaFinal;
  return senhaFinal;
}

export default encode;