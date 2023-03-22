import styles from "../style";
const FeedbackCard = ({ price, category, desc, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  cursor-pointer max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
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
  </div>
);

export default FeedbackCard;