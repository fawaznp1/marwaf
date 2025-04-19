import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any arrow icon you prefer

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  const checkScroll = () => {
    if (window.scrollY > 300) { // Change this value as needed
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', checkScroll); // Clean up on unmount
  }, []);

  return (
    visible && (
      <div
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        style={styles.scrollButton}
        title="Go to top"  // Tooltip text
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
