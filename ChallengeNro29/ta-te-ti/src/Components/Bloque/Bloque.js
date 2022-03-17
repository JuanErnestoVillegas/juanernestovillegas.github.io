import './Bloque.css'
import Proptypes from 'prop-types'

const Bloque = ({player, onClick}) => {
  return ( 
    <button className="square m-2" onClick={onClick}>{player}</button>  
  );
}
 
export default Bloque;

//DOCUMENTACIÓN

Bloque.propTypes = {
  player: Proptypes.string.isRequired
}