import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useCart } from "../pages/Cartcontext";
import { useNavigate } from 'react-router-dom';
import brace1 from '../images/frames/f11.jpg';
import brace2 from '../images/frames/frames1.PNG';
import brace3 from '../images/frames/f3.jpg';
import brace4 from '../images/frames/f4.jpg';
import brace5 from '../images/frames/f5.jpg';
import brace6 from '../images/frames/f6.jpg';
import brace7 from '../images/frames/f7.jpg';
import brace8 from '../images/frames/f8.jpg';
import brace20 from '../images/frames/f20.webp';

import './Frames.css';


function Bracelet() {
  const { addToCart } = useCart();

  // Updated frameItems with unique image URLs
  const frameItems = [
    { id: 1, name: "Elegant Oak Frame", price: 849, image: brace1 },
    { id: 2, name: "Classic Walnut Frame", price: 179, image: brace2 },
    { id: 3, name: "Modern Black Frame", price: 899, image: brace3 },
    { id: 4, name: "Rustic Pine Frame", price: 199, image: brace4 },
    { id: 5, name: "Golden Border Frame", price: 649, image: brace5 },
    { id: 6, name: "Luxury Mahogany Frame", price: 749, image: brace6 },
    { id: 7, name: "Luxury Mahogany Frame", price: 449, image: brace7 },
    { id: 8, name: "Luxury Mahogany Frame", price: 749, image: brace8 }
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log("Item added:", item); // Logs the item when it's added
  };

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/form"); // Navigate to the EnhancedForm component
  };

  const handlecustomize =()=>{
    navigate("/custom");
  }

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
    src={brace20} 
    alt="Sample Image"
    style={{ objectFit: 'cover', height: '200px', width: '100%' }}
  />
  <Card.Body>
    
    <Card.Text className="text-white">You can customize to any size as your convenience.</Card.Text>
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
