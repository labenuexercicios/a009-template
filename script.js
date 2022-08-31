/*const nome = prompt ("Qual é o seu nome?")
const cor = prompt ("Qual é a sua cor favorita?")
const citação = prompt ("Escreva uma citação")
const nomeMaiusculo = nome.toUpperCase()
const verificarLetra = nome.includes("A")
 

//concatenação = serve para salvar frases em uma variável
//console.log ("A cor favorita de " + nome + " é " + cor)

//template strings - uso de crase é necessário
//console.log (`A cor favorita de ${nome} é ${cor}`)

console.log (`A cor favorita de ${nomeMaiusculo} é ${cor} \"${citação}"`)

//Fazer o nome da pessoa ser exibido em letra maiúsculas
 console.log (`Quandidade de caracteres: ${nome.length}`)

console.log(" O nome da pessoa tem letra A? " + verificarLetra)*/

const nomeDoUsuario = prompt ("Qual o nome do usuario?")
const emailDoUsuario = prompt ("Qual é o seu email?")
const numeroCaracteres = nomeDoUsuario.length
const frase = (`O email ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! A quantidade de caracteres do seu nome de usuário é de: ${numeroCaracteres}`)

novafrase = frase.replaceAll("r","l")

const verificarArroba = emailDoUsuario.includes("@")

 console.log(novafrase)
console.log("O email do usuário possui arrobas? " + verificarArroba)