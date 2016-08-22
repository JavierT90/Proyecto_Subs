var expect = require('chai').expect;
var request = require('superagent');

describe('Pagina de traducciones', function() {
	var baseUrl = 'http://localhost:8080'
	describe('Cuando se solicite el sitio Traducir',function(){
		it('debería de obtener una cadena con hola mundo',function(done){
			//Función esperada para que se cumpla la prueba
			request.get(baseUrl + '/traducir?texto=hello%20world&idiomaorigen=EN&idiomadestino=ESP').end(function assert(err,res){
				expect(err).to.not.be.ok;
				expect(res).to.have.property('status',200);
        expect(res.text).to.equal('hola mundo');
				done();
			});

		});
	});
});