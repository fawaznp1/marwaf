import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useCart } from "../pages/Cartcontext";
import { useNavigate } from 'react-router-dom';
import LazyImage from '../LazyImage';
import './Frames.css';
 
import brace1 from '../images/frames/f11.jpg';
import brace2 from '../images/frames/frames1.PNG';
import brace3 from '../images/frames/f3.jpg';
import brace4 from '../images/frames/f4.jpg';
import brace5 from '../images/frames/f5.jpg';
import brace6 from '../images/frames/f6.jpg';
import brace7 from '../images/frames/f7.jpg';
import brace8 from '../images/frames/f8.jpg';
import brace20 from '../images/frames/f20.webp';

function Bracelet() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalCaption, setModalCaption] = useState('');

  const frameItems = [
    { id: 1, name: "Elegant hok Frame", price: 849, image: brace1 },
    { id: 2, name: "Classic Walnut Frame", price: 179, image: brace2 },
    { id: 3, name: "Modern Black Frame", price: 899, image: brace3 },
    { id: 4, name: "Rustic Pine Frame", price: 199, image: brace4 },
    { id: 5, name: "Golden Border Frame", price: 649, image: brace5 },
    { id: 6, name: "Luxury Mahogany Frame", price: 749, image: brace6 },
    { id: 7, name: "Luxury Mahogany Frame 2", price: 449, image: brace7 },
    { id: 8, name: "Luxury Mahogany Frame 3", price: 749, image: brace8 }
  ];

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBuyNow = () => {
    navigate("/form");
  };

  const handleCustomize = () => {
    navigate("/custom");
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % frameItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + frameItems.length) % frameItems.length);
  };

  // Function to handle opening the modal
  const handleOpenModal = (image, name) => {
    setModalImage(image);
    setModalCaption(name);
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Calculate positions for the circular carousel
  const calculatePosition = (index) => {
    // Calculate responsive radius based on screen size
    const getResponsiveRadius = () => {
      if (windowWidth < 576) return 120; // Mobile
      if (windowWidth < 768) return 160; // Small tablets
      if (windowWidth < 992) return 200; // Tablets
      return 250; // Desktop
    };
    
    const totalItems = frameItems.length;
    const angleDiff = (2 * Math.PI) / totalItems;
    const radius = getResponsiveRadius();
    
    // Calculate the angle for this item
    const angleOffset = ((index - currentIndex) * angleDiff) % (2 * Math.PI);
    
    // Calculate x and y coordinates for a circular position
    const x = Math.sin(angleOffset) * radius;
    const y = Math.cos(angleOffset) * radius * 0.3;
    
    // Calculate z for depth (items in front are closer, items in back are farther)
    const z = Math.cos(angleOffset) * radius * 0.5;
    
    // Calculate opacity based on position
    const opacity = 0.4 + (Math.cos(angleOffset) + 1) * 0.3;
    
    // Calculate scale factor (items in front are larger)
    const scale = 0.6 + (Math.cos(angleOffset) + 1) * 0.25;
    
    // Items in the back should have lower z-index
    const zIndex = Math.round((Math.cos(angleOffset) + 1) * 10);
    
    return { x, y, z, opacity, scale, zIndex };
  };

  // Get responsive card dimensions
  const getCardDimensions = () => {
    if (windowWidth < 576) return { width: 180, height: 240 }; // Mobile
    if (windowWidth < 768) return { width: 200, height: 260 }; // Small tablets
    if (windowWidth < 992) return { width: 220, height: 280 }; // Tablets
    return { width: 250, height: 320 }; // Desktop
  };

  const cardDimensions = getCardDimensions();
  
  // Modal caption styling based on theme
  const modalTitleStyle = {
    color: '#6366F1', // Theme color matching the gradient in the buttons
    fontWeight: '600',
    fontSize: '1.25rem'
  };
  
  // Modal custom styles
  const modalHeaderStyle = {
    borderBottom: '1px solid rgba(99, 102, 241, 0.2)', // Light border with theme color
    padding: '1rem 1.5rem'
  };
  
  const modalBodyStyle = {
    padding: '1.5rem'
  };
  
  const modalFooterStyle = {
    borderTop: '1px solid rgba(99, 102, 241, 0.2)', // Light border with theme color
    padding: '1rem 1.5rem'
  };
  
  const closeButtonStyle = {
    background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <>
    <h3 className="text-center explore-frames-title">Explore Different Frames</h3>

    <div className="frames card-grid mb-5" style={containerStyle}>
      <div className="card-container" style={carouselContainerStyle}>
        {frameItems.map((item, index) => {
          const { x, y, z, opacity, scale, zIndex } = calculatePosition(index);
          const isActive = currentIndex === index;
          
          return (
            <div
              key={item.id}
              className={`frame-card ${isActive ? 'active' : ''}`}
              style={{
                position: 'absolute',
                left: `calc(50% - ${cardDimensions.width / 2}px + ${x}px)`,
                top: `calc(50% - ${cardDimensions.height / 2}px + ${y}px)`,
                transform: `translateZ(${z}px) scale(${scale})`,
                opacity: opacity,
                transition: 'all 0.5s ease-in-out',
                zIndex: zIndex,
                filter: isActive ? 'none' : 'blur(2px)',
                cursor: 'pointer',
                width: `${cardDimensions.width}px`,
                height: `${cardDimensions.height}px`,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                boxShadow: isActive 
                  ? '0 15px 35px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.1)' 
                  : '0 8px 15px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                border: isActive ? '2px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div 
                className="image_container"
                style={{
                  height: '65%',
                  overflow: 'hidden',
                  borderRadius: '10px 10px 0 0',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal(item.image, item.name);
                }}
              >
                <LazyImage 
                  src={item.image} 
                  alt={item.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              </div>
              <div 
                className="card-content"
                style={{
                  padding: '10px',
                  height: '35%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div 
                  className="title"
                  style={{
                    fontWeight: '600',
                    fontSize: windowWidth < 768 ? '0.9rem' : '1rem',
                   
                  }}
                >
                  <span>{item.name}</span>
                </div>
                <div 
                  className="action"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div 
                    className="price"
                    style={{
                      fontWeight: 'bold',
                      /* color: '#fff', */
                      fontSize: windowWidth < 768 ? '0.9rem' : '1.1rem',
                    }}
                  >
                    <span>₹{item.price}.00</span>
                  </div>
                  <button 
                    className="cart-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow();
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: windowWidth < 768 ? '5px 10px' : '8px 12px',
                      fontSize: windowWidth < 768 ? '0.7rem' : '0.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Buy now</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Navigation arrows and pagination dots moved below the card section */}
    <div 
      className="carousel-navigation"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        marginTop: '20px', // Add space between cards and navigation
        marginBottom: '40px',
        width: '100%',
        zIndex: 50,
      }}
    >
      <button 
        onClick={prevItem} 
        style={{
          ...navButtonStyle,
          background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
        }}
        aria-label="Previous frame"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <div 
        className="pagination-dots"
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {frameItems.map((_, index) => (
          <span
            key={index}
            style={{
              width: currentIndex === index ? '12px' : '8px',
              height: currentIndex === index ? '12px' : '8px',
              borderRadius: '50%',
              background: currentIndex === index ? '#6366F1' : '#CBD5E1',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <button 
        onClick={nextItem} 
        style={{
          ...navButtonStyle,
          background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
        }}
        aria-label="Next frame"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    {/* Image Modal with Custom Styles */}
    <Modal
  show={showModal}
  onHide={handleCloseModal}
  size="lg"
  centered
  dialogClassName="custom-modal"
>
  <Modal.Header closeButton className="border-0" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
    <Modal.Title style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', textShadow: '1px 1px 5px rgba(0,0,0,0.7)' }}>
      {modalCaption}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body className="text-center p-0" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(15px)' }}>
    <img
      src={modalImage}
      alt={modalCaption}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '0 0 8px 8px'
      }}
    />
  </Modal.Body>
</Modal>

    </>
  );
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  minHeight: '550px', // Reduced height since navigation is now below
  perspective: '2400px',
  overflowX: 'hidden',
};

const carouselContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '450px',
  transformStyle: 'preserve-3d',
};

const navButtonStyle = {
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',
};

export default Bracelet;