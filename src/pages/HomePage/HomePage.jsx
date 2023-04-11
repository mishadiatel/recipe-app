import React, { Suspense, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import "./HomePage.css";
import mainbg from "../../assets/mainbg.png";
import InputModal from "../../components/inputModal/InputModal";
import { Link, useNavigate } from "react-router-dom";
import breakfastImg from "../../assets/image/breakfast.png";
import lunchImg from "../../assets/image/lunch.png";
import dinnerImg from "../../assets/image/dinner.png";
import snackImg from "../../assets/image/snack.png";

import bonapetit from "../../assets/companies-logos/bonapetit.png";
import harpercollins from "../../assets/companies-logos/harpercollins.png";
import journet from "../../assets/companies-logos/journet.png";
import penguin from "../../assets/companies-logos/penguin.png";
import self from "../../assets/companies-logos/self.png";
import welicious from "../../assets/companies-logos/welicious.png";
import PartnerItem from "../../components/partneritem/PartnerItem";
const OurRecipe = React.lazy(() =>
  import("../../components/ourrecipeitem/OurRecipe")
);

const HomePage = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const submitSearchHandler = (event) => {
    event.preventDefault();
    navigate(
      `/search/${searchValue !== "" ? searchValue.toLowerCase() : "none"}`
    );
    closeModalHandler();
  };

  const openModalHandler = () => {
    if (!document.body.classList.contains("blocked")) {
      setOpenSearchInput(true);
      document.body.classList.toggle("blocked");
    }
  };

  const closeModalHandler = () => {
    setOpenSearchInput(false);
    document.body.classList.toggle("blocked");
  };
  return (
    <>
      <div className="homepage">
        <section className="container main__container">
          <div className="bg-image">
            <img src={mainbg} alt="mainbg" />
          </div>
          <div className="content">
            <h1>Find a Recipe</h1>
            <div className="input-imitator" onClick={openModalHandler}>
              <BiSearch className="search-icon" />
            </div>
            <Link to={"/search/none"} className="adv-search-btn">
              Advanced Search
            </Link>
            {openSearchInput && (
              <InputModal>
                <div className="modal-content-wrapper">
                  <BiSearch className="modal-search-icon" />
                  <form onSubmit={submitSearchHandler}>
                    <input
                      type="text"
                      className="main-search-input"
                      placeholder="Find a Recipe"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      autoFocus
                    />
                  </form>
                  <button className="close-button">
                    <CgClose onClick={closeModalHandler} />
                  </button>
                </div>
              </InputModal>
            )}
          </div>
        </section>
        <section className="container ourrecipes__container">
          <div className="ourrecipes-title">
            <div className="line"></div>
            <h2>Our Recipes</h2>
            <div className="line"></div>
          </div>
          <div className="ourrecipe__container">
            <Suspense fallback={<div>Loading</div>}>
              <OurRecipe
                link={"breakfast"}
                title={"Breakfast"}
                image={breakfastImg}
              />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
              <OurRecipe link={"lunch"} title={"Lunch"} image={lunchImg} />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
              <OurRecipe link={"dinner"} title={"Dinner"} image={dinnerImg} />
            </Suspense>

            <Suspense fallback={<div>Loading</div>}>
              <OurRecipe link={"snack"} title={"Snack"} image={snackImg} />
            </Suspense>
          </div>
        </section>
        <section className="partners">
          <div className="partners__container container">
            <div className="partners__title">
              <h2>Our Partners</h2>
            </div>
            <div className="partners-items">
              <PartnerItem image={bonapetit} title={"bonapetit"} />
              <PartnerItem image={harpercollins} title={"harpercollins"} />
              <PartnerItem image={journet} title={"journet"} />
              <PartnerItem image={penguin} title={"penguin"} />
              <PartnerItem image={self} title={"self"} />
              <PartnerItem image={welicious} title={"welicious"} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
