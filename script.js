// const nome = prompt("Qual seu nome?")
// const nomeMaiusculo = nome.toUpperCase()
// const cor = prompt("Qual sua cor favorita?")
// const citacao = prompt("Qual a sua citação favorita?")

// console.log(`Nome: ${nomeMaiusculo} \nCor favorita: ${cor} \nCitação: \"${citacao}\"`)
// console.log("A cor favorita de" + nomeMaiusculo + "é" + cor)
// console.log(`A cor favorita de ${nomeMaiusculo} é ${cor}`)
// console.log(`O nome ${nomeMaiusculo} tem ${nome.length} letras`)

// const verificarLetra = nomeMaiusculo.includes("A")
// console.log(`O nome ${nome} tem a letra \"A\"?: ${verificarLetra}`)

const nome = prompt("Qual seu nome?")
const email = prompt("Informe seu email: ")
const trocarLetra = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`.replaceAll('r','z')
const verificarArroba = email.includes("@")
const numeroCaracteres = nome.length

console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`)
console.log(`A frase acima com as letras R trocadas pelo Z fica: \n${trocarLetra}`)
console.log(`No e-mail possui arroba? ${verificarArroba}`)
console.log(`No nome ${nome} possui ${numeroCaracteres} caracteres.`)




