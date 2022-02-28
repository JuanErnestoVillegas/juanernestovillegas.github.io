import { useState, useEffect } from 'react';
import axiosClient from './../config/axiosConfig';
import { api_key } from './../constants/constants';
import styled from 'styled-components';
import Results from './../components/Results/Results';
import SearchBar from './../components/SearchBar/SearchBar';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import useGet from './../hooks/useGet';

const UpSearch = styled(Row)`
background-color: lightgreen;
height: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const MainPage = () => {
    const [gifs, setGifs, getGifs] = useGet(`/trending?api_key=${api_key}&limit=12`);
    const [search, setSearch] = useState('');
  
    const doSearch = async () =>{
        try {
            const response = await axiosClient.get(`/search?api_key=${api_key}&q=${search}&limit=12`);
            setGifs(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleKeyUp=(e)=>{
        setSearch(e.target.value);
    }
  
     useEffect(()=> {
      if(search.length!==0){
        doSearch();
      } else{
        getGifs();
      }
    }, [search])
    return (  
        <Container fluid>
        <Row>
         <h1>GIF APP</h1>
          <UpSearch xs={2}>           
            <SearchBar search={search} handleKeyUp={handleKeyUp}/>
          </UpSearch>
          <Col xs={10} className='d-flex flex-wrap'>
              <Results results={gifs}/>
          </Col>
        </Row>
      </Container>
    );
}
 
export default MainPage;