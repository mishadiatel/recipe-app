import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.label}`} className="card-link-wrapper">
      <article className="card-wrapper">
        <div className="card-image-wrapper">
          <img src={recipe.image} alt="recipe card" className="card-image" />
        </div>
        <div className="card-content">
          <div>
            <span className="recipespan">RECIPE</span>
            <h5 className="card-title">{recipe.label}</h5>
          </div>
          <span className="card-meal-type">{recipe.mealType}</span>
        </div>
      </article>
    </Link>
  );
};

export default FoodCard;
