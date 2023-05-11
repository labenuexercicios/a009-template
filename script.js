 // let pessoa = prompt("Qual é o seu nome?")
 // let cor = prompt("Qual é sua cor favorita?")
 // let citacao = prompt(" Qual é a sua citação favorita?")

// let fraseConcatenacao = " A cor favorita de " + pessoa + " é " + cor + ".\"" + citacao + "\""

 // let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`

  //console.log(" Concatenação " , fraseConcatenacao)
 //console.log(" Template string" , fraseTemplateString)

// let fraseQuebraLinha = "Nome: " + pessoa + "\nCor Favorita: " + cor + "\nCitação" + citacao 
// console.log(fraseQuebraLinha)

 // let fraseQuebraLinhaTemplateString = `Nome: ${pessoa}
// Cor favorita: ${cor}`

//console.log(fraseQuebraLinhaTemplateString)

// console.log("Xampson".toUpperCase())
// console.log("sdaiuhdsiuhadsiuhdasASDUIHGSDIGDASIUY".toLowerCase())
// console.log("sdaiuhdsiuhadsiuhdasASDUIHGSDIGDASIUY".length)

// console.log(pessoa.length)

//console.log("Ana".includes("n"))


 let nome = prompt("Qual é o seu nome?")
 let email = prompt("Qual é seu email?")
 let fraseBoasVindas = " O e-mail " + email + " foi cadastrado com sucesso. Boas vindas,\n" + nome +'!"'
 let novaFrase = fraseBoasVindas.replaceAll("r", "x")

 console.log(fraseBoasVindas)
 console.log(nome.length)
 console.log(novaFrase)
 console.log(email.includes("@"))