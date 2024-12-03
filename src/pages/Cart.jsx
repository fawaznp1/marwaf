import React, { useEffect ,useState } from "react";
import { useCart } from "../pages/Cartcontext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();  // Using the cart from context directly

  // Debugging: log cart content every time it updates
  useEffect(() => {
    console.log("Cart content:", cart); // Logs cart data when the component mounts or updates
  }, [cart]); // This will log every time the cart is updated

  return (
    <>
      <div className="cart-summary">
        <h2>Cart Items</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
