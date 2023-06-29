import React from "react";
import "./Order.css";

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>We are open now. Please order online</p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
