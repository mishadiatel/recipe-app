import React, { useEffect } from "react";
import "./RecipePage.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { fetchSingleResipe } from "../../api/api";
import { Link, redirect, useLoaderData, useParams } from "react-router-dom";

const RecipePage = () => {
  const recipe = useLoaderData();
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="recipe-page">
      <section className="recipe-head">
        <div className="recipe-head__container container">
          <span className="recipe-head__span">RECIPE</span>
          <h1 className="recipe-head__title">{recipe.label}</h1>
          <p className="recipe-head__cousine-type">
            {recipe.cuisineType} cousine
          </p>
        </div>
      </section>
      <div className="recipe-main">
        <div className="recipe-main__container container">
          <div className="recipe-main__left">
            <h3 className="recipe-main__health-labels-title">Health labels</h3>
            <div className="health-labels__container">
              {recipe.healthLabels.map((item) => {
                return (
                  <div key={item} className="recipe-main__health-label">
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recipe-main__right">
            <img src={recipe.image} alt={recipe.label + "image"} />
          </div>
        </div>
      </div>
      <section className="recipe-ingredients">
        <div className="recipe-ingredients__container container">
          <h3 className="recipe-ingredients__title">Ingredients</h3>
          <div className="recipe-ingredients__ing-container">
            {recipe.ingredients.map((ingredient) => {
              return (
                <article className="recipe-ingredients__ingredient-item">
                  <div className="red-round"></div>
                  <div className="ingredient-item-content">
                    {Number(ingredient.quantity) !== 0 && (
                      <span>{ingredient.quantity}</span>
                    )}
                    {ingredient.measure && <span>{ingredient.measure}</span>}
                    {ingredient.food && <span>{ingredient.food}</span>}
                    {ingredient.weight && (
                      <span>({ingredient.weight.toFixed(2)} gram) </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          {recipe.totalWeight && (
            <p className="recipe-totalweight">
              Total weight {recipe.totalWeight.toFixed(2)} gram
            </p>
          )}
        </div>
      </section>
      <div className="recipe-exit">
        <Link
          to={`/search/${params.searchElement}`}
          className="recipe-exit-button"
        >
          <BiLeftArrowAlt />
          <span>Go to search page</span>
        </Link>
      </div>
    </div>
  );
};

export default RecipePage;

export const loader = async ({ params }) => {
  const { recipetitle } = params;
  console.log(recipetitle);
  try {
    const recipe = await fetchSingleResipe(recipetitle);
    return recipe;
  } catch (err) {
    console.log(err);
    redirect(`/search/${recipetitle}`);
  }
};
