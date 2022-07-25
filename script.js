let nome = prompt("Qual o seu nome?");
let cor = prompt("Qual a sua cor favorita?");

console.log(`Olá, ${nome}! Você tem uma cor favorita chamada ${cor}!`);
console.log("Olá, " + nome + "! Você tem uma cor favorita chamada " + cor + "!");
console.log(`Nome: ${nome}\nCor Favorita: ${cor}`);

// -------------------------------------------------------------

let citação = prompt("Escreva uma citação");
let fraseComCitação = `"${citação}"`;

console.log(fraseComCitação);

// -------------------------------------------------------------

console.log(`Olá, ${nome.toUpperCase()}!`);
console.log(`${nome} tem ${nome.length} caracteres.`);
console.log(`O nome ${nome} ${nome.toUpperCase().includes("A") ? "": "não "}tem a letra A.`);

// -------------------------------------------------------------

let NomeDeUsuário = prompt("Digite seu nome de usuário");
let Email = prompt("Digite seu email");

while(!Email.includes("@") || !Email.includes(".")){
    Email = prompt("Digite seu email VALIDO");
}

let Frase = `O email ${Email.trim()} foi cadastrado com sucesso! Boas vindas ${NomeDeUsuário}!\nSeu nome possui ${nome.length} caracteres.`

console.log(Frase);
console.log(Frase.replaceAll("r", "l") + "\nCeboloso!");
console.log(`O email ${Email.includes("@") ? "": "não "}tem o caracter @.`);