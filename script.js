/*const nome = prompt("Qual seu nome?")
const cor = prompt("Qual sua cor favorita?")
const citacao = prompt("Escreva uma citação")

//uso da contatenação = sinal de +
console.log("A cor favorita de " + nome + " é " + cor + ".")
//uso do template strigns = crase (`) combinado do $ + {}

//console.log(`A cor favorita de ${nome} é ${cor}`)


console.log("A cor favorita de " + nome +  " é " + cor + " e a sua citação é " + "\"" + citacao + "\"")
//PARA COLOCAR UMA FRASE DENTRO DE ASPAS SE UTILIZA A COMBINAÇÃO DE "\""VARIAVEL"\"" ASPAS + BARRA AO CONTRARIO + VARIAVEL + ASPAS - BARRA - ASPAS

//console.log("Nome: " + nome + " Cor favorita: " + cor + "")  - Essa tbm é uma forma possível, mas não consegui quebrar a linha
console.log(`Nome: ${nome}  \nCor favorita: ${cor}`)

console.log(`Nome: ${nome.toUpperCase()}`) // comando para tornar as letras maisculas
console.log(`Nome: ${nome.length}`) // comando para contar a quantidade de caracteres 
console.log(nome.includes("a")) //comando que identifica a ocorrência de determinado caracter

*/

//fixação

const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")

console.log(`O e-mail" ${email} foi cadastrado com sucesso! \nBoas Vindas, ${nome}! \nQuantidade de letras: ${nome.length}`)
//console.log(`O e-mail" ${email} foi cadastrado com sucesso! Boas Vindas, ${nome}!` .replaceall('r','L'))

console.log(`O caracter @ foi identificado: ${email.includes("@")}`)