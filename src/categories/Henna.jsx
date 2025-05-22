import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import hennaimage1 from '../images/henna/h1.webp';
import hennaimage2 from '../images/henna/h2.webp';
import hennaimage3 from '../images/henna/h3.webp';
import hennaimage4 from '../images/henna/h4.webp';
import hennaimage5 from '../images/henna/h5.webp';
import hennaimage6 from '../images/henna/h6.webp';
import hennaimage7 from '../images/henna/h8.webp';
import LazyImage from '../LazyImage';
import './Henna.css'
import SkeletonCard from '../components/SkeletonCard';

function Henna() {
  const hennaItems = [
    { id: 101, text: 'Beautiful Henna Design 1', price: 500, image: hennaimage1 },
    { id: 102, text: 'Elegant Henna Design 2', price: 750, image: hennaimage7 },
    { id: 103, text: 'Traditional Henna Design 3', price: 600, image: hennaimage3 },
    { id: 104, text: 'Modern Henna Design 4', price: 800, image: hennaimage4 },
    { id: 105, text: 'Unique Henna Design 5', price: 650, image: hennaimage5 },
    { id: 106, text: 'Festive Henna Design 6', price: 700, image: hennaimage6 },
    { id: 107, text: 'Festive Henna Design 7', price: 700, image: hennaimage2 },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalCaption, setModalCaption] = useState('');

  const handleImageClick = (image, caption) => {
    setModalImage(image);
    setModalCaption(caption);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="my-5">
     <div className="text-center mb-4 enhanced-section">
  <h1 className="fw-bold heading">Our Henna Features</h1>
  <p className="mb-2 subheading">Types: <strong>Organic</strong>, <strong>BigB</strong>, <strong>Black</strong>, & <strong>many more</strong></p>
  <p className="mb-2 subheading">Patterns: <strong>floral</strong>, <strong>elegant</strong>, <strong>arabic</strong>, & <strong><em>customized</em></strong></p>
  <p className="description">We bring the henna experience directly to <strong>your home</strong> — comfort meets creativity just for you.</p>
</div>


      <Row className="g-4">
        {hennaItems.map((item) => (
          <Col lg={6} md={12} key={item.id}>
            <Card 
              className="glass-card shadow-sm h-100 border-0 hover-shadow transition"
            style={{borderRadius:"10px"}}>
              <img
  src={item.image}
  alt={item.text}
  onClick={() => handleImageClick(item.image, item.text)}
  style={{ width: '100%', height: '280px', objectFit: 'cover', cursor: 'pointer' }}
/>

              <Card.Body className="text-center p-3">
                <Card.Title className="fs-6 mb-2">
                  #{item.id} {item.text}
                </Card.Title>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="px-4 py-2 rounded-pill shadow-sm"
                    style={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                    href={`tel:${9947007696}`}
                  >
                    Book Now <i className="fa-solid fa-phone ms-2"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered dialogClassName="modal-90w">
        <Modal.Body style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
          <img
            src={modalImage}
            alt={modalCaption}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '15px' }}
          />
          <h5 className="mt-3">{modalCaption}</h5>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Henna;
