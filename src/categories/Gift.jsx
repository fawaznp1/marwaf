import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useCart } from "../pages/Cartcontext";
import { useNavigate } from 'react-router-dom';
import brace1 from '../images/gifts/g1.jpg';
import brace2 from '../images/gifts/g2.jpg';
import brace3 from '../images/gifts/g3.jpg';
import brace4 from '../images/gifts/g4.jpg';
import brace5 from '../images/gifts/g5.jpg';
import brace6 from '../images/gifts/g6.jpg';
import brace7 from '../images/gifts/g13.jpg';
import brace8 from '../images/gifts/g8.webp';
import brace9 from '../images/gifts/g9.jpg';
import brace10 from '../images/gifts/g10.webp';
import brace11 from '../images/gifts/g11.jpg';
import brace12 from '../images/gifts/g12.webp';


import './Frames.css';


function Bracelet() {
  const { addToCart } = useCart();

  // Updated frameItems with unique image URLs
  const frameItems = [
    { id: 1, name: "The Perfect Present Box", price: 749, image: brace1 },
    { id: 2, name: "Cherished Moments Hamper", price: 799, image: brace2 },
    { id: 3, name: "Golden Wishes Gift Set", price: 869, image: brace3 },
    { id: 4, name: "Divine Serenity Hamper", price: 349, image: brace4 },
    { id: 5, name: "The Luxury Treat Box", price: 1790, image: brace5 },
    { id: 6, name: "Sparkling Joy Hamper", price: 549, image: brace6 },
    { id: 7, name: "The Celebration Box", price: 1849, image: brace7 },
    { id: 8, name: "Pure Delight Basket", price: 1899, image: brace9 },
    { id: 9, name: "The Grand Gesture Gift", price: 1990, image: brace10 },
    { id: 10, name: "Gourmet Delight Hamper", price: 849, image: brace11 },
    { id: 11, name: "Radiance Gift Set", price: 979, image: brace12 },
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
      <div>
      <Card className="text-center">
  <Card.Img 
    variant="top" 
    src={brace8} 
    alt="Sample Image"
    style={{ objectFit: 'cover', height: '200px', width: '100%' }}
  />
  <Card.Body>
    
    <Card.Text className="text-white">Gift your loved ones moments of joy they'll treasure forever</Card.Text>
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

    </div>
  );
}

export default Bracelet;
