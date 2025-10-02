import React, { useState } from "react";
import sneakers from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import del from "../assets/icon-delete.svg";
import close from "../assets/icon-close.svg";
import menu from "../assets/icon-menu.svg";

function Navbar({ cartItems, deleteCartItem, cartOpen, setCartOpen }) {
  return (
    <div className="nav-cont">
      <div className="navbar">
        <img className="menu" src={menu} />
        <img className="sneakers" src={sneakers} />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-imgs">
        {/* //Workarea */}
        <img
          onClick={() => setCartOpen(true)}
          src={cart}
          className="nav-right-img"
        />
        {cartOpen && (
          <div className="cart-card">
            <div className="cart-card-top">
              <h5 style={{ color: "black", fontWeight: "bold" }}>Cart</h5>
              <img onClick={() => setCartOpen(false)} src={close} />
            </div>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((items, index) => (
                  <div
                    key={index}
                    className="cart-img-txt"
                    style={{ display: "flex", gap: "10px" }}
                  >
                    <img src={items.img} width="40px" height="40px" />
                    <span>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125 x {items.number}{" "}
                        <strong>${125 * items.number}</strong>
                      </p>
                    </span>
                    <img
                      onClick={() => deleteCartItem(index)}
                      src={del}
                      width="15px"
                      height="15px"
                    />
                  </div>
                ))}
                <button className="check-btn">Checkout</button>
              </>
            ) : (
              <p>Your Cart is empty</p>
            )}
          </div>
        )}

        <img src={avatar} className="nav-right-img" />
      </div>
    </div>
  );
}

export default Navbar;
