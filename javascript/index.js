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

    if(isNaN(valor1) || isNaN(valor2)){
        var res = "Informe todas as entradas!"
        document.getElementById("resultado-input").style.color = "red";

    } else {
        switch (oper) {
            case 'somar':
                var res = valor1 + valor2;
                break;
            case 'subtrair':
                var res = valor1-valor2;
                break;
            case 'multiplicar':
                var res = valor1*valor2;
                break;
            case 'dividir':
                var res = valor1/valor2;
            case 'mod':
                var res = valor1%valor2;
                break;
        }
        document.getElementById("resultado-input").style.color = "black";
    }
    document.getElementById("resultado-input").value = res;
 }

 function converter(inf) {
    var moeda_1 = document.getElementById('valor').value;

    if ( !isNaN(moeda_1) && inf.value != "" ){
        switch(inf.value) {
            case 'RU':
                var entrada = "BRL_USD"
                var simbolo = "$"   
                break;
            case 'UR':
                var entrada = "USD_BRL"
                var simbolo = "R$" 
                break;
            case 'RE':
                var entrada = "BRL_EUR"
                var simbolo = "€" 
                break;
            case 'ER':
                var entrada = "EUR_BRL"
                var simbolo = "R$" 
                break;
        }
        var url = `https://free.currconv.com/api/v7/convert?q=${entrada}&compact=ultra&apiKey=d910ec66dae52a007dbc`;
        fetch(url).then(response => { return response.json(); })
                  .then( json => {
                      var cotacao = json[entrada];
                      document.getElementById("resultado-input").value = simbolo + " "  + (cotacao * moeda_1).toFixed(2); 
                      document.getElementById("resultado-input").style.color = "black";
                  });
    } else {
        document.getElementById("resultado-input").style.color = "red";
        document.getElementById("resultado-input").value = "Por favor informe as entradas corretamente!";
    }
 }

 function ConverterBase(conversorBase) {
    var valorBase = parseFloat(document.getElementById("valorBase").value);
    var valorBase2 = document.getElementById("valorBase").value.toString();
    var res;

    switch (conversorBase.value) {
        case "decBin":
            res = valorBase.toString(2);
            break;
        case "decHex":
            res = valorBase.toString(16);
            break;
        case "binDec":
            res = parseInt(valorBase2, 2);;
            break;
        case "hexDec":
            res = parseInt(valorBase2, 16);
        break;
        default:
            alert("Algo errado aconteceu, tente novamente!");
        break;
    }
    document.getElementById("resultado-input").value = res;
}

 function limpar() {
    document.getElementById("resultado-input").style.color = "black";
 }
