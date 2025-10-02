import React, { useState } from "react";
// import "./Lightbox.css";

function Images({ handlePrev, previous,handleNext,next, thumbnails, thumbnail, setThumbnail, image, handleImage }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="cont-div">
      {/* Main Image */}
      <div className="nav-btns">
        <img src={previous} onClick={()=>handlePrev()}/>
        <img src={next} onClick={()=>handleNext()}/>
      </div>
      <img
        id="thumbnail"
        src={thumbnail}
        className="img-disp"
        alt="main"
        onClick={() => {
          if (window.innerWidth > 768) {
            setShowLightbox(true);
          }
        }} // open lightbox when clicked
      />

      {/* Thumbnails */}
      {<div className="imgs-div">
        {thumbnails.map((img, index) => (
          <img
            onClick={(e) => {
              if (window.innerWidth > 768)
              {handleImage(e);
              setThumbnail(img);}
            }}
            className="imgs"
            key={index}
            src={img}
          />
        ))}
      </div>}

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
