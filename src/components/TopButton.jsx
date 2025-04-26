import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  const checkScroll = () => {
    if (window.scrollY > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll); 
    return () => window.removeEventListener('scroll', checkScroll); 
  }, []);

  return (
    visible && (
      <div
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        style={styles.scrollButton}
        title="Go to top"  
      >
        <FaArrowUp style={styles.arrowIcon} />
      </div>
    )
  );
}

// Add the styles for the button
const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff', // You can change this color
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: '24px',
  },
};

export default ScrollToTopButton;
