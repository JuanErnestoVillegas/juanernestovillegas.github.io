import './App.css';
import Tablero from './Components/Tablero/Tablero';
import ComplaintForm from './Components/CommentForm/ComplaintForm';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';

//import shortid from 'shortid';

function App() {
  return (
      <Container>
        <Row>
          <Col>
              <Tablero/>
          </Col>
        </Row>
        <Row>
          <Col>
              <ComplaintForm/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
