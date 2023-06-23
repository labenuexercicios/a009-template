// prática guiada I e II
// versão concatenação
/*
function imprimeStringNomeECor (nome, corFavorita, citacao){
const string = 'A cor favorita de ' + nome + ' é ' + corFavorita + '. A citação favorita é \"' + citacao + '\".'
console.log('Versão concatenada:', string)

}
const nome = prompt('Qual é o seu nome?')
const corFavorita = prompt('Qual sua cor favorita?')
const citacaoFavorita = prompt('Qual é a sua citação predileta?')

imprimeStringNomeECor(nome, corFavorita, citacao)
*/
// versão template strings
/*
function imprimeStringNomeECorTemplateString(nome, corFavorita) {

    const nomeMaiusculo = nome.toUpperCase()

    const string = `
    Nome: ${nomeMaiusculo}
    Cor Favorita: ${corFavorita}`

    const tamanhoNome = nomeMaiusculo.length

    const incluiA = nomeMaiusculo.includes('A')

    console.log('Versão com template strings:')
    console.log(string)
    console.log('Quantidade de caracteres no nome:' (tamanhoNome))
    console.log('O nome tem o caractere A?, incluiA')

}
*/

// exercicio de fixação:

const pegaNomeEEmail = (nome, email) => {
    const tamanhoNome = nome.length

    const mensagem = `O email ${email} foi cadastrado com sucesso. Boas Vindas, ${nome}!
    O seu nome tem ${tamanhoNome} caracteres.`

    const mensagemComX = mensagem.replaceAll('R', 'X').replaceAll('r', 'x')
const temArroba = email.includes('@')
    
console.log(mensagem)
console.log(mensagemComX)
console.log(`O email enviado inclui '@'?`, temArroba)

}
const nomeUser = prompt('Qual é o seu nome?')
const emailUser = prompt('Qual é o seu email?')

pegaNomeEEmail(nomeUser,emailUser)