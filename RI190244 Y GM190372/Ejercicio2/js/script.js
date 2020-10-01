var regular = document.getElementById("regular");
var diesel = document.getElementById("diesel");
var especial = document.getElementById("especial");
var galones = document.getElementById("galones");
var monto = document.getElementById("idmonto");
var tipo = 0;
var total = 0;

function tipoGasolina(){
    tipo = 0;
    if(regular.checked) tipo = 3.05;
    if(diesel.checked) tipo = 2.96;
    if(especial.checked) tipo = 3.27;
    galonesAdquiridos();
}
function galonesAdquiridos(){
    total = 0;
    total = tipo * galones.value;
    total = Math.round(total * 100) / 100;
    monto.textContent = total;
    imprimirValores();
}
function imprimirValores(){
    var idTgasolina = document.getElementById("idTgasolina");
    var idgasolina = document.getElementById("idgasolina");
    if(regular.checked) idTgasolina.textContent = "Regular";
    if(diesel.checked) idTgasolina.textContent = "diesel";
    if(especial.checked) idTgasolina.textContent = "especial";
    idgasolina.textContent = galones.value;
}
