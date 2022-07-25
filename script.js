// const nome = prompt(`Qual é o seu nome?`);
// const cor = prompt(`Qual a sua cor preferida?`);

// //Concatenação
// let mensagem1 = "A cor favorita de, " + nome + " é " + cor;
// console.log(mensagem1);

// let mensagem2 = `A cor favorita de ${nome} é ${cor}`;
// console.log(mensagem2);

// const nome = prompt(`Qual é seu nome?`);
// const cor = prompt(`Qual sua cor preferida?`)

// let mensagem1 = `A cor favorita de ${nome} é ${cor}`
// console.log(mensagem1)

// const nome = prompt(`Qual é seu nome?`);
// const cor = prompt(`Qual sua cor preferida?`)

// let mensagem1 = `A cor favorita de ${nome} é ${cor}`
// console.log(`O nome da ${nome.toUpperCase()} possui ${nome.length} carascteres`);

// console.log(`O nome possui a letra A: ${nome.includes("A")}`);


// EXERCICIO DE FIXAÇÃO
let nome = prompt(`Qual é o seu nome?`);
let email = prompt(`Qual é o seu email?`);

let mensagem = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`;
console.log(mensagem);
console.log(`O nome da ${nome.toUpperCase()} possui ${nome.length} caracteres`);
console.log(`${mensagem.replaceAll("r", "l")}`);

//verificação de email
console.log(email.includes("@"));

