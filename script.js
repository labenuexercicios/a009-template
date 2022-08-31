let nome = prompt('Qual é o seu nome?')
let cor =  prompt('Qual sua cor favorita?   ')
let citacao = prompt('Qual sua citação favorita?')

console.log("Nome: " + nome.toUpperCase() + "\nCor favorita: " + cor + "\nCitação favorita: \"" + citacao + "\".")
console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${cor} \nCitação favorita: \"${citacao}\".`)

const verificacaoA = nome.includes("A")

console.log(`Quantidade de caractere no nome: ${nome.length}`, `O nome tem letra \"A\"?: ${verificacaoA}`)