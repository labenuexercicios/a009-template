function imprimeString(nome, cor){
    const frase = 'Nome: ' + nome + '\ncor: ' + cor + '.'
    console.log(frase)
}

//const nome = prompt('Seu nome:')
//const cor = prompt('Sua cor favorita:')

//imprimeString(nome, cor)

const imprimeDiferente = function (nome, cor){
    const frase = `A cor favorita de ${nome} é ${cor}.`
    console.log(frase)
    const incluiA = nome.includes('A')

    console.log(`${nome} inclui A? ${incluiA}`)
    console.log(nome.length)
}

//const nome2 = (prompt('Seu nome:')).toUpperCase()
//const cor2 = prompt('Sua cor favorita:')

//imprimeDiferente(nome2, cor2)

const cadastro = (nome, email) => {
    const frase = `O email ${email} foi cadastrado com sucesso. Boas vindas, ${nome}.`
    const novaFrase = frase.replaceAll('r','x')
    console.log(frase)
    console.log(novaFrase)
    console.log(nome.length)
    console.log(email.includes('@'))
}

const nome = prompt('Qual o seu nome?')
const email = prompt('Qual o seu email?')

cadastro(nome, email)

// tentando upar no github