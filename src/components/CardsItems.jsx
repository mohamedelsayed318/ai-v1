import React from "react";
import FilterButtons from "./FilterButtons";
import Cards from "./Cards";
import { useState } from "react";
import { feedback } from "../constants";
import { Link } from "react-router-dom";

const allButtonsCategories = [
  "all",
  ...new Set(feedback.map((item) => item.category)),
];
const CardsItems = () => {
  const [cardsItems, setCardsItems] = useState(feedback);
  const [categories, setCategories] = useState(allButtonsCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setCardsItems(feedback);
      return;
    }
    let newItems = feedback.filter((item) => item.category === category);
    setCardsItems(newItems);
  };
  return (
    <div>
      <FilterButtons filterItems={filterItems} categories={categories} />
      <Cards cardsItems={cardsItems} />
    </div>
  );
};

export default CardsItems;
