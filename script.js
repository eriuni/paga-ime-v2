const llogarit = document.getElementById("enter");
const input = document.getElementById("userinput");
const pagaN = document.getElementById("pagaNn");
const pagaB = document.getElementById("pagaBb");
const zgjidhNeto = document.getElementById("pagaN");
const zgjidhBruto = document.getElementById("pagaB");
const tapi = document.getElementById('tap')
const sigShoqPun = document.getElementById("sigShoqPun");
const sigShendPun = document.getElementById("sigShendPun");
const sigShoqPunedh = document.getElementById("sigShoqPuna");
const sigShendPunedh = document.getElementById("sigShendPuna");


function llogaritja() {

	let paga = +input.value;

	let pagaBruto;
	let pagaNeto;
	let tap;

	let sigShoqPunt;
	let sigShendPunt;
	let sigShoqPuna;
	let sigShendPuna;	

	if (zgjidhNeto.checked == false) {

		pagaBruto = paga;

		function sigShoqPuntori() {

			if (pagaBruto > 105850) {
				sigShoqPunt = 10056;
				sigShendPunt = pagaBruto * 0.017;
				sigShoqPuna = 15878;
				sigShendPuna = pagaBruto * 0.017;
			} else {
				sigShoqPunt = pagaBruto * 0.095;
				sigShendPunt = pagaBruto * 0.017;
				sigShoqPuna = pagaBruto * 0.15;
				sigShendPuna = pagaBruto * 0.017;
			}

		}

		sigShoqPuntori();

		let totalSigPunt = sigShoqPunt + sigShendPunt;


		function tapa() {

			if (paga <= 30000) {
				tap = 0;

			} else if (paga > 130000) {
				tap = (100000 * 0.13) + ((paga - 130000) * 0.23);

			} else {
				tap = (paga - 30000) * 0.13;

			}
		}

		tapa();


		pagaNeto = paga - totalSigPunt - tap;

	} else {
		pagaNeto = paga;

		function tapa() {

			if (pagaNeto <= 26640) {
				tap = 0;
				pagaBruto = (pagaNeto + tap) / 0.888;
			} else if (pagaNeto > 104734) {
				pagaBruto = (pagaNeto - 6844) / 0.753;
				tap = (100000 * 0.13) + ((pagaBruto - 130000) * 0.23);
			} else if (pagaNeto > 84134 && pagaNeto <= 104734) {
				pagaBruto = (pagaNeto + 6156) / 0.853;
				tap = (pagaBruto - 30000) * 0.13;
			} else {
				pagaBruto = (pagaNeto - 3900) / 0.758;
				tap = (pagaBruto - 30000) * 0.13;
			}

		}

		tapa();
	}

	function sigShoqPuntori() {

		if (pagaBruto > 105850) {
			sigShoqPunt = 10056;
			sigShendPunt = pagaBruto * 0.017;
			sigShoqPuna = 15878;
			sigShendPuna = pagaBruto * 0.017;
		} else {
			sigShoqPunt = pagaBruto * 0.095;
			sigShendPunt = pagaBruto * 0.017;
			sigShoqPuna = pagaBruto * 0.15;
			sigShendPuna = pagaBruto * 0.017;
		}

	}

	sigShoqPuntori();



	pagaN.innerHTML = Math.round(pagaNeto) + " leke";
	pagaB.innerHTML = Math.round(pagaBruto) + " leke";
	tapi.innerHTML = Math.round(tap) + " leke";
	sigShoqPun.innerHTML = Math.round(sigShoqPunt) + " leke";
	sigShendPun.innerHTML = Math.round(sigShendPunt) + " leke";
	sigShoqPunedh.innerHTML = Math.round(sigShoqPuna) + " leke";
	sigShendPunedh.innerHTML = Math.round(sigShendPuna) + " leke";

}

function bejLlogaritje() {

	if (+input.value >= 23088) {
		llogaritja();
	} else {
		alert("Ju lutem vendosni pagen neto minimale qe eshte 23,088 leke ose me shume.");
	}

}

llogarit.addEventListener("click", bejLlogaritje);