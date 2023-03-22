import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DataContext from "./FeedbackContext";
const BotDetails = () => {
  const feed = useContext(DataContext);
  const params = useParams();
  const botData = feed.find((bot) => {
    return bot.id == params.botId;
  });
  const { title, id, img, category, price, desc, link } = botData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-primary flex flex-col m-auto xl:max-w-[1280px] w-full items-center h-screen mt-32 ">
      <div className="flex flex-col gap-3">
        <div className="flex  mb-8 text-white ">
          <h1 className=" text-3xl font-bold">{title}</h1>
        </div>
        <div className="flex justify-around gap-3">
          <a href={link} target="_blank">
            <img
              class="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
              src={img}
              alt={title}
            />
          </a>
          <div>
            <div>
              <p className=" text-white mr-8 font-medium mb-6">{title}</p>
              <p className=" text-white mr-8 font-light mb-6">{desc}</p>
            </div>
            <div>
              <p className=" text-white mr-8 font-medium mb-6">
                السعر :{" "}
                <span
                  className={`${
                    price === "paid" && "text-red-500"
                  } text-green-500 `}
                >
                  {price}
                </span>
              </p>
            </div>
            <div>
              <h1>
                <a
                  href={link}
                  className="text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  target="_blank"
                >
                  زيارة الموقع
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotDetails;
