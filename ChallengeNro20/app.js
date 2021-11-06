let carrito = [];
let producto='';

let getValueInput = () =>{
  let inputValue = document.getElementById("articulo").value; 
  return inputValue;
}      

function sweetalert(mensaje){
    Swal.fire({
            title: `Atención: `,
            text: ` ${mensaje}`,
            icon: 'info'           
            }
           );
}

function agregarProducto(){
    producto=getValueInput();
    if(producto.length === 0){
        sweetalert('Ingrese un artículo.');
         }
    else {
        if(buscarProducto()===true){
            sweetalert('El Producto ya está en el carrito.');
            limpiar().onclick;
          }
        else{ 
            carrito.push(producto.toLowerCase().trim());
            sweetalert('Producto agregado correctamente.');
            mostrarCarrito();
            limpiar().onclick;
         }       
        }
    }

function mostrarCarrito(){  
        if(carrito.length === 0){
            sweetalert('El carrito está vacío.');
            }
        else {
            //limpiar lista     
            let list = document.getElementById("lista");
            while (list.firstChild) {
              list.removeChild(list.firstChild);
            }
            
            for(let i=0;i<carrito.length;i++){     
                //agrego nodo
                let elemento = document.createElement("p");
                let text = document.createTextNode(carrito[i]);
                elemento.appendChild(text);
                document.getElementById('lista').appendChild(elemento);
            }            
              }
    }

function buscarProducto(){
    producto=getValueInput();
    if(producto.length === 0){
        sweetalert('Ingrese un artículo.');
       }
    else {
        let incluye=carrito.includes(producto.toLowerCase().trim());
        if(incluye){
            sweetalert('El producto ya existe en tu carrito.');
            return true;
            
        }else{
            sweetalert('El producto no existe en tu carrito.');
            return false;
        }
    }
}   

function filtrarProducto(){
    producto=getValueInput();
    let productosFiltrados = carrito.filter(product => product.includes(producto.toLowerCase().trim()));
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
        mostrarCarrito();
        limpiar().onclick;
    }
}


    