import './Bloque.css';
import Proptypes from 'prop-types';

const Bloque = ({onClick}) => {
    return (
        <button className='square m-1' style={{ height: '20vh', width: '20vh' }} size="lg" onClick={onClick}></button>        
      );
}
 
export default Bloque;

Bloque.propTypes = {
  player: Proptypes.string.isRequired
}