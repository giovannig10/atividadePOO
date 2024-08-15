const pessoa = {
    primeiroNome: "giovanni",
    sobrenome: "gonçalves",
    idade: 16,
    corOlho: "preto",
    altura: 175,
    dataNascimento: "04/04/2008",
    usaOculos: true,
    corPele: "branco",
    corFavorita: "rosa",
    sexo: "masculino"
}
//primeira frase
console.log("1- o " + pessoa.primeiroNome + " "+ pessoa.sobrenome + " tem " + pessoa.idade + " anos!");

//alterar um objeto
pessoa.sobrenome = "gomes";

//segunda frase
console.log("2- o " + pessoa.primeiroNome + " "+ pessoa.sobrenome + " tem " + pessoa.idade + " anos!")