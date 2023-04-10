import React, { Suspense } from "react";
import "./RecipeList.css";

const FoodCard = React.lazy(() => import("../foodCard/FoodCard"));

const RecipeList = ({ isLoading, recipes }) => {
  return (
    <div className="recipes-list">
      {isLoading ? (
        <div className="container message__container">
          <p className="search-message">Loading...</p>
        </div>
      ) : recipes && recipes.length > 0 ? (
        <div className="container recipes__container">
          {recipes.map(({ recipe }) => {
            return (
              <Suspense key={recipe.uri} fallback={<p>Loading...</p>}>
                <FoodCard key={recipe.uri} recipe={recipe} />
              </Suspense>
            );
          })}
        </div>
      ) : (
        <div className="container message__container">
          <p className="search-message">Not Found Recipes</p>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
