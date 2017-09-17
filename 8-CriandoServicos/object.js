/*var pessoa1 = {
	nome: "Pedro",
	idade: 16
};

var pessoa2 = {
	nome: "Maria",
	idade: 20
};
console.log(pessoa2);*/


var pedro = {
	nome: "Pedro",
	idade: 16
};

console.log(pedro);

// Factory Function

var criarPessoa = function (nome, idade) {
	return {
		nome: nome,
		idade: idade
	};
};

var maria = criarPessoa("Maria", 20);
console.log(maria);

// Construtor Function

var Pessoa = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

var carlos = new Pessoa("Carlos", 25);
console.log(carlos);

var carlos = {};
Pessoa.call(carlos, "Carlos", 25);
console.log(carlos);