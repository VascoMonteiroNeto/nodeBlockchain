import SHA256 from 'crypto-js/sha256';

export default class Bloco {
    constructor(timesStamp, transacoes, hashBlocoAnterior){
        this.timesStamp = timesStamp;
        this.hashBlocoAnterior = hashBlocoAnterior;
        this.transacoes = transacoes;
        this.hash = this.calculaHash() 
        this.contador = 0
    }

    calculaHash(){
        return SHA256(this.hashBlocoAnterior + this.timesStamp + this.contador).toString()
    }

    mineirarBloco(dificuldade){
        let hashBlock = this.hash.substring(0, dificuldade)
        let hashASerMineirado = Array(dificuldade + 1).join(0)
        
        while(hashBlock !== hashASerMineirado){
            this.contador++;
            this.hash = this.calculaHash();
            hashBlock = this.hash.substring(0, dificuldade)
        }
        console.log("Hash mineirado: "+ this.hash)
    }
}