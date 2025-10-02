import React, { useState } from "react";
import cart from "../assets/icon-cart.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

function Texts({ counter, setCounter, handleAdd }) {
  const handInc = () => {
    setCounter(counter + 1);
  };
  const handDec = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };
  return (
    <div className="text-cont">
      <h5>SNEAKER COMPANY</h5>
      <h1>
        Fall Limited Edition
        <br />
        Sneakers
      </h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="up-price-h">
        <div className="price-h">
          <h2>$125.00</h2>
          <p>50%</p>
        </div>
        <p
          style={{
            color: "hsl(219, 9%, 45%)",
            textDecoration: "line-through",
            padding: "2px 0 10px 0",
          }}
        >
          $250.00
        </p>
      </div>
      <div className="btns-section">
        <span className="btns">
          <img src={minus} className="step" onClick={handDec} />
          <span>{counter}</span>
          <img src={plus} className="step" onClick={handInc} />
        </span>
        <button type="button" onClick={handleAdd}>
          <img src={cart} className="btn-cart-img" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Texts;
