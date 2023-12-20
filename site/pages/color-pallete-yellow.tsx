import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ColorPalleteYellow: NextPage = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/color-pallete-green");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/color-pallete-red");
  }, [router]);

  const onYellowbackbtnContainerClick = useCallback(() => {
    router.push("/profile-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-31xl text-black font-magra">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-palegoldenrod" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[308px] left-[6px] w-[299px] h-[524px]">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Color `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">themes</p>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden text-11xl font-inter border-[3px] border-solid border-black">
        <div className="absolute top-[304px] left-[584px] w-[393px] h-[85px]">
          <div
            className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-whitesmoke-100 cursor-pointer"
            onClick={onRectangle1Click}
          />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
          <div className="absolute top-[37.65%] left-[19.34%] tracking-[-0.32px] leading-[21px]">
            Green
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[32.94%] right-[87.28%] bottom-[32.94%] left-[5.34%] rounded-[50%] bg-darkseagreen-100" />
        </div>
        <div className="absolute top-[371px] left-[584px] w-[393px] h-[85px]">
          <div className="absolute h-[58.82%] w-full top-[21.18%] right-[0%] bottom-[20%] left-[0%] rounded-2xl bg-whitesmoke-100" />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
          <div className="absolute top-[36.47%] left-[22.65%] tracking-[-0.32px] leading-[21px]">
            Blue
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[36.47%] right-[87.28%] bottom-[29.41%] left-[5.34%] rounded-[50%] bg-lightsteelblue" />
        </div>
        <div className="absolute top-[237px] left-[585px] w-[347px] h-[29px]">
          <div className="absolute top-[20.69%] left-[0%] tracking-[-0.32px] leading-[21px]">{`Current Color: `}</div>
          <div className="absolute top-[13.79%] left-[74.06%] tracking-[-0.32px] leading-[21px]">
            Yellow
          </div>
          <div className="absolute h-full w-[8.36%] top-[0%] right-[30.55%] bottom-[0%] left-[61.1%] rounded-[50%] bg-palegoldenrod" />
        </div>
        <div className="absolute top-[439px] left-[584px] w-[393px] h-[85px]">
          <div
            className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-whitesmoke-100 cursor-pointer"
            onClick={onRectangle3Click}
          />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
          <div className="absolute top-[35.29%] left-[22.39%] tracking-[-0.32px] leading-[21px]">
            Red
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[30.59%] right-[87.28%] bottom-[35.29%] left-[5.34%] rounded-[50%] bg-lightpink" />
        </div>
        <div
          className="absolute top-[30px] left-[40px] w-[146px] h-[65px] cursor-pointer text-left"
          onClick={onYellowbackbtnContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-khaki" />
          <div className="absolute top-[23.08%] left-[26.03%]">back</div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalleteYellow;
