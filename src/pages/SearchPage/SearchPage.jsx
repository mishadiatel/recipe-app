import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import LogoText from "../../components/logo/logotext/LogoText";
import { BiSearch } from "react-icons/bi";
import {
  Link,
  json,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import OptionItem from "../../components/optionitem/OptionItem";
import { fetchRecipes } from "../../api/api";
const RecipeList = React.lazy(() =>
  import("../../components/recipelist/RecipeList")
);

const SearchPage = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();
  const [logoColor, setLogoColor] = useState("");
  const [recipes, setRecipes] = useState(loadedData.hits);
  const { searchElement } = useParams();
  const [enteredMeal, setEnteredMeal] = useState(
    `${searchElement !== "none" ? searchElement : ""}`
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollY = 0;
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const colorValue = style.getPropertyValue("--color-white");
    setLogoColor(colorValue);
  }, []);

  useEffect(() => {
    const options = {
      q: enteredMeal,
    };

    const fetchData = async (options) => {
      setRecipes([]);
      try {
        setIsLoading(true);
        const fetchedRecipes = await fetchRecipes(options);
        setRecipes(fetchedRecipes.hits);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchData(options);
  }, [searchElement]);

  const submitSearchHandler = (event) => {
    event.preventDefault();
    navigate(`/search/${enteredMeal}`);
    // const options = {
    //   q: enteredMeal,
    // };

    // const fetchData = async (options) => {
    //   setRecipes([]);
    //   try {
    //     setIsLoading(true);
    //     const fetchedRecipes = await fetchRecipes(options);
    //     setRecipes(fetchedRecipes.hits);
    //     setIsLoading(false);
    //   } catch (err) {
    //     setIsLoading(false);
    //     console.log(err);
    //   }
    // };
    // fetchData(options);
  };

  return (
    <div className="search-page">
      <section className="search">
        <div className="container search__container">
          <Link to={"/"}>
            <LogoText color={logoColor} />
          </Link>
          <form onSubmit={submitSearchHandler} className="search-form">
            <BiSearch />
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

      <RecipeList isLoading={isLoading} recipes={recipes} />
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
      return json({ message: "Could not fetch reciped" }, { status: 500 });
    }
  }
};
