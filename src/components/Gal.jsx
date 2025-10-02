import React, { useState, useEffect } from "react";
import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

function Gal() {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const images = [img1, img2, img3, img4];

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="cont-div">
      {/* Main Image */}
      <img 
        src={images[currentImage]} 
        className="img-disp cursor-pointer" 
        onClick={() => setLightboxOpen(true)}
        alt={`Product view ${currentImage + 1}`}
      />
      
      {/* Thumbnails */}
      <div className="imgs-div">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`thumbnail-container ${currentImage === index ? 'thumbnail-active' : ''}`}
          >
            <img
              onClick={() => handleThumbnailClick(index)}
              src={img}
              className={`imgs ${currentImage === index ? 'imgs-active' : ''}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="lightbox-content relative max-w-4xl w-full mx-4">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-orange-500 transition-colors z-10"
              onClick={() => setLightboxOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Lightbox Image */}
            <div className="relative">
              <img 
                src={images[currentImage]} 
                className="max-w-full max-h-[80vh] rounded-lg mx-auto object-contain"
                alt={`Product view ${currentImage + 1}`}
              />
              
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                onClick={prevImage}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                onClick={nextImage}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Lightbox Thumbnails */}
            <div className="flex justify-center gap-4 mt-6">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    currentImage === index ? 'border-orange-500' : 'border-transparent'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={img}
                    className={`w-full h-full object-cover transition-opacity ${
                      currentImage === index ? 'opacity-60' : 'hover:opacity-80'
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-white text-center mt-4 text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gal;