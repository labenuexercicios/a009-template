//criar um programa que peça ao usuario para inserir o nome 
const nome = prompt("Qual o seu nome?")
 
// e a cor favorita 
  const cor = prompt ("Qual a sua cor favorita?")
   
  // imprima "a cor favorita é"
   console.log("a cor favorita da " + nome + "é" + cor)

  //envie tambem uma citação , deve esta entre aspas 
   const citação = prompt ("escreva sua citação")
   const fraseComCitacao= "\" "+ citação + "\" "
   console.log(fraseComCitacao)

// faça com que o nome da pessoa  sempre seja exibida com letra maiuscula
   console.log( `Nome : ${nome.toUpperCase()} \nCor Favorita: ${cor}`)

// exiba quantos caracteres tem
  console.log (nome.length)

//cheque se o nome da pessoa possui a letra A
    const possuiA = nome.includes("a")
    console.log(possuiA)

// Pergunte o nome e o email, e imprima no console uma frase 

   const nomeDoUsuario = prompt("Qual o seu nome?")
   const emailDoUsuario = prompt("Qual o seu email")
    console.log( `o email ${emailDoUsuario} foi cadastrado com sucesso. Bem vindo ${nomeDoUsuario}`) 

    // quantidade de caracteres presente no nome da pessoa 
    console.log(nomeDoUsuario.length);

    //substitua todas as letras R por L
    console.log( `o email ${emailDoUsuario} foi cadastrado com sucesso. Bem vindo ${nomeDoUsuario}`.replaceAll('r','l'))

    // o email possui @ ?
    const temArroba= emailDoUsuario.includes(`@`)
   
    console.log(temArroba)
    //comentatio para atualizar branch

    