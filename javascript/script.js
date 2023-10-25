//Traemos los elementos del HTML
const inputNum = document.getElementById('sucesion');
const btnCalcular = document.getElementById('btnCalcular');
const pantalla = document.getElementById('pantalla');
let calculo = 0;

//Escuchar evento click
btnCalcular.addEventListener('click', calcularSucesion);

//Declarar funciones
function calcularSucesion(){
    let numero = parseInt(inputNum.value);
    console.log(numero);
    let sucesion = [0, 1];

    if(!isNaN(numero)){
        for(let i=2; i< numero; i++){
            calculo = sucesion[i-1] + sucesion[i-2];
            sucesion.push(calculo);
        }
        console.log(sucesion);
    
    }else{
        alert('Ingresar un dato válido');
    }

    pantalla.innerHTML = sucesion;
}