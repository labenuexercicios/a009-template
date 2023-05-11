//__AULA STRING___EXERCÍCIO FEITO EM AULA

const nome = prompt("Insira o seu nome:")
const cor = prompt("Qual a sua cor favotira? ")
const citacao = prompt("Cite uma frase que você gosta!")

let fraseConcatenacao = "A cor favorita de " + nome + " é " + cor + "A frase favorita é: " + '"' + citacao + '"'
let fraseTemplateString = `A cor favorita de ${nome} é ${cor}. Sua frase favorita é: ${citacao}`
let fraseQuebraLinha = "Nome: " + nome + "\nCor: " + cor
let fraseQuebraLinhaTemplateString = `Nome: ${nome} \nCor: ${cor}`

console.log(fraseQuebraLinha)
console.log("A cor favorita de " + nome.toLocaleUpperCase() + " é " + cor)
console.log(fraseTemplateString)
console.log('A cor favorita de ' + nome + ' é ' + cor + '. Sua frase foi: ' + '"' + citacao + '"')
console.log(`Nome: ${nome} \nCor: ${cor} \nFrase:"${citacao}"`)
console.log(`O nome ${nome} tem ${nome.length} caracteres`)
console.log(`O nome ${nome} possue a letra "y"? ${nome.includes("y")}`)

//--------------------------->

const nomeDoUsuario = prompt("Digite o seu nome: ")
const emailDoUsuario = prompt("Digite o seu e-mail: ")
let numeroCaracteres = "Seu nome tem " + nomeDoUsuario.length + " caracteres"
let frase = `O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. \nBoas vindas, ${nomeDoUsuario}. \n${numeroCaracteres}`
let novaFrase = frase.replaceAll("s", "x").replaceAll("S", "x")
let verificar = "Seu e-mail possue o @" + emailDoUsuario.includes("@")

console.log(frase)
console.log(novaFrase)
console.log(verificar)