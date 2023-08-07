import { useState } from "react";
import { Fragment } from "react";
import Star from "../assets/Star.svg";
import Result from "./Result";

interface RatingProps {
  title: string;
  content: string;
}

const Rating = ({ title, content }: RatingProps) => {
  const [active, setActive] = useState(0);
  const [result, setResult] = useState(true);
  return (
    <div className="box px-6 md:px-8 pt-6 md:pt-8 py-8 w-[327px] md:w-[412px] rounded-[15px]">
      {result ? (
        <>
          <img
            src={Star}
            alt="starIcon"
            className="p-4 bg-[#262E38] rounded-full w-12 h-12"
          />
          <div className="mt-4 md:mt-[30px] flex flex-col gap-y-[10px] md:gap-y-3">
            <h1 className="text-2xl md:text-[28px] font-bold text-White">
              {title}
            </h1>
            <p className="text-LightGray text-sm md:text-[15px] md:w-[340px] leading-6">
              {content}
            </p>
          </div>
          {/* RatingItems  */}
          <div className="w-full items-center flex flex-row gap-x-[18px] mt-6">
            {[1, 2, 3, 4, 5].map((item, id) => {
              return (
                <Fragment key={id}>
                  <button
                    onClick={() => setActive(item)}
                    className={`${
                      item === active ? "text-[#fff] bg-Orange" : null
                    }
                    w-[42px] md:w-[51px] md:h-[51px] h-[42px] text-sm md:text-base md:font-bold leading-6 tracking-[0.175px] md:tracking-[0.2px]
                     bg-DarkBlue rounded-full items-center text-MediumGray duration-300 hover:bg-MediumGray hover:text-White`}
                  >
                    {item}
                  </button>
                </Fragment>
              );
            })}
          </div>
          <button
            onClick={() => setResult(false)}
            className="uppercase mt-6 w-full bg-Orange text-White py-3 px-[109px] rounded-[22.5px] duration-300 hover:bg-White hover:text-Orange"
          >
            Submit
          </button>{" "}
        </>
      ) : (
        <Result
          active={active}
          title="Thank You"
          content="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        />
      )}
    </div>
  );
};

export default Rating;
