import ResultImage from "../assets/Result.svg";

interface ResultProps {
  active: number;
  title: string;
  content: string;
}

const Result = ({ active, title, content }: ResultProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-6 md:gap-y-8">
        <img
          src={ResultImage}
          alt="ResultImage"
          className="w-[149px] h-[96px] md:w-[162px] md:h-[108px]"
        />
        <p className="bg-DarkBlue text-Orange px-3 md:px-[19px] py-[5px] md:py-[4px] leading-6 text-sm md:text-[15px] rounded-[22.5px] items-center text-center">
          You selected {active} out of 5
        </p>
      </div>

      <div className="items-center flex flex-col gap-y-[10px] md:gap-y-[7px] mt-6 md:mt-8">
        <h1 className="text-White text-2xl md:text-[28px] font-bold">
          {title}
        </h1>
        <p className="text-LightGray leading-[22px] text-sm md:text-[15px] md:leading-[24px] text-center">
          {content}
        </p>
      </div>
    </>
  );
};

export default Result;
