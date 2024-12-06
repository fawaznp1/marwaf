import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useCart } from "../pages/Cartcontext";
import { useNavigate } from 'react-router-dom';
import brace1 from '../images/bracelets/b1.jpg';
import brace2 from '../images/bracelets/b2.jpg';
import brace3 from '../images/bracelets/b3.jpg';
import brace4 from '../images/bracelets/b4.jpg';
import brace5 from '../images/bracelets/b5.jpg';
import brace6 from '../images/bracelets/b6.jpg';
import brace7 from '../images/bracelets/b7.jpg';
import brace8 from '../images/bracelets/b9.jpg';
import brace20 from '../images/bracelets/b20.jpg';



function Bracelet() {
  const { addToCart } = useCart();

  // Updated frameItems with unique image URLs
  const frameItems = [
    { id: 1, name: "Elegant Charm Bracelet (4 Q)", price: 230, image: brace1 },
    { id: 2, name: "Timeless Beauty Bangle", price: 60, image: brace2 },
    { id: 3, name: "Serenity Stone Bracelet (1 Q)", price: 40, image: brace3 },
    { id: 4, name: "Celestial Sparkle Bracelet", price: 60, image: brace4 },
    { id: 5, name: "Graceful Love Bangle (1 Q)", price: 70, image: brace5 },
    { id: 6, name: "Mystic Aura Bracelet", price: 80, image: brace6 },
    { id: 7, name: "Divine Embrace Bangle", price: 80, image: brace7 },
    { id: 8, name: "Midnight Glow Bangle", price: 20, image: brace8 }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log("Item added:", item); // Logs the item when it's added
  };

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/form"); // Navigate to the EnhancedForm component
  };

  return (
    <div className="frames card-grid mb-3">
      {frameItems.map((item) => (
        <div className="card" key={item.id}>
          <div className="image_container">
            {/* Dynamically set the image for each card */}
            <img src={item.image} alt={item.name} className="image" loading="lazy" />
          </div>
          <div className="title">
            <span>{item.name}</span>
          </div>
          <div className="action">
            <div className="price">
              <span>₹{item.price}.00</span>
            </div>
            <button
              className="cart-button"
              onClick={handleBuyNow}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Buy now</span>
            </button>
          </div>
        </div>
      ))}

<Card className="text-center">
  <Card.Img 
    variant="top" 
    src={brace20} 
    alt="Sample Image"
    style={{ objectFit: 'cover', height: '200px', width: '100%' }}
  />
  <Card.Body>
    
    <Card.Text className="text-white">Customize any style/stone/color as you like..!</Card.Text>
    <Button 
      variant="primary" 
      onClick={() => navigate("/custom")}
      className="mt-3"
    >
      Customize now
    </Button>
  </Card.Body>
  
</Card>
    </div>
  );
}

export default Bracelet;
