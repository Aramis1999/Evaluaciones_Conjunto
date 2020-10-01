function Potencia(base1,potencia1){
    this.base = base1;
    this.potencia = potencia1;
    this.resultado = Math.pow(this.base,this.potencia);
    this.ImprimirCalculo = function () {
        document.getElementById("resultado").innerHTML = "<h3> Resultado: "+this.resultado+"</h3>";
    }
    this.Retornar  = function(){
        return arr = [this.base,this.potencia,this.resultado];
    }
}

function CrearFuncion(){
    var baseInput = document.getElementById("base").value;
    var exponenteInput = document.getElementById("exponente").value;

    var potencia = new Potencia(baseInput,exponenteInput);
    potencia.ImprimirCalculo();
    var retorno = potencia.Retornar();
    for (let i = 0; i < retorno.length; i++) {
        document.getElementById("tabla").innerHTML += "<div>" + ((i==0)?"base: ":(i==1)?"exponente: ":"Resultado: ") + retorno[i]+"</div>";      
    }
}



