angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
	console.log(serialGeneratorProvider.getLength(10));
	//serialGeneratorProvider.setLength(100);
});