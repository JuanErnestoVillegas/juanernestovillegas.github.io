let dni=0;
let bandera=false;

while(bandera!==true){
    dni = Number(prompt('Ingrese su DNI.'));
    if((!isNaN(dni)) && dni!=0 &&(dni.length === 7 || dni.length === 8))  
            {
                bandera=true;
                alert('DNI ingresado correctamente.');
            }
    else{
        alert('Ingrese DNI válido.');
    }
}


