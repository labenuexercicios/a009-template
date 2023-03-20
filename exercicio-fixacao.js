
const nome = "Vinicius da Silva"
const email = "viniciusdasilvax@gmail.com"

const usuarioDados = (nome, email) => {
    return `o e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome.toUpperCase()}! \n
    O nome ${nome} possui ${nome.length} caracteres`
}

let pessoa = usuarioDados(nome, email)

let fraseAlterada = pessoa.replaceAll('r', 'x')

let verificar = pessoa.includes('@')

console.log(verificar)

console.log('--------- RESOLUÇÃO ---------')
console.log('------- FRASE ORIGINAL -------')
console.log(pessoa)
console.log('--------- FRASE ALTERADA ------')
console.log(fraseAlterada)
console.log(`--------- Verificar @ == ${verificar}- `)
