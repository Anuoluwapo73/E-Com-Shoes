import React, { useState } from "react";
// import "./Lightbox.css";

function Images({ thumbnails, thumbnail, setThumbnail, image, handleImage }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="cont-div">
      {/* Main Image */}
      <img
        id="thumbnail"
        src={image}
        className="img-disp"
        alt="main"
        onClick={() => setShowLightbox(true)} // open lightbox when clicked
      />

      {/* Thumbnails */}
      <div className="imgs-div">
        {thumbnails.map((img, index) => (
          <img
            onClick={(e) => {
              handleImage(e);
              setThumbnail(img);
            }}
            className="imgs"
            key={index}
            src={img}
          />
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="lightbox" onClick={() => setShowLightbox(false)}>
          <img src={thumbnail} alt="big" className="lightbox-img" />
          <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {thumbnails.map((thumb, index) => (
              <img
                onClick={() => setThumbnail(thumb)}
                className="lightbox-thumb"
                key={index}
                src={thumb}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
