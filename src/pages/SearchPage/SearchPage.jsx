import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import LogoText from "../../components/logo/logotext/LogoText";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import {
  Link,
  json,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
// import OptionItem from "../../components/optionitem/OptionItem";
import { MAX_FOOD_CARD, fetchRecipes } from "../../api/api";
import ResultsTitle from "../../components/resultsTitle/ResultsTitle";
const RecipeList = React.lazy(() =>
  import("../../components/recipelist/RecipeList")
);

const SearchPage = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();
  const { searchElement } = useParams();

  const [logoColor, setLogoColor] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [enteredMeal, setEnteredMeal] = useState(
    `${searchElement !== "none" ? searchElement : ""}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(Number(1));

  useEffect(() => {
    window.scrollTo(0, 0);
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const colorValue = style.getPropertyValue("--color-white");
    setLogoColor(colorValue);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setRecipes(loadedData.hits);
  }, [loadedData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchElement]);

  const fetchData = async (pageAcction = "ZERO") => {
    setRecipes([]);
    setIsLoading(true);
    try {
      const fetchedRecipes = await fetchRecipes(
        { q: searchElement },
        pageAcction
      );
      setRecipes(fetchedRecipes.hits);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const nextPageClickHandler = () => {
    if (currentPage < Math.floor(100 / MAX_FOOD_CARD)) {
      setCurrentPage(currentPage + 1);
      fetchData("INCREMENT");
    }
  };

  const prevPageClickHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchData("DECREMENT");
    }
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    if (/[a-z]/.test(enteredMeal.toLowerCase())) {
      navigate(`/search/${enteredMeal.toLowerCase()}`);
    }
  };

  return (
    <div className="search-page">
      <section className="search">
        <div className="container search__container">
          <Link to={"/"}>
            <LogoText color={logoColor} />
          </Link>
          <form onSubmit={submitSearchHandler} className="search-form">
            <button type="submit">
              <BiSearch />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Find a recipe"
              value={enteredMeal}
              onChange={(e) => setEnteredMeal(e.target.value)}
            />
          </form>
        </div>
      </section>
      {/* <div className="options">
        <div className="container options__container">
          <OptionItem
            title="Meal Type"
            optionsArray={["Breakfast", "Lunch", "Dinner", "Snack"]}
          />
          <OptionItem
            title={"Dish Type"}
            optionsArray={[
              "soup",
              "salad",
              "sandwich",
              "dessert",
              "salad",
              "bread",
              "soup",
              "beverage",
              "sauce",
              "marinade",
            ]}
          />
          <OptionItem
            title={"health"}
            optionsArray={[
              "gluten-free",
              "vegan",
              "vegetarian",
              "paleo",
              "keto",
            ]}
          />
          <OptionItem
            title={"Diet"}
            optionsArray={[
              "balanced",
              "high-protein",
              "low-fat",
              "low-carb",
              "vegan",
              "vegetarian",
            ]}
          />
          <OptionItem
            title={"Cousine Type"}
            optionsArray={["italian", "indian", "american", "ukrainian"]}
          />
        </div>
      </div> */}
      {/* <div className="results-amount">
        <div className="results-amount__container container">
          <p className="result-amount-text">{`Results for "${loadedData.q}"`}</p>
        </div>
      </div> */}
      <ResultsTitle searchFood={loadedData.q} />

      <RecipeList
        isLoading={isLoading}
        recipes={recipes}
        amount={loadedData.count}
        food={loadedData.q}
      />
      <div className="buttons-search-page">
        <div className="buttons-search-page__container container">
          <button
            className="nav-search-page-btn"
            onClick={prevPageClickHandler}
          >
            <FiArrowLeft className="nav-search-page-btn-arrow" /> Prev
          </button>
          <span>{`${currentPage} page`}</span>
          <button
            className="nav-search-page-btn"
            onClick={nextPageClickHandler}
          >
            Next <FiArrowRight className="nav-search-page-btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

export const loader = async ({ params }) => {
  const { searchElement } = params;
  if (params !== "none") {
    try {
      const fetchedRecipes = await fetchRecipes({ q: searchElement });
      return fetchedRecipes;
    } catch (err) {
      console.log(err);
      return json({ message: "Could not fetch recipes" }, { status: 500 });
    }
  }
};
