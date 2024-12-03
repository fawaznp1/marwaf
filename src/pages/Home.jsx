import React from 'react';
import { Link } from 'react-router-dom';
import marwaimage1 from '../images/logo3.PNG';
import mehandi1 from '../images/mehandi2.jpg';
import './Home.css';
import './Lettera.css'
import framesimage from '../images/frames1.PNG'
import giftimage from '../images/gift1.jpg'
import brimage from '../images/br1.jpg'


function Home() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {/* First Column for Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center mt-3">
            <img
              src={marwaimage1}
              alt="homeimage"
              className="img-fluid"
              style={{borderRadius:'15px'}}
            />
          </div>
          {/* Second Column for Text */}
          <div className="col-md-6 d-flex align-items-center mt-2">
            <div>
              <div className='letteranim' >
{/*               <h2>Welcome to </h2>
 */}                <h1 class="cssanimation open sequence">marwaarts.in</h1>
              </div>
              <p className='mt-3' style={{fontSize:'1.6rem'}}>
               Your one-stop destination for <span style={{color:'#d65c5c'}}>gifts</span> ,   <span style={{color:'#6443db'}}>hampers</span> and <span style={{color:'#09c338'}}>frames</span>   offering affordable prices and the best quality to make every occasion special.              
               </p>



            </div>
          </div>
        </div>

        <section className="mt-5">
          <div className="row justify-content-center">
            <h1 className='text-center mb-5' >Categories</h1>
            {/* First Row of Cards */}
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <Link to="/frames" className="text-decoration-none">
                <div className="card" style={{ width: '100%' }}>
                  <img src={framesimage} className="card-img-top" alt="Card image"  />
                  <div className="card-body">
                    <h5 className="card-title">Frames</h5>
                    <p className="card-text">Discover a wide range of stylish frames perfect for showcasing your cherished moments. Affordable, high-quality designs to suit every home and occasion.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <Link to="/gifts" className="text-decoration-none">
                <div className="card" style={{ width: '100%' }}>
                  <img src={giftimage} className="card-img-top" alt="Card image" />
                  <div className="card-body">
                    <h5 className="card-title">Gift Hamper</h5>
                    <p className="card-text">Discover our thoughtfully curated gift hampers at Marwa Arts, ideal for every occasion. Packed with premium products to delight your loved ones.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* Second Row of Cards */}
          <div className="row justify-content-center">
           
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <Link to="/bracelet" className="text-decoration-none">
                <div className="card" style={{ width: '100%' }}>
                  <img src={brimage} className="card-img-top" alt="Card image" />
                  <div className="card-body">
                    <h5 className="card-title">Bracelets</h5>
                    <p className="card-text">Explore our collection of stylish bracelets at Marwa Arts, designed to add a touch of elegance to any outfit. Perfect for gifting or treating yourself!</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mb-4 d-flex justify-content-center">
              <Link to="/henna" className="text-decoration-none">
                <div className="card" style={{ width: '100%' }}>
                  <img src={mehandi1} className="card-img-top" alt="Card image" />
                  <div className="card-body">
                    <h5 className="card-title">Henna Design</h5>
                    <p className="card-text">Explore beautiful, intricate henna designs at Marwa Arts, perfect for every celebration. Handcrafted with precision to add elegance to your special moments.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

    <section>
  <div className="container my-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        <h3>Watch Our Videos</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/KmbZApRs4X0?si=YGgnBuhwnh7AGYi6"
            title="YouTube video player"
            frameborder="0"
            width='100%'
            height='315'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <h3>Our Location</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6304404718976!2d75.56957440958763!3d11.930786788248254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba430fdc87b4417%3A0x1b761c28fd82da5e!2sMattannur%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1731107874677!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
