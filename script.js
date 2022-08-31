// // Peça ao usuario para inserir seu nom e sua cor favorita
// let nome = prompt("Qual seu nome?")
// let cor = prompt("Quak sua cor favorita?")

// // imprima a msg "a cor favoria de nome é" concatenando
// console.log("A cor favorita de " + nome + " é", cor)

// // imprima a msg "a cor favoria de nome é" como string
// console.log(`A cor favorita de ${nome} é ${cor}`)

// // sitação favorita
// let citacao = prompt("Diga sua citação favorita")

// // alterar string 
// console.log(`Nome: ${nome} \nCor favorita: ${cor} \nCitação favorita: \"${citacao}\"`)

// // faça com que o nome da pessoa semore seja exibido em letras maiusculas
// let nomeMaiusc = nome.toUpperCase()
// console.log(`Nome: ${nomeMaiusc} \nCor favorita: ${cor} \nCitação favorita: \"${citacao}\"`)

// //quantos caracteres tem o nome da pessoa
// console.log("O nome tem " + nome.length + " caracteres")

// // o nome tem letra A?
// let verifLetra = nome.includes("a")
// console.log("O nome tem letra A? " + verifLetra)

// nome e emaill do usuario
let nome = prompt("Qual seu nome")
let email = prompt("Qual seu email")
console.log("O e-mail " + email + " foi cadastrado com sucasso. Boas-vindas, " + nome + ". Seu nome tem " + nome.length + " caracteres")
let frase = "O e-mail " + email + " foi cadastrado com sucasso. Boas-vindas, " + nome + ". Seu nome tem " + nome.length + " caracteres"

//substituir as letras R por L
let subst = frase.replace("r","l")
console.log(subst)

//verificar se tem @ no email
let verifEmail = email.includes("@")
console.log("O email possui @? " + verifEmail)


