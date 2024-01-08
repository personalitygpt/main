import Type from "../components/Type";

const PersonalityQuiz = () => {
  return (
    <div className="relative bg-white w-full h-[757px] overflow-hidden text-left text-xl text-dimgray font-inter">
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] w-0 h-0 text-[36px]">
          <div className="absolute hidden">Type Here...</div>
        </div>
        <div className="absolute top-[68px] left-[115px] w-[450px] h-[130.2px] text-black">
          <div className="absolute h-[92.17%] w-full top-[0%] right-[0%] bottom-[7.83%] left-[0%] rounded-99981xl bg-gainsboro" />
          <div className="absolute h-[73.73%] w-[81.11%] top-[7.68%] left-[9.56%] inline-block">
            Hello, welcome to PersonalityGPT! Let’s have a small conversation to
            get to know each other better! Could I ask you a few questions?
          </div>
          <div className="absolute h-[11.52%] w-[3.33%] top-[91.86%] right-[84%] bottom-[-3.38%] left-[12.67%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[198px] left-[1070px] w-[100px] h-[50.2px] text-white">
          <div className="absolute h-[79.68%] w-full top-[0%] right-[0%] bottom-[20.32%] left-[0%] rounded-[100000000px] bg-dodgerblue-100" />
          <div className="absolute top-[15.94%] left-[25%]">Sure!</div>
          <div className="absolute h-[29.88%] w-[15%] top-[78.88%] right-[32%] bottom-[-8.76%] left-[53%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
        </div>
        <Type typePosition="absolute" typeTop="641px" typeLeft="340px" />
        <div className="absolute top-[198px] left-[61px] w-[54px] h-[61px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="absolute top-[68px] left-[1248px] w-8 h-[399px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
      </div>
    </div>
  );
};

export default PersonalityQuiz;
