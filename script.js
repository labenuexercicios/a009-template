// const imprimirPessoa = ()=>{
//     const nome =prompt('Digite seu nome');
//     const corFavorita =prompt('Digite sua cor favorita')
//     console.log(`A cor favorita de ${nome.toUpperCase()} é ${corFavorita}. A vida é louca.`)
//     console.log(nome.length)
//     console.log(nome.includes('a'))
// };
// imprimirPessoa()


const inserirDados = ()=>{
    const nome =prompt('Digite seu nome');
    const email =prompt('Digite seu e-mail');
   console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas,
        ${nome} o nome do usuário possui ${nome.length} letras.`)
console.log(email.includes('@'))
nome.replace('R,r', 'X,r'), email.replace('R,r', 'X,r')

}
   inserirDados()

