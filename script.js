// Prática guiada nº 1,2 e 3
//function imprimeStringNomeECor(nome, corFavorita, citacao) {
    //const string = 'A cor favotira de ' + nome + ' é ' + corFavorita + '. A citação favorita é "' + citacao + '".'

    //console.log(string)

//}

//const nome1 = prompt('Qual é o seu nome?')
//const melhorCor = prompt('Qual é a sua cor favorita ?')
//const citacaoFavorita = prompt('Qual é a sua melhor citação?')

//imprimeStringNomeECor(nome1,melhorCor,citacaoFavorita)

// versao template strings

//function imprimeStringNomeECor(nome, corFavorita) {
    //const string = `Á cor favorita de ${nome} é ${corFavorita} sua citação é : ${citacao}.`

    //console.log(string)
//}

//imprimeStringNomeECor(nome1, melhorCor,citacaoFavorita)

//const nomeMaiusculo = nome1.toUpperCase()

//const string = `
//Nome: ${nomeMaiusculo} e a
//Cor Favorita: ${melhorCor}`

//const incluiA = nomeMaiusculo.includes('A')

//console.log(string)
//console.log('Quantidade de caracteres no nome:', nome1.length)
//console.log('O nome tem a caractere A?', incluiA)

function loginEEndereco (nome, email){
    const frase = `O e-email ${email} foi cadastrado com sucesso.Boas vindas, ${nome}! Seu nome possui ${nome.length} caracteres`

    console.log(frase)

    const mensagemComX = frase.replaceAll('R' ,"X").replaceAll('r', "x")
    console.log(mensagemComX)

    const temArroba = email.includes('@')
    console.log(temArroba)
}

const login = prompt('Qual o seu nome ?')
const caixaPostal = prompt ('Qual o seu email ?')

loginEEndereco(login, caixaPostal)

// Adicione a mensagem anterior a quantiade de caracteres
// 






