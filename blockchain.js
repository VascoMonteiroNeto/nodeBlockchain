import Bloco from './bloco'

export default class Blockchain{
    constructor(){
        this.chain =[]
        this.chain.push(this.criarGenesis())
        this.transacoesPendentes = []
        this.dificuldade = 1
        this.recompensaMinerador = 0.5
    }

    criarGenesis(){
        return new Bloco(Date.now(), 'Genesis', '0' )
    }

    addTransacao(transacao){
        this.transacoesPendentes.push(transacao)
    }

    getChain(){
        return this.chain
    }

    getUltimaHash(){
        return this.chain[this.chain.length -1].hash
    }

    minerarTransacoesPendentes(){
        console.log("Iniciando mineiração")
        const novoBloco = new Bloco(Date.now(), this.transacoesPendentes, this.getUltimaHash())
        novoBloco.mineirarBloco(this.dificuldade)
        console.log("Bloco mineirado com sucesso!")
        this.chain.push(novoBloco)
        this.transacoesPendentes = []
    }

    obterRecompensaMineirador(endereco){
        let valorRecompensa = 0;

        for (const bloco of this.chain){
            for (const transacao of bloco.transacoes){
                if (transacao.enderecoRemetente == endereco){
                    valorRecompensa -= transacao.valor
                }
                if (transacao.enderecoDestinatario == endereco){
                    valorRecompensa += transacao.valor
                }
            }
        }

        return valorRecompensa
    }
}