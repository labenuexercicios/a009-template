/*let nome = prompt("Qual o seu nome?")
let corfav = prompt("Qual a sua cor favorita?")

console.log("A cor favorita da "+nome+" é "+corfav)

//OU 

let fraseCorFav = "A cor favorita da "+nome+" é "+corfav
console.log(fraseCorFav)

//OU

let fraseTemplateString = `A cor favorita da ${nome} é ${corfav}`
console.log(fraseTemplateString)

//--------------------------

const citacao = prompt("Deixe aqui sua citação preferida:")
const fraseCitacao = "\"" +citacao+ "\""
console.log(fraseCitacao)

//OU

const citacao2 = "A cor favorita da " +nome+ "é" +corfav+ "\""+citacao+"\""
console.log(fraseCitacao)


//TemplateString
console.log(`Nome: ${nome} \nCor favorita: ${corfav}`)

//Manipulando a String

console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${corfav}`) // LETRAS MAIUSCULAS
console.log(nome.length)

const possuiA = nome.includes("a")
console.log(possuiA)*/

//EXERCÍCIO DE FIXAÇÃO

const nome = prompt("Insira seu nome:")
const email = prompt("Insira o e-mail de usuário:")

console.log(`Bem-vindo, ${nome}. \nE-mail ${email} cadastrado com sucesso!`)
console.log(nome.length)

const possuiR = email.includes("@")
console.log(possuiR)

const substituirporL = nome.replaceAll("r","l")
console.log(substituirporL)