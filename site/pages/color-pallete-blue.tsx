import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ColorPalleteBlue: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/color-pallete-red");
  }, [router]);

  const onRectangleContainer1Click = useCallback(() => {
    router.push("/color-pallete-blue");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/color-pallete-yellow");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/profile-page");
  }, [router]);

  const onBackbtnblackContainerClick = useCallback(() => {
    router.push("/profile-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-11xl text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[-2px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[464px] left-[609px] w-[31px] h-[31px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        </div>
        <div className="absolute top-[463px] left-[609px] w-[29px] h-[29px]" />
        <div className="absolute top-[446px] left-[579px] w-[393px] h-[85px]">
          <div className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%]">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-300 cursor-pointer"
              onClick={onRectangleClick}
            />
          </div>
          <div className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than2@2x.png"
            />
          </div>
          <div className="absolute h-[24.71%] w-[13.99%] top-[35.29%] right-[63.61%] bottom-[40%] left-[22.39%]">
            <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
              Red
            </div>
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[32.94%] right-[86.26%] bottom-[32.94%] left-[6.36%] rounded-[50%] bg-lightpink" />
        </div>
        <div className="absolute top-[393px] left-[609px] w-[29px] h-[29px]" />
        <div className="absolute top-[288px] left-[579px] w-[393px] h-[85px]">
          <div
            className="absolute h-[58.82%] w-full top-[21.18%] right-[0%] bottom-[20%] left-[0%] cursor-pointer"
            onClick={onRectangleContainer1Click}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-300" />
          </div>
          <div className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than2@2x.png"
            />
          </div>
          <div className="absolute h-[24.71%] w-[15.52%] top-[36.47%] right-[62.85%] bottom-[38.82%] left-[21.63%]">
            <div className="absolute top-[0%] left-[-19.67%] tracking-[-0.32px] leading-[21px]">
              Green
            </div>
          </div>
          <img
            className="absolute h-[34.12%] w-[7.38%] top-[32.94%] right-[86.26%] bottom-[32.94%] left-[6.36%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/ellipse-9.svg"
          />
        </div>
        <div className="absolute top-[368px] left-[579px] w-[393px] h-[85px]">
          <div className="absolute h-[58.82%] w-full top-[20%] right-[0%] bottom-[21.18%] left-[0%]">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-300 cursor-pointer"
              onClick={onRectangle2Click}
            />
          </div>
          <div className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than2@2x.png"
            />
          </div>
          <div className="absolute h-[24.71%] w-[22.9%] top-[36.47%] right-[59.03%] bottom-[38.82%] left-[18.07%]">
            <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
              Yellow
            </div>
          </div>
          <div className="absolute h-[34.12%] w-[7.38%] top-[31.76%] right-[86.26%] bottom-[34.12%] left-[6.36%] rounded-[50%] bg-palegoldenrod" />
        </div>
        <div className="absolute top-[239px] left-[585px] w-[347px] h-[29px]">
          <div className="absolute h-[72.41%] w-[56.48%] top-[13.79%] right-[43.52%] bottom-[13.79%] left-[0%]">
            <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">{`Current Color: `}</div>
          </div>
          <div className="absolute h-[72.41%] w-[24.5%] top-[13.79%] right-[0%] bottom-[13.79%] left-[75.5%]">
            <div className="absolute top-[0%] left-[14.12%] tracking-[-0.32px] leading-[21px]">
              Blue
            </div>
          </div>
          <img
            className="absolute h-full w-[8.36%] top-[0%] right-[29.97%] bottom-[0%] left-[61.67%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/ellipse-10.svg"
          />
        </div>
        <div
          className="absolute top-[5px] left-[-1116px] w-[1285px] h-24 overflow-hidden cursor-pointer text-left"
          onClick={onFrameContainerClick}
        >
          <div
            className="absolute h-[67.71%] w-[11.36%] top-[32.29%] right-[0%] bottom-[0%] left-[88.64%] rounded-3xs bg-dodgerblue-200 cursor-pointer"
            onClick={onBackbtnblackContainerClick}
          >
            <div className="absolute top-[23.08%] left-[26.03%]">back</div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[678px] h-[57px] mix-blend-lighten"
            alt=""
            src="/rectangle-66.svg"
          />
        </div>
        <img
          className="absolute h-[3.94%] w-[2.27%] top-[32.47%] right-[35.16%] bottom-[63.59%] left-[62.58%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-9.svg"
        />
        <div className="absolute h-[3.94%] w-[2.27%] top-[43.34%] right-[50.55%] bottom-[52.72%] left-[47.19%] rounded-[50%] bg-darkseagreen-100" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[332px] left-[-2px] w-[299px] h-[165px] text-31xl font-magra">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Color `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">themes</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalleteBlue;
