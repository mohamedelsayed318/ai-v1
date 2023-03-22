import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
const Cards = ({ cardsItems }) => {
  return (
    <div className="flex flex-wrap">
      {cardsItems.map(({ price, img, title, category, desc, id }, index) => {
        return (
          <div
            className="flex justify-between flex-col px-10 py-12 rounded-[20px]  cursor-pointer max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
            key={index}
          >
            <div
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
              >
                <div className={`${styles.flexStart} flex-row`}>
                  <p className="cairo font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">{price}</span>
                  </p>
                </div>
              </div>
            </div>
            <img src={img} alt={title} className="my-5 rounded-[10px]" />
            <h1 className="cairo font-medium text-[20px] leading-[32.4px] text-white ">
              {title}
            </h1>
            <p className=" bg-orange-400 w-fit px-3 py-0 my-3 rounded-[50px] text-white">
              {category}
            </p>
            <p className="cairo text-sm font-medium text-dimWhite hover:text-white">
              {desc}
            </p>
            <Link
              to={`/bot/${id}`}
              className="cairo mt-6 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              قراءة المزيد
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
