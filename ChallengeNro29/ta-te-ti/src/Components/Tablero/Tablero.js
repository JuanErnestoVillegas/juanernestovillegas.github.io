import { useState } from "react";
import Bloque from './../Bloque/Bloque';
import './Tablero.css';
import Swal from "sweetalert2";

function refreshPage() {
    window.location.reload(false);
  }

const Tablero = () =>{
    const [player, setPlayer] = useState("X");
    const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
    let status;
    let finalizada=false; 
    let playerAnt;
    
    const handlePlay = (position) => {
            playerAnt = player;
            if(game[position]!=='') return;
            let newState = game;        
            newState[position] = player;
            console.log(`JUGADOR: ${player}`);
            if(finalizada===false){
                setGame(newState);
                if(player==="X"){
                    setPlayer("O")
                }else{
                    setPlayer("X")
                }                     
   }
    };

    const handleStatus = () => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];


        lines.forEach(([x,y,z])=>{
            if(game[x]===game[y] && game[x]===game[z] && game[x]!==''){           
                finalizada=true;
                playerAnt=game[x];          
                status = `Ganó ${playerAnt}`;     
                Swal.fire("Juego terminado", `GANADOR: ${playerAnt}`, "success");  
                setTimeout(() => {
                    refreshPage(); 
                  }, 2000);                                 
            }else{
                status = `Juega ${player}`;
            }
        }
        )
        return null;    
}
    

    handleStatus();
    return (
        <>
        <div id="titulo">TA-TE-TI</div>
        <h3 id="estado">{status}</h3>
        <br />
        <div className="tateti">  
                <div className="table-row">
                    <Bloque onClick={() => handlePlay(0)} player={game[0]} />  
                    <Bloque onClick={() => handlePlay(1)} player={game[1]} /> 
                    <Bloque onClick={() => handlePlay(2)} player={game[2]} />           
                </div>
                <div className="table-row">
                    <Bloque onClick={() => handlePlay(3)} player={game[3]} />  
                    <Bloque onClick={() => handlePlay(4)} player={game[4]} /> 
                    <Bloque onClick={() => handlePlay(5)} player={game[5]} />           
                </div>
                <div className="table-row">
                    <Bloque onClick={() => handlePlay(6)} player={game[6]} />  
                    <Bloque onClick={() => handlePlay(7)} player={game[7]} /> 
                    <Bloque onClick={() => handlePlay(8)} player={game[8]} />           
                </div>       
            </div> 
            <button type="submit" onClick={refreshPage}>Limpiar</button>            
        </>
      );
    };
     
    export default Tablero;

