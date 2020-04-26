function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function resultado(oper) {
    var valor = parseFloat(document.getElementById("operando-input").value);

    if ( !isNaN(valor) && oper.value != "" ){
        document.getElementById("resultado-input").style.color = "black";

        switch(oper.value) {
            case 'fatorial':
                if (valor < 0) {
                    var res = "Inpossível calcular o fatorial do número passado!"
                    document.getElementById("resultado-input").style.color = "red";
                } else {
                    var resultado = 1;
                    var count = 1;
                    numero = valor;
                    while(count<=numero){
                        resultado *= count;
                        count++;
                    }
                    res = resultado;
                }
                break;
            case 'quadrada':
                res = Math.sqrt(valor); 
                break;
            case 'quadrado':
                res = Math.pow(valor, 2)
                break;
            case 'seno':
                res = Math.sin(valor);
                break;
            case 'cubo':
                res = Math.pow(valor, 3)
                break;
            case 'divisor':
                res = 1 / valor;
                break;
        }
    } else {
        var res = "Por favor informe as entradas corretamente!"
        document.getElementById("resultado-input").style.color = "red";
    }
    document.getElementById("resultado-input").value = res;
}

function calcular() {
    var valor1 =  parseFloat(document.getElementById("valor01").value);
    var valor2 = parseFloat(document.getElementById("valor02").value);
    var oper = document.getElementById("select-2").value;
    console.log(valor1)
    console.log(valor2)
    if(isNaN(valor1) || isNaN(valor2)){
        var res = "Informe todas as entradas!"
        document.getElementById("resultado-input").style.color = "red";

    } else {
        switch (oper) {
            case 'somar':
                var res = valor1 + valor2;
                break;
            case 'subtrair':
                var res = valor1 - valor2;
                break;
            case 'multiplicar':
                var res = valor1 * valor2;
                break;
            case 'dividir':
                var res = valor1 / valor2;
                break;
            case 'mod':
                var res = valor1 % valor2;
                break;
            default:
                var res = "Algo errado aconteceu, tente novamente!";
                document.getElementById("resultado-input").style.color = "red";
                break;
        }
        document.getElementById("resultado-input").style.color = "black";
    }
    document.getElementById("resultado-input").value = res;
 }

 function converter(inf) {
    var valor = parseFloat(document.getElementById('valor').value);
    var dolar = parseFloat(document.getElementById('dolar').value);
    var euro = parseFloat(document.getElementById('euro').value);

    if ( !isNaN(valor) && inf.value != "" && (!isNaN(dolar) || !isNaN(euro)) ){
        switch(inf.value) {
            case 'RU':
                var res = "$ " + (valor/dolar).toFixed(2);   
                break;
            case 'UR':
                var aux = 1/dolar;
                var res = "R$ " + (aux * valor).toFixed(2);
                break;
            case 'RE':
                var res = "€ " + (valor/euro).toFixed(2); 
                break;
            case 'ER':
                var aux = 1/euro;
                var res = "€ " + (aux * valor).toFixed(2); 
                break;
        }
        document.getElementById("resultado-input").value = res; 
        document.getElementById("resultado-input").style.color = "black";

    } else {
        document.getElementById("resultado-input").style.color = "red";
        document.getElementById("resultado-input").value = "Por favor informe as entradas corretamente!";
    }
 }

 function ConverterBase(conversorBase) {
    var valorBase = parseFloat(document.getElementById("valorBase").value);
    var valorBase2 = document.getElementById("valorBase").value.toString();
    var res;

    if ( valorBase2 != "" && valorBase2 != undefined && conversorBase.value != "") {
        
        switch (conversorBase.value) {
            case "decBin":
                res = valorBase.toString(2);
                var cor = "black";
                break;
            case "decHex":
                res = valorBase.toString(16);
                var cor = "black";
                break;
            case "binDec":
                res = parseInt(valorBase2, 2);
                var cor = "black";
                break;
            case "hexDec":
                res = parseInt(valorBase2, 16);
                var cor = "black";
            break;
            default:
                res = "Algo errado aconteceu, tente novamente!";
                var cor = "red";
            break;
        }
        
    } else {
        var cor = "red";
        res = "Por favor informe as entradas corretamente!";
    } 
    document.getElementById("resultado-input").value = res;
    document.getElementById("resultado-input").style.color = cor;
}

function limpar() {
    document.getElementById("resultado-input").style.color = "black";
}
