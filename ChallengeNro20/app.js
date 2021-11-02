let carrito = [];
let producto='';

let getValueInput = () =>{
  let inputValue = document.getElementById("articulo").value; 
  document.getElementById("valueInput").innerHTML = inputValue; 
  return inputValue;
}      

function sweetalert(mensaje){
    Swal.fire({
            title: `Atención: `,
            text: ` ${mensaje}`,
            
           })
}

function limpiar(){
    document.getElementById("articulo").value='';
    // document.getElementById("articulo").value='';
}

function agregarProducto(){
    producto=getValueInput();
    // console.log(producto);
    if(producto.length === 0){
        sweetalert('Ingrese un artículo.');}
    else {
        if(buscarProducto()===true){
            sweetalert('El Producto ya está en el carrito.');
            limpiar();
          }
        else{
            carrito.push(producto.toLowerCase().trim());
            sweetalert('Producto agregado correctamente.');
            mostrarCarrito(carrito);
            limpiar();
        }       
        }
    }
        
function mostrarCarrito(){
        if(carrito.length === 0){
            sweetalert('El carrito está vacío.');}
        else {
            sweetalert(`Los productos del carrito son: \n - ${carrito.join('\n - ')}`);
              }
    }

function buscarProducto(){
    producto=getValueInput();
    // console.log(producto);
    let incluye=carrito.includes(producto);
    console.log('Voy aqui');
    console.log(incluye);
    // if(carrito.includes(producto.toLowerCase().trim())===true){
    if(incluye){
        sweetalert('El producto ya existe.');
         return true;
         
    }else{
         return false;
     }
}   

//revisar esta funcion
function filtrarProducto(){
    producto=getValueInput();
    let productosFiltrados = carrito.filter(producto => producto.includes(producto.toLowerCase().trim()));
    if(productosFiltrados.length===0){
        sweetalert('Ningún producto coincide con el criterio de búsqueda.');
    }else{
        sweetalert(`Los productos que contienen la palabra especificada son: \n - ${productosFiltrados.join('\n - ')}`); 
    }
}

function eliminarProducto(){
    let productoAEliminar=getValueInput();
    let posicion = carrito.indexOf(productoAEliminar.toLowerCase().trim());
    if(posicion === -1){
        sweetalert('Ningún producto coincide con el criterio de búsqueda.');
    }else{
        carrito.splice(posicion,1);
        sweetalert(`El producto se eliminó correctamente.`); 
    }
}


    