var expect = require('chai').expect;
var request = require('superagent');

describe('Pagina de Inicio', function() {
	var baseUrl = 'http://localhost:8080'
	describe('Cuando se solicite el sitio Inicio',function(){
		it('debería de obetner la página de inicio',function(done){
			//Función esperada para que se cumpla la prueba
			request.get(baseUrl + '/Inicio.html').end(function assert(err,res){
				expect(err).to.not.be.ok;
				expect(res).to.have.property('status',200);
				done();
			});
		});
	});
});