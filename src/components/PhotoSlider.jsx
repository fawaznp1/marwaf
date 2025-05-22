import React, { useRef, useEffect } from "react";
import './PhotoSlider.css';
import photo1 from '../images/frames/f1.webp';
import photo2 from '../images/frames/f2.webp';
import photo3 from '../images/frames/f3.webp';
import photo4 from '../images/frames/f4.webp';
import photo5 from '../images/frames/f5.webp';
import photo6 from '../images/frames/f6.webp';
import photo7 from '../images/frames/f7.webp';
import photo8 from '../images/frames/f8.webp';
import photo9 from '../images/frames/f9.webp';
import photo10 from '../images/frames/f10.webp';
import photo11 from '../images/frames/f11.webp';
import photo12 from '../images/frames/f12.webp';
import photo14 from '../images/bracelets/b1.webp';
import photo15 from '../images/bracelets/b2.webp';
import photo16 from '../images/bracelets/b3.webp';
import photo17 from '../images/bracelets/b4.webp';
import photo18 from '../images/bracelets/b5.webp';
import photo19 from '../images/bracelets/b6.webp';
import photo20 from '../images/bracelets/b7.webp';
import photo22 from '../images/bracelets/b9.webp';
import photo23 from '../images/bracelets/b10.webp';
import photo24 from '../images/gifts/g1.webp';
import photo25 from '../images/gifts/g2.webp';
import photo26 from '../images/gifts/g3.webp';
import photo27 from '../images/gifts/g4.webp';
import photo28 from '../images/gifts/g5.webp';
import photo29 from '../images/gifts/g6.webp';
import photo30 from '../images/gifts/g7.webp';
import photo32 from '../images/gifts/g9.webp';
import photo34 from '../images/henna/h1.webp';
import photo35 from '../images/henna/h2.webp';
import photo36 from '../images/henna/h3.webp';
import photo37 from '../images/henna/h4.webp';
import photo38 from '../images/henna/h5.webp';
import photo39 from '../images/henna/h6.webp';
import photo41 from '../images/henna/h8.webp';
import photo44 from '../images/henna/h11.webp';
import photo45 from '../images/henna/h12.webp';

const originalImages = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,photo10
  , photo22, photo23, photo24, photo25, photo26, photo27, photo28, photo29,photo20,
  photo11, photo12, photo14, photo15, photo16, photo17, photo18, photo19,photo11,
   photo32,  photo34, photo35, photo36, photo37, photo38, photo39,photo30,
  photo41, photo44, photo45
];

const QueueSlider = () => {
  const containerRef = useRef(null);
  const itemWidth = 310; // image width (300px) + gap (10px)

  const images = [...originalImages, originalImages[0]]; // add fake first image at the end

  const scrollNext = () => {
    if (!containerRef.current) return;

    const maxScroll = (images.length - 1) * itemWidth;
    const currentScroll = containerRef.current.scrollLeft;

    containerRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });

    // Reset instantly if we reach the cloned first image
    setTimeout(() => {
      if (containerRef.current.scrollLeft >= maxScroll) {
        containerRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
    }, 400); // wait until animation finishes
  };

  const scrollPrev = () => {
    if (!containerRef.current) return;

    // If at beginning, jump to last image instantly
    if (containerRef.current.scrollLeft <= 200) {
      containerRef.current.scrollTo({ left: (images.length - 1) * itemWidth, behavior: "auto" });
      setTimeout(() => {
        containerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }, 50);
    } else {
      containerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <>
      <div className="scroll-container" id="gallery" ref={containerRef}>
        {images.map((src, index) => (
          <img key={index} src={src} className="scroll-item" alt={`img-${index}`} loading='lazy' />
        ))}
      </div>
{/* 
      <div className="arrow-row">
  <button onClick={scrollPrev}>
  <CircleArrowLeft size={40}/>
  </button>
  <button onClick={scrollNext}>
    <CircleArrowRight size={40}/>
    
  </button>
</div> */}

    </>
  );
};

export default QueueSlider;
