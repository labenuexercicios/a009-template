// let nome = prompt("Digite seu nome: ")
// let corFavorita = prompt("Qual sua cor favorita? ")

let nome = "VinAcius"
let corFavorita = "Preto"
let citacaofavorita = "Ser ou não ser, eis a questão"

const pessoaConcatenacao = (nome, cor) => { 
    // Recebe o nome e a cor favorita da pessoa e retorna usando a concatenação
    return "A cor favorita de " + nome + " é " + cor
}
const pessoaTemplateString = (nome, cor, citacao) => { 
    // Recebe o nome e a cor favorita da pessoa e retorna em um template string
    return `Nome: ${nome.toUpperCase()} \n Cor favotira: ${cor} \n "${citacao}"`
}


// console.log(pessoaConcatenacao(nome, corFavorita))
console.log(pessoaTemplateString(nome, corFavorita, citacaofavorita))

console.log(`O Nome ${nome} possui ${nome.length} caracteres`)
console.log(`O Nome possui a letra A? ${nome.includes("A")}`)
