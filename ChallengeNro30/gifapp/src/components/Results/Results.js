import './Results.css';
import {Card} from 'react-bootstrap';

const Results = ({results}) => {

  return (
    <>
      {results.map((result, index) =>
        <Card key={index} style={{ width: '10rem' }} className='m-2'>
          <Card.Img variant="top" className="card-image" src={result.images.original.url} />
          <Card.Body>
            <Card.Text>{result.title}</Card.Text>
          </Card.Body>
        </Card>

      )}
    </>
  );
}

export default Results;