import React from "react";
import Order from "./Order";
import "./Footer.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are welcome you between {openHour} to {closeHour}
        </p>
      )}
    </footer>
  );
};

export default Footer;
