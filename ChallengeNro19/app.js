const opciones = ['piedra', 'papel', 'tijeras'];

function bot(){
    let jugada = Math.round(Math.random()*2);
    return jugada;
}

function testsweeetalert(resultado, bot , jugada){
      switch(true){        
        case bot===0:
            {
                Swal.fire({
                    title: `Resultado: ${resultado}`,
                    text: ` ${jugada}`,
                    imageUrl: "img/piedra.jpg",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Piedra',
                  })
                  break;
            }
        case bot===1:
                {
                    Swal.fire({
                        title: `Resultado: ${resultado}`,
                        text: ` ${jugada}`,
                        imageUrl: "img/papel.jpg",
                        imageWidth: 400,
                        imageHeight: 200,                        
                        imageAlt: 'Papel',
                      })
                      break;
                }    
        case bot===2:
                {
                    Swal.fire({
                        title: `Resultado: ${resultado}`,
                        text: ` ${jugada}`,
                        imageUrl: "img/tijeras.jpg",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Tijeras',
                      })
                      break;
                }  
    }
}

function definicion(bot, player){    
    switch(true){
        case bot===player:
            testsweeetalert('EMPATE',bot,`El bot ha jugado ${opciones[bot]}`);
            break;
        case bot===0 && player===1:
                testsweeetalert('GANO PLAYER',bot,`El bot ha jugado ${opciones[bot]}`);
                break;
        case bot===0 && player===2:   
                testsweeetalert('GANO EL BOT',bot,`El bot ha jugado ${opciones[bot]}`);
                break;
        case bot===1 && player===0:
                testsweeetalert('GANO EL BOT',bot,`El bot ha jugado ${opciones[bot]}`);
                break;   
        case bot===1 && player===2:
                testsweeetalert('GANO PLAYER',bot,`El bot ha jugado ${opciones[bot]}`);
                break;   
        case bot===2 && player===0:
                testsweeetalert('GANO PLAYER',bot,`El bot ha jugado ${opciones[bot]}`);
                break;
        case bot===2 && player===1:   
                testsweeetalert('GANO EL BOT',bot,`El bot ha jugado ${opciones[bot]}`);
                break;          
    }
}

function jugar(player){
    definicion(bot(),player);
}