import './Bloque.css'

const Bloque = ({onClick}) => {
    return (
        <button className='square m-1' onClick={onClick}></button>        
      );
}
 
export default Bloque;
