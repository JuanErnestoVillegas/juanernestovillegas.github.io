import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
let id_ant=0;

function refreshPage() {
  window.location.reload(false);
}

const PictureListOriginal = [
    {
      id: 1,
      url: "../assets/img/Mamushka01.jpg"        
    },
    {
      id: 2,
      url: "../assets/img/Mamushka02.jpg"                 
    },
    {
      id: 3,
      url: "../assets/img/Mamushka03.jpg"                 
    },
    {
      id: 4,
      url: "../assets/img/Mamushka04.jpg"                 
    },
    {
      id: 5,
      url: "../assets/img/Mamushka05.jpg"                 
    },
    {
      id: 6,
      url: "../assets/img/Mamushka06.jpg"                 
    }
  ];

let PictureList = PictureListOriginal;

function DragandDrop() {
  const [board, setBoard] = useState([]);
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  const addImageToBoard = (id) => {
    if(id>id_ant){
    console.log(id);
    const pictureList = PictureList.filter((picture) => id === picture.id);
    //setBoard((board) => [...board, pictureList[0]]); //*una imagen debajo de otra
    setBoard([pictureList[0]]);  //*superpongo una imagen con otra
    id_ant=id;
    PictureList[id_ant-1] ='';
    }else{
       setTimeout(function(){
          alert('Debes colocar una imágen más grande que la colocada antes en el Tablero.');   
      }, 0);
    }
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {          
          return <Picture url={picture.url} id={picture.id}/>;  
        })}
      </div>
      <div>
        <h1>MAMUSHKA</h1>
      </div>
      <div>
          <button className="ButtonR" onClick={refreshPage}>Reiniciar el juego.</button>
      </div>
    </>
  );
}

export default DragandDrop;

