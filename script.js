let pessoa = prompt("Qual o seu nome?")//.toUpperCase() // toUpperCase e toLowCase fazem a string ficar maiuscula e minuscula. 
let cor = prompt("Qual sua cor favorita?")
let citacao = prompt("Qual sua citação favorita?")

let fraseConcatenacao = "Seu nome é: " + pessoa + "\nSua cor favorita é: " + cor + "\nSua citação favorita é : " + "\""+ citacao + "\"" //podemos colocar aspas de outra forma ex: se a frase estiver com frase "" podemos fazer a citação dentro delas com aspas simples ex: "oi eu sou o 'João'", nesse caso as aspas simples irão aparecer em João.

console.log("Frase com concatenação:",fraseConcatenacao) 

//------------------------------------------------------------


let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}.\nE sua citação favorita é "${citacao}"`

console.log("Frase com Template String",fraseTemplateString)

//------------------------------------------------------------

console.log(pessoa.length)//length diz o tamanho da string

//------------------------------------------------------------

console.log(pessoa.includes("a")) //include verifica se o nome da pessoa possui um caractere especifico.



//---------------------------------------------------------------

//Peça nome e email
let nome = prompt("Digite seu nome: ")
let email = prompt("Digite seu email: ")

//Troque R por X
const frase = `O email ${email.trim()} foi cadastrado com sucesso. Seja bem vindo ${nome}`
const novafrase = (frase.replaceAll("R","X").replaceAll("r","x"))
console.log(novafrase)

//Verique o numero de caracteres do nome
console.log(nome.length)

//Verifique se o email possui @
console.log(email.includes("@"))

