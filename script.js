// let nome = prompt("Digite seu nome: ")
// let corFavorita = prompt("Qual sua cor favorita? ")

let nome = "Vinicius"
let corFavorita = "Preto"

const pessoaConcatenacao = (nome, cor) => { 
    // Recebe o nome e a cor favorita da pessoa e retorna usando a concatenação
    return "A cor favorita de " + nome + " é " + cor
}
const pessoaTemplateString = (nome, cor) => { 
    // Recebe o nome e a cor favorita da pessoa e retorna em um template string
    return `A cor favorita de ${nome} é ${cor}`
}


console.log(pessoaConcatenacao(nome, corFavorita))
console.log(pessoaTemplateString(nome, corFavorita))
