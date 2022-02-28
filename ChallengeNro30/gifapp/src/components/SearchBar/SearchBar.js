import './SearchBar.css';


const SearchBar = ({search, handleKeyUp}) => {


    return (
        <>
        <form>
            <input type="text" name="search" onKeyUp={handleKeyUp} className="w-100"/>
        </form>
        <br />
        <p>{search.length>3?search.length<7?`Buscando ${search}`:`Buscando ${search.slice(0,10)}...`:''}</p>
        </>
    );
}
 
export default SearchBar;