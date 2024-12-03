import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import hennaimage1 from '../images/mehandi2.jpg';

function Henna() {
  // Sample data with unique IDs
  const hennaItems = [
    { id: 101, text: 'Beautiful Henna Design 1', price: 500 },
    { id: 102, text: 'Elegant Henna Design 2', price: 750 },
    { id: 103, text: 'Traditional Henna Design 3', price: 600 },
    { id: 104, text: 'Modern Henna Design 4', price: 800 },
    { id: 105, text: 'Unique Henna Design 5', price: 650 },
    { id: 106, text: 'Festive Henna Design 6', price: 700 },
  ];

  return (
    <Container className="mt-5">
      <div>
  <h1 className='text-center'>Our Henna Features</h1>
  <p>Types : <strong>black</strong> ,<strong>red</strong> and <strong>white</strong></p>
  <p>Patterns :<strong> floral </strong>, <strong>elegant</strong> , <strong> arabic</strong> & <strong><em>customized</em> </strong></p>
  <p>
    For your convenience, we bring the henna experience directly to  <strong>your home</strong>, ensuring comfort while crafting a design tailored just for you.
  </p>
</div>

      <Row className="g-4 p-3">
        {hennaItems.map((item) => (
          <Col lg={6} md={12} key={item.id}>
            <Card>
              <Card.Img
                variant="top"
                src={hennaimage1}
                style={{ width: '100%', height: '300px', objectFit: 'scale-down' }}
              />
              <Card.Body>
                <Card.Title> #{item.id} {item.text}</Card.Title> {/* Display unique number */}
                <Card.Text></Card.Text>
                <div className="d-flex justify-content-center">
               <Button
    variant="primary"
    className="px-4 py-2 rounded-pill shadow-sm"
    style={{
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: '#007bff', // Customize primary color
      border: 'none',
    }}
    href={`tel:${9947007696}`}
  >
    Book Now <i class="fa-solid fa-phone"></i>
  </Button>
</div>
            
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Henna;
