import './Bloque.css'

const Bloque = ({onClick}) => {
    return (
        <button className='square m-1' style={{ height: '20vh', width: '20vh' }} size="lg" onClick={onClick}></button>        
      );
}
 
export default Bloque;
