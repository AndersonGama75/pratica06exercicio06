function somar () {
				var raio = document.getElementById ("primeiroNumero").value;
				//var n2 = document.getElementById ("segundoNumero").value;
				raio = parseInt (raio);
				var volume = 0;
				
				if (raio <= 0) {
					alert('O raio deve ter um valor positivo!');
				} else {
					volume = 4 * 3.14 * (Math.pow(raio, 3)) / 3;
					volumeArred = volume.toFixed(2);
					document.getElementById ("soma").innerHTML = 'O volume da esfera de raio '+ raio + ' é igual a ' + volumeArred;
				}
				
			}