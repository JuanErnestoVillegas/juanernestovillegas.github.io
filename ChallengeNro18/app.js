let numero;
let numeros='';
let respuesta=false;

while(respuesta!==true){
    numero = prompt('Ingrese un número.');    
    if(!isNaN(numero))  
            {     
                numeros=numeros+ numero.toString();
                console.log(numeros);
             }
    else{
        alert('Ingrese número válido.');
    }
    respuesta=!confirm('¿Desea ingresar otro número?');
    if(respuesta===false){
        console.log(numeros);
        }     
}
