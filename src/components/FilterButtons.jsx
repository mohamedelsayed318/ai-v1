import React from "react";

const FilterButtons = ({ categories, filterItems }) => {
  return (
    <div className="mr-8">
      {categories.map((btn, index) => {
        return (
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => filterItems(btn)}
            key={index}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
