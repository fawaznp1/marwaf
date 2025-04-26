import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import framesimage from '../images/frames/f1.jpg'
import giftimage from '../images/gifts/g1.jpg'
import brimage from '../images/bracelets/b1.jpg'
import LazyImage from '../LazyImage';
import mehandi1 from '../images/henna/h1.jpg';
import './Categories.css'

const cardData = [
  {
    title: "Frames",
    description:
      "Discover a wide range of stylish frames perfect for showcasing your cherished moments. Affordable, high-quality designs to suit every home and occasion.",
    link: "/frames",
    image: framesimage,
    alt: "frames image",
  },
  {
    title: "Gift Hamper",
    description:
      "Discover our thoughtfully curated gift hampers at Marwa Arts, ideal for every occasion. Packed with premium products to delight your loved ones.",
    link: "/gifts",
    image: giftimage,
    alt: "gift image",
  },
  {
    title: "Bracelets",
    description:
      "Explore our collection of stylish bracelets at Marwa Arts, designed to add a touch of elegance to any outfit. Perfect for gifting or treating yourself!",
    link: "/bracelet",
    image: brimage,
    alt: "bracelet image",
  },
  {
    title: "Henna Design",
    description:
      "Explore beautiful, intricate henna designs at Marwa Arts, perfect for every celebration. Handcrafted with precision to add elegance to your special moments.",
    link: "/henna",
    image: mehandi1,
    alt: "mehandi image",
  },
];

export default function Categories() {
  return (
    <section className="mt-5 container">
      <h1 
  className="text-center mb-5" 
  style={{
    fontFamily: "'Playfair Display', serif",
    fontWeight: "bold",
    fontSize: "2.5rem",
    letterSpacing: "1px",
    
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  }}
> 
  Categories
</h1>

      <div className="row">
        {cardData.map((item, index) => (
          <div key={index} className="col-md-6 mb-4 d-flex justify-content-center">
            <Link to={item.link} className="text-decoration-none w-100">
              <motion.div
                className="card h-100"
                style={{ width: "100%", borderRadius: "20px", overflow: "hidden" }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LazyImage
                  src={item.image}
                  className="card-img-top"
                  alt={item.alt}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="text-center mt-3">
                    <button className="btn btn-dark">
                      Explore Now <i className="fa-solid fa-square-arrow-up-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
