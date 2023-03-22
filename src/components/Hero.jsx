import styles from "../style";
import { robot } from "../assets";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-9`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row-reverse justify-between items-center w-full">
          <h1 className="flex-1 cairo font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            كلام عربي <br className="sm:block hidden" />{" "}
            <span className="text-gradient">موقعنا</span>{" "}
          </h1>
        </div>

        <h1 className="cairo font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          مش لاقي كلام اكتبه
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          الذكاء الاصطناعي هو مجال في الحوسبة يهدف إلى تطوير تقنيات وأنظمة تمكن
          الأجهزة الحاسوبية من تحليل البيانات واستخلاص المعلومات واتخاذ القرارات
          بطريقة مستقلة.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] rotate-360"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
