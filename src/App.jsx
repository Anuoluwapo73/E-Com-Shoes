import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Images from "./components/Images";
import Texts from "./components/Texts";
import img1 from "./assets/image-product-1.jpg";
import img2 from "./assets/image-product-2.jpg";
import img3 from "./assets/image-product-3.jpg";
import img4 from "./assets/image-product-4.jpg";
import next from "./assets/icon-next.svg";
import previous from "./assets/icon-previous.svg";
import { use } from "react";

const App = () => {
  //For Texts
  const [counter, setCounter] = useState(0);

  //For Images
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnails = [img1, img2, img3, img4];
  const [image, setImage] = useState(thumbnails[0]);
  const [thumbnail, setThumbnail] = useState(image);
  const handleImage = (e) => {
    setImage(e.target.src);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    setCurrentIndex(nextIndex);
    setThumbnail(thumbnails[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    setCurrentIndex(prevIndex);
    setThumbnail(thumbnails[prevIndex]);
  };

  //For Navbar

  const [cartItems, setCartItems] = useState([]);
  const handleAdd = () => {
    if (counter === 0) return;
    const newItem = {
      img: thumbnail,
      number: counter,
    };

    setCartItems((prev) => {
      const updated = [...prev, newItem];

      return updated;
    });
    setCounter(0);
  };

  function deleteCartItem(index) {
    const updatedCartItems = cartItems.filter((_, ind) => ind !== index);
    setCartItems(updatedCartItems);
  }

  //For Cart
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="container">
      <Navbar
        image={image}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        handleAdd={handleAdd}
        deleteCartItem={deleteCartItem}
      />
      <div className="sub-container">
        <Images
          handleNext={handleNext}
          handlePrev={handlePrev}
          next={next}
          previous={previous}
          image={image}
          handleImage={handleImage}
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          thumbnails={thumbnails}
        />
        <Texts
          handleAdd={handleAdd}
          image={image}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
    </div>
  );
};

export default App;
