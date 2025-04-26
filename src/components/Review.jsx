import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

import './Review.css'; 

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: 'John Doe', review: 'Excellent product, highly recommend!', stars: 5, photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww' },
    { id: 2, name: 'Jane Smith', review: 'Good quality, worth the price.', stars: 4, photo: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" },
    { id: 3, name: 'Alice Green', review: 'Amazing experience. Will buy again!', stars: 5, photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Mark Lee', review: 'Fast delivery and great customer service.', stars: 4, photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww' },
    { id: 5, name: 'Lily Brown', review: 'Very satisfied with my purchase!', stars: 5, photo: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D' },
    { id: 6, name: 'Tom White', review: 'Good value for money, no complaints.', stars: 4, photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D' },
    { id: 7, name: 'Sophia Clark', review: 'Exceeded expectations. Fantastic product!', stars: 5, photo: ' https://images.unsplash.com/photo-1690444963408-9573a17a8058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D' },
    { id: 8, name:  'Chris Davis', review: 'Great quality, will buy more.', stars: 4, photo: 'https://plus.unsplash.com/premium_photo-1703382945684-60321c25f248?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0JTIweW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D' },
    { id: 9, name: 'Jessica Wilson', review: 'Product looks exactly as described!', stars: 5, photo: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D' },
    { id: 10, name: 'David Harris', review: 'I’m really happy with my purchase!', stars: 4, photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D' },
  ];

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="reviews-section">
     <h2 className="reviews-title text-center mt-5">
  Customer Reviews
</h2>

      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-photo">
              <img src={review.photo} alt={review.name} className="circular-photo" />
            </div>
            <div className="review-content">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-text">{review.review}</p>
              <div className="review-stars">
                {Array.from({ length: review.stars }, (_, index) => (
                  <FaStar key={index} className="star" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
