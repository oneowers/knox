import React from "react";
import "./background.css";

const ContactBackground: React.FC = () => {
  return (
    <div>
      <video
        className="contact"
        autoPlay
        loop
        muted
        playsInline
        preload="false"
      >
        <source src="/contact.mp4" type="video/mp4" />
      </video>
      <div className="contact-bg" />
    </div>
  );
};

export default ContactBackground;
