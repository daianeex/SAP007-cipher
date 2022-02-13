export function encode(offset, senha) {
    let resultsEncode = "";
    let codLetra = 65
    for (let i=0; i <senha.length; i++){
    let codAsc = senha[i].charCodeAt();
    let codNovaLetra = ((codAsc - codLetra + offset) %26) + codLetra;
    resultsEncode = resultsEncode.concat(String.fromCharCode(codNovaLetra));
    
    }
      return resultsEncode;
    }

export function decode(offset, senha) {
  let resultDecode = "";
  let numDecod = 90;
  for (let i = 0 i<senha.length; i++) {
    let codAsc = senha[i].charCodeAt();
    let letraDecode = ((codAsc - numDecod - offset) %26) + numDecod;
    resultDecode = resultDecode.concat(String.fromCharCode(letraDecode));
    }