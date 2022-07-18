let palabra = prompt("ingrese una palabra");
let cant = parseInt(prompt("ingrese el número de veces a repetir la palabra"));

if (isNaN(cant)) {
    alert("Debe ingresar un número")
}else{
    for(let i = 1; i <= cant; i++){
        alert(palabra + " " + i)
    }
}