import React from "react";

import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button
          className="arrow clear-button"
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button
          className="arrow clear-button"
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </button>
      </span>
      <span className="price">{price}€</span>
      <button
        className="remove clear-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
