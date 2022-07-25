let nome = prompt("Qual o seu nome?");
let cor = prompt("Qual a sua cor favorita?");

let fraseCorFavorita = "a cor favorita de "+nome+" é "+cor;

console.log(fraseCorFavorita);
console.log(`a cor favorita do ${nome.toUpperCase()} é  \n${cor.toLowerCase()}`);

console.log(nome.length);

let seuNome = prompt("Qual seu nome?");
let emailUsuario = prompt("Qual seu email?");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${seuNome} `);
console.log(seuNome.length);

let nomeAlterado = nome.replaceAll("r", "l");
console.log(`O nome é ${seuNome}`.replaceAll("R", "L"));
