const cipher = {
  
    encode(offset, string) {
      if (offset == 0 || offset == null || offset == undefined) {
        throw new TypeError();
      }

        let senhaCode = "";
        let quantidadeLetras = string.length;

        for (let i = 0; i < quantidadeLetras; i++) {
            let valorAsc = string.charCodeAt(i)

            let codigoLetra = 65;
            let valorEncode = ((valorAsc - codigoLetra + offset) % 26) + codigoLetra;
            senhaCode = senhaCode.concat(String.fromCharCode(valorEncode));
        }

        return senhaCode;
    },

    decode(offset, string) {

      if (offset == 0 || offset == null || offset == undefined) {
        throw new TypeError();
      }
      
      let senhaDecode = "";
      let quantidadeLetras = string.length;
      for (let i = 0; i < quantidadeLetras; i++) {
          let valorAsc = string.charCodeAt(i)

          let codigoLetra = 90;
          let valorDecode = ((valorAsc - codigoLetra - offset) % 26) + codigoLetra;
          senhaDecode = senhaDecode.concat(String.fromCharCode(valorDecode));
      }
      return senhaDecode;
  }

};

export default cipher;