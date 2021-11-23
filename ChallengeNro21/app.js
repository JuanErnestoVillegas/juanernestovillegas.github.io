function dibujar(){
    let radio = document.getElementById("radio").value;
    let color = document.getElementById("ColorInput").value;
    let grosor = document.getElementById("bordersize").value;
    let estiloborde = valorSelect;
    if((radio!='')&&(grosor!='')){
        let diametro = (radio*2)/10*36.142083;
        let circle = document.querySelector("#circle")
        circle.style.width = `${diametro}px`;
        circle.style.height = `${diametro}px`;
        circle.style.borderStyle = estiloborde;
        circle.style.border = `${estiloborde} ${grosor}px ${color}`;
    }else{
        sweeetalert();
    }
}

function sweeetalert(){
               Swal.fire({
                  title: `Atención`,
                  text: ` Ingrese todos los valores solicitados`,
                })
}


