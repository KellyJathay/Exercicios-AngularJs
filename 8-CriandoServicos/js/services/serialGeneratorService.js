angular.module("listaTelefonica").provider("serialGenerator", function (config) {
	console.log(config);
	var _length = 5;

	this.getLength = function () {
		return _length
	};

	this.setLength = function (length) {
		_length = length;
	};

	this.$get = function () {
		return {
			generate: function () {
				var serial = "";
				while(serial.length < _length) {
				serial += String.fromCharCode(Math.floor(Math.random() * 57) + 48);
				}
				return serial;
			}
		};
	};
});