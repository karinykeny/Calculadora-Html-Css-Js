function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function resultado(oper) {
    var valor = parseFloat(document.getElementById("operando-input").value);

    if ( !isNaN(valor) && oper.value != "" ){
        document.getElementById("resultado-input").style.color = "black";

        if(oper.value = "fatorial") {
            if (valor < 1) {
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
        } else if (oper.value = "quadrada") {
            
    
        } else if (oper.value = "quadrado") {
            res = valor * valor;
            
        } else if (oper.value = "seno") {
            console.log("entrou")
            res = Math.sin(valor);
            console.log(res)
            
        } else if (oper.value = "cubo") {
            res = valor * valor * valor;
            
        } else if (oper.value = "divisor") {
            
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

 function limpar() {
    document.getElementById("resultado-input").style.color = "black";
 }
