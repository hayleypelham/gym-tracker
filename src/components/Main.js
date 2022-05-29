import '../styles/Main.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Main = () => {
  return (
    <Container className="main">
      <Row>
        <Col>
          <h2 className="mt-5">Create workout</h2>
          <Card className="mt-4" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Create a new workout session</Card.Title>
              <Card.Text>
                Add sets and reps choosing from a list of exercises
              </Card.Text>
              <Button variant="primary"> + </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h2 className="mt-5">Previous workouts</h2>
          <Card className="mt-4" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Workout completed 29/05/2022</Card.Title>
              <Card.Text>
                Lat raises 3) 10, 10, 10 | Bench press 25) 8, 8, 8 ...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-2" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Workout completed 27/05/2022</Card.Title>
              <Card.Text>
                Lat raises 3) 8, 8, 8 | Bench press 20) 12, 12, 12 ...
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-2" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Workout completed 25/05/2022</Card.Title>
              <Card.Text>
                Lat raises 3) 6, 7, 8 | Bench press 20) 8, 8, 10 ...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
