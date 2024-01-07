import type { NextPage } from "next";

const ColorPalleteRed: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-31xl text-black font-magra">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightpink" />
      </div>
      <div className="absolute top-[326px] left-[12px] w-[299px] h-[524px]">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Color `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">themes</p>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden text-11xl font-inter border-[3px] border-solid border-black">
        <div className="absolute top-[462px] left-[609px] w-[31px] h-[31px]" />
        <div className="absolute top-[304px] left-[584px] w-[393px] h-[85px]">
          <div className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-whitesmoke-100" />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
          <div className="absolute top-[38.82%] left-[18.83%] tracking-[-0.32px] leading-[21px]">
            Green
          </div>
          <img
            className="absolute h-[34.12%] w-[7.38%] top-[32.94%] right-[86.26%] bottom-[32.94%] left-[6.36%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-10@2x.png"
          />
        </div>
        <div className="absolute top-[371px] left-[584px] w-[393px] h-[85px]">
          <div className="absolute h-[58.82%] w-full top-[21.18%] right-[0%] bottom-[20%] left-[0%] rounded-2xl bg-whitesmoke-100" />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
          <div className="absolute top-[36.47%] left-[21.63%] tracking-[-0.32px] leading-[21px]">
            Blue
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[32.94%] right-[86.01%] bottom-[32.94%] left-[6.62%] rounded-[50%] bg-lightsteelblue" />
        </div>
        <div className="absolute top-[437px] left-[584px] w-[393px] h-[85px]">
          <div className="absolute h-[58.82%] w-full top-[20%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-whitesmoke-100" />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
          <div className="absolute top-[36.47%] left-[18.07%] tracking-[-0.32px] leading-[21px]">
            Yellow
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[31.76%] right-[86.26%] bottom-[34.12%] left-[6.36%] rounded-[50%] bg-palegoldenrod" />
        </div>
        <div className="absolute top-[240px] left-[585px] w-80 h-[29px]">
          <div className="absolute top-[10.34%] left-[0%] tracking-[-0.32px] leading-[21px]">{`Current Color: `}</div>
          <div className="absolute top-[13.79%] left-[82.81%] tracking-[-0.32px] leading-[21px]">
            Red
          </div>
          <div className="absolute h-full w-[9.06%] top-[0%] right-[23.44%] bottom-[0%] left-[67.5%] rounded-[50%] bg-lightpink" />
        </div>
        <div className="absolute top-[25px] left-[26px] w-[146px] h-[65px] text-left">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-salmon" />
          <div className="absolute top-[23.08%] left-[26.03%]">back</div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalleteRed;
