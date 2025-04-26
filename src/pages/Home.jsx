import React from 'react';
import { Link } from 'react-router-dom';
import marwaimage1 from '../images/logo2.jpg';
import mehandi1 from '../images/henna/h1.jpg';
import './Home.css';
import './Lettera.css'
import framesimage from '../images/frames/f1.jpg'
import giftimage from '../images/gifts/g1.jpg'
import brimage from '../images/bracelets/b1.jpg'
import LazyImage from '../LazyImage';
import PhotoSlider from '../components/PhotoSlider';
import CustomerReviews from '../components/Review';
import ScrollToTopButton from '../components/TopButton';
import Categories from '../components/Categories';


function Home() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center mt-3">
            <img
              src={marwaimage1}
              alt="marwaimage"
              className="homeimage img-fluid  "
              
            />
          </div>
          <div className="col-md-6 d-flex align-items-center mt-2">
            <div> 
              <div className='letteranim' >
{/*               <h2>Welcome to </h2>
 */}                <h1 class="cssanimation open sequence">marwaarts.in</h1>
              </div>
              <p className='mt-3 text-style'>
  Your one-stop destination for 
  <span className='highlight-gifts'> gifts</span> ,   
  <span className='highlight-hampers'> hampers</span> , 
  <span className='highlight-frames'> frames</span> and 
  <span className='highlight-calligraphy'> Calligraphy </span>   
   offering affordable prices and the best quality to make every occasion special.
</p>




            </div>
          </div>
        </div> 

      
        <section>
          <Categories />
        </section>

        <section>
        <h2 className="showcase-heading text-center mt-4">
  Inspired by You, Created by Me
</h2>

          <PhotoSlider />
        </section>

    

        <section>
          <CustomerReviews />
        </section>


    <section>
    <div className="container my-5">
  <div className="row g-4 align-items-center">
    <div className="col-md-6">
      <h3 className="mb-3">🎥 Watch Our Videos</h3>
      <div className="ratio ratio-16x9 shadow rounded-4">
        <iframe
          src="https://www.youtube.com/embed/KmbZApRs4X0?si=YGgnBuhwnh7AGYi6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="col-md-6" id='contact'>
      <h3 className="mb-3">📍 Our Location</h3>
      <div className="ratio ratio-16x9 shadow rounded-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6304404718976!2d75.56957440958763!3d11.930786788248254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba430fdc87b4417%3A0x1b761c28fd82da5e!2sMattannur%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1731107874677!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</div>

</section>

      </div>
    </>
  );
}

export default Home;
