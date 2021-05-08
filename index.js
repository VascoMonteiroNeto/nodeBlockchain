import Blockchain from './blockchain'
import Transacao from './transacao'

const meuCoin = new Blockchain()
const enderecoMineirador = 'enderecoVasco'

const transacaoUm = new Transacao('meuEndereco', 'enderecoDany', 10)
meuCoin.addTransacao(transacaoUm)
meuCoin.minerarTransacoesPendentes()

meuCoin.obterRecompensaMineirador(enderecoMineirador)

const transacaoDois = new Transacao('meuEndereco', 'enderecoDany', 20)
meuCoin.addTransacao(transacaoUm)
meuCoin.minerarTransacoesPendentes()

meuCoin.obterRecompensaMineirador(enderecoMineirador)

console.log(meuCoin.getChain())