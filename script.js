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

const nome2 = (prompt('Seu nome:')).toUpperCase()
const cor2 = prompt('Sua cor favorita:')

imprimeDiferente(nome2, cor2)

