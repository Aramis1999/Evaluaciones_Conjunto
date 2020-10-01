var cantEquilatero = 0;
var cantIsosceles = 0;
var cantEscaleno = 0;

function nuevoTriangulo() {
    var l1 = document.getElementById("lado1").value;
    var l2 = document.getElementById("lado2").value;
    var l3 = document.getElementById("lado3").value;
    var tipo = "";

    if(l1==l2 && l2==l3) {
        cantEquilatero++;
        tipo = "Equilátero";
    } else if(l1==l2 || l2==l3 || l1==l3) {
        cantIsosceles++;
        tipo = "Isósceles";
    } else{ 
        cantEscaleno++;
        tipo = "Escaleno";
    }

    document.getElementById("equilatero").value = cantEquilatero;
    document.getElementById("isosceles").value = cantIsosceles;
    document.getElementById("escaleno").value = cantEscaleno;

    if (cantEquilatero < cantIsosceles && cantEquilatero < cantEscaleno) {
        document.getElementById("tipo").value = "Equilátero";
    } else if(cantIsosceles < cantEquilatero && cantIsosceles < cantEscaleno) {
        document.getElementById("tipo").value = "Isósceles";
    } else{
        document.getElementById("tipo").value = "Escaleno";
    }

    document.getElementById("filas").innerHTML += `<tr><td>${l1}</td><td>${l2}</td><td>${l3}</td><td>${tipo}</td></tr>`;

}

