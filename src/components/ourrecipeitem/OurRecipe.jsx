import React from "react";
import "./OurRecipe.css";
import { Link } from "react-router-dom";

const OurRecipe = ({ link, image, title }) => {
  return (
    <Link to={`/search/${link}`}>
      <article>
        <img className="imagerecipe" src={image} alt="imagerecipe" />
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default OurRecipe;
