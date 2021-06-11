function main() {
	document.getElementById("btn").addEventListener("click", button_action)

	document.getElementById("num").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("btn").click();
		}
	});
}

function button_action() {
	var input_number = document.getElementById("num");
	var number = parseInt(input_number.value);
	input_number.value = "";
	var result;

	if (isNaN(number)) {
		result = "Digite um número válido!";

	} else {
		var is_prime = isPrime(number);

		if (is_prime) {
			result = `${number} é primo!`;
		} else {
			result = `${number} não é primo!`;
		}
	}

	document.getElementById("result").innerHTML = result;
}

function isPrime(n) {
	var is_prime = true;

	if (n <= 1) {
		is_prime = false;
	} else {
        	for (var i = 2; i <= Math.sqrt(n); i++) {
               		if (n % i == 0) {
                       		is_prime = false;
                       		break;
               		}
       		}
	}	

       	return is_prime;
}

document.addEventListener("DOMContentLoaded", main)

