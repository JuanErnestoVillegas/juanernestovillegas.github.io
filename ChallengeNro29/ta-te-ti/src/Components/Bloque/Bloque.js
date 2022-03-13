import './Bloque.css'
import Proptypes from 'prop-types'

const Bloque = ({player, onClick}) => {
  return ( 
    <button className="square m-2" style={{ height: '100px', width: '100px' }} size="lg" onClick={onClick}>{player}</button>
    // <button className="square m-1" style={{ height: '20vh', width: '20vh' }} size="lg" onClick={onClick}>{player}</button>
  );
}
 
export default Bloque;

//DOCUMENTACIÓN

Bloque.propTypes = {
  player: Proptypes.string.isRequired
}