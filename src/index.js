import encode from "./cipher.js";

document.getElementById("btncifrar").addEventListener("click", () => {
  let suaSenha = document.getElementById("input-senha").value;
  let offset = parseInt(document.getElementById("key").value);
  let escolhaFun = document.getElementById("rddecode").checked;
  encode(suaSenha, offset, escolhaFun);
})

const copyBtn = document.getElementById("copybtn").addEventListener("click", () => {
  let suaSenha = document.getElementById("input-result");
  suaSenha.select();
  document.execCommand("copy");
})
