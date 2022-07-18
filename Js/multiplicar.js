let numero = parseInt(prompt("Ingrese un numero a multiplicar"));

for (let i = 1; i <= 10; i++) {
    if (isNaN(numero)) {
       alert("  Debe ingresar un número");
        break;
    }else{
        alert( numero +" x "+ i + " = " + numero * i);
    }
        

}






