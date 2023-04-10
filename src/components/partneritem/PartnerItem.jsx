import React from "react";
import "./PartnerItem.css";

const PartnerItem = ({ image, title }) => {
  return (
    <article className="partner-item">
      <img src={image} alt="partnerImage" className="partner-image" />
      <h5 className="partner-title">{title}</h5>
    </article>
  );
};

export default PartnerItem;
