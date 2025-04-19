import React, { useState } from 'react';

const LazyImage = ({ src, alt = '', className = '', style = {}, fallback }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallback) setImgSrc(fallback);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
      className={className}
      style={style}
    />
  );
};

export default LazyImage;
