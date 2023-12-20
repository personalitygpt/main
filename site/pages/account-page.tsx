import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AccountPage: NextPage = () => {
  const router = useRouter();

  const onRectangleContainerClick = useCallback(() => {
    router.push("/settings-page");
  }, [router]);

  const onRectangle4Click = useCallback(() => {
    router.push("/password-page2");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-11xl text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div
        className="absolute top-[45px] left-[22px] w-[146px] h-[65px] cursor-pointer"
        onClick={onRectangleContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
      </div>
      <div className="absolute top-[60px] left-[60px] w-[69px] h-9 text-left">
        <div className="absolute top-[0%] left-[0%]">back</div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[332px] left-[0px] w-[299px] h-[206px] text-31xl font-magra">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Account `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">page</p>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden text-21xl text-darkgray-200 border-[3px] border-solid border-black">
        <div className="absolute top-[338px] left-[392px] w-[734px] h-[60px]">
          <div className="absolute h-full w-[96.73%] top-[0%] right-[3.27%] bottom-[0%] left-[0%] bg-gainsboro" />
          <div className="absolute top-[31.67%] left-[1.36%] tracking-[-0.32px] leading-[21px]">
            Email
          </div>
          <div className="absolute h-[63.33%] w-[62.67%] top-[31.67%] left-[37.33%] text-6xl tracking-[-0.32px] leading-[21px] text-black inline-block">
            Personalityexample@asdrp.org
          </div>
        </div>
        <div className="absolute top-[228px] left-[392px] w-[710px] h-[60px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
          <div className="absolute top-[31.67%] left-[1.41%] tracking-[-0.32px] leading-[21px]">
            Username
          </div>
          <div className="absolute top-[31.67%] left-[69.15%] text-6xl tracking-[-0.32px] leading-[21px] text-black">
            ThisexampleisaW
          </div>
        </div>
        <div className="absolute top-[433px] left-[392px] w-[710px] h-[85px]">
          <div
            className="absolute h-[70.59%] w-full top-[15.29%] right-[0%] bottom-[14.12%] left-[0%] bg-gainsboro cursor-pointer"
            onClick={onRectangle4Click}
          />
          <div className="absolute top-[37.65%] left-[1.41%] tracking-[-0.32px] leading-[21px]">
            Password
          </div>
          <img
            className="absolute h-full w-[3.24%] top-[0%] right-[2.54%] bottom-[0%] left-[94.23%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
