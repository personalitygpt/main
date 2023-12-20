import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter();

  const onRectangle2Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[737px] overflow-hidden text-left text-16xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] box-border w-[1280px] h-[737px] overflow-hidden border-[3px] border-solid border-black">
        <img
          className="absolute top-[2px] left-[0px] w-[311px] h-[825.5px]"
          alt=""
          src="/forgotpasswordrectangle.svg"
        />
        <div className="absolute top-[320px] left-[12px] w-[299px] h-[206px] text-center text-31xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            <p className="m-0">Welcome to</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span>{` `}</span>
              <span className="text-21xl">PersonalityGPT.</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[316px] left-[570px] w-[428px] h-16 text-darkgray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <div className="absolute top-[18.75%] left-[2.8%]">Username</div>
        </div>
        <div className="absolute top-[228px] left-[570px] w-[428px] h-16 text-darkgray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <div className="absolute top-[14.06%] left-[2.8%]">Email</div>
        </div>
        <div className="absolute top-[449px] left-[637px] w-[280px] h-16 text-center text-6xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute top-[0px] left-[0px] w-[280px] h-16">
              <div
                className="absolute top-[0px] left-[0px] rounded-2xl bg-lightsteelblue w-[280px] h-16 cursor-pointer"
                onClick={onRectangle2Click}
              />
            </div>
          </div>
          <div className="absolute w-[68.21%] top-[28.13%] left-[15.71%] inline-block">
            Reset Password
          </div>
        </div>
        <div className="absolute top-[149px] left-[621px] w-[319px] h-12 text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            Forgot Password
          </div>
        </div>
      </div>
      <div className="absolute top-[19px] left-[16px] w-[146px] h-[65px] text-11xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
        <div className="absolute top-[23.08%] left-[26.03%]">back</div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
