import './App.css';
import Tablero from './Components/Tablero/Tablero'
import CommentForm from './Components/CommentForm/ComplaintForm'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';

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
              <CommentForm/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
