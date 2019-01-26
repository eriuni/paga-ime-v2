var llogarit = document.getElementById("enter");
var input = document.getElementById("userinput");
var pagaN = document.getElementById("pagaNn");
var pagaB = document.getElementById("pagaBb");
var zgjidhNeto = document.getElementById("pagaN");
var zgjidhBruto = document.getElementById("pagaB");
var tapi = document.getElementById('tap')
var sigShoqPun = document.getElementById("sigShoqPun");
var sigShendPun = document.getElementById("sigShendPun");
var sigShoqPunedh = document.getElementById("sigShoqPuna");
var sigShendPunedh = document.getElementById("sigShendPuna");




function llogaritja() {
    var paga = input.value;
    
    if (zgjidhNeto.checked == false) {
        var pagaBruto = Number(paga);
        
        var sigShoqPunt;
        var sigShendPunt;
        var sigShoqPuna;
        var sigShendPuna;

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

        var totalSigPunt = sigShoqPunt + sigShendPunt;

        var tap;

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

        var pagaNeto = paga - totalSigPunt - tap;


    } else {
        var pagaNeto = Number(paga);
        var tap;
        var pagaBruto;

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

                //tap = ((0.23 * pagaNeto) - 9461.58) / 0.653;
                //pagaBruto = (pagaNeto - 6844) / 0.653;

            } else {
                pagaBruto = (pagaNeto - 3900) / 0.758;
                tap = (pagaBruto - 30000) * 0.13;

            }

        }
        tapa();


    }

    var sigShoqPunt;
    var sigShendPunt;
    var sigShoqPuna;
    var sigShendPuna;

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

    var totalSigPunt = sigShoqPunt + sigShendPunt;

    pagaN.innerHTML = Math.round(pagaNeto) + " leke";
    pagaB.innerHTML = Math.round(pagaBruto) + " leke";
    tapi.innerHTML = Math.round(tap) + " leke";
    sigShoqPun.innerHTML = Math.round(sigShoqPunt) + " leke";
    sigShendPun.innerHTML = Math.round(sigShendPunt) + " leke";
    sigShoqPunedh.innerHTML = Math.round(sigShoqPuna) + " leke";
    sigShendPunedh.innerHTML = Math.round(sigShendPuna) + " leke";
}

function bejLlogaritje() {
    if (Number(input.value) >= 21312) {
        llogaritja();
    } else {
        alert("Ju lutem vendosni pagen neto minimale qe eshte 21,312 leke ose me shume.");
    }

}

llogarit.addEventListener("click", bejLlogaritje);