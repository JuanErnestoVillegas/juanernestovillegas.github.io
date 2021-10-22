let numero=Number(prompt('Ingrese un número para mostrar su tabla de multiplicar'));
let i;

console.log(`La Tabla del ${numero} es:`);
for(i=1;i<=10;i++){
    console.log(`${numero}x${i} = `,numero*i);
}
