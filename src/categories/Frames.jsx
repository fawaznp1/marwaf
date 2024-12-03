import React from "react";
import frames1 from "../images/IMG_0602.jpg";
import { useCart } from "../pages/Cartcontext";
import "./Frames.css";
import { useNavigate } from "react-router-dom";

const Frames = () => {
  const { addToCart } = useCart(); 

  const frameItems = [
    { id: 1, name: "Elegant Oak Frame", price: 500 },
    { id: 2, name: "Classic Walnut Frame", price: 650 },
    { id: 3, name: "Modern Black Frame", price: 700 },
    { id: 4, name: "Rustic Pine Frame", price: 850 },
    { id: 5, name: "Golden Border Frame", price: 1200 },
    { id: 6, name: "Golden Border Frame", price: 1200 },
    { id: 7, name: "Luxury Mahogany Frame", price: 150 },
    { id: 8, name: "Luxury Mahogany Frame", price: 150 }
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
            <img src={frames1} alt={item.name} className="image" />
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
/*               onClick={() => handleAddToCart(item)} 
 */              onClick={handleBuyNow}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Buy now</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Frames;
