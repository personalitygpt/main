import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onRectangle2Click = useCallback(() => {
    router.push("/personality-quiz");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onRectangle4Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[760px] overflow-hidden text-center text-6xl text-black font-inter">
      <div className="absolute top-[0px] left-[4px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[24px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[0px] left-[4px] w-[404px] h-[759px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
        </div>
        <div className="absolute top-[48px] left-[455px] w-[615px] h-[574px] text-left">
          <div className="absolute h-[61.48%] w-full top-[20.14%] right-[-17.12%] bottom-[18.38%] left-[17.12%] bg-gray" />
          <img
            className="absolute h-full w-[71.64%] top-[0%] right-[-2.94%] bottom-[0%] left-[31.3%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-171@2x.png"
          />
          <div className="absolute h-[17.16%] w-[43.53%] top-[-17.16%] right-[92.41%] bottom-[100%] left-[-35.93%] hidden">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue cursor-pointer"
              onClick={onRectangle2Click}
            />
            <i className="absolute top-[26.6%] left-[14.61%] font-bold">
              Contact us
            </i>
          </div>
        </div>
        <i className="absolute top-[575px] left-[500px] font-bold">
          <p className="m-0">PersonalityGPT is a AI that can give you</p>
          <p className="m-0">
            personalized responses to help solve misunderstandings
          </p>
          <p className="m-0">
            and close the communication gap in everyday texting!
          </p>
        </i>
        <div className="absolute top-[31px] left-[429px] w-[178px] h-16 text-left">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue cursor-pointer"
            onClick={onRectangle3Click}
          />
          <i className="absolute top-[28.13%] left-[23.6%] font-bold">
            Sign Up
          </i>
        </div>
        <div className="absolute top-[31px] left-[1086px] w-[178px] h-16 text-left">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue cursor-pointer"
              onClick={onRectangle4Click}
            />
            <i className="absolute top-[28.13%] left-[23.6%] font-bold">
              Log In
            </i>
          </div>
        </div>
        <div className="absolute top-[79px] left-[-538px] w-[1484px] h-[51px] text-31xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[15px] inline-block font-bold [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
              <p className="m-0 text-21xl">How to use:</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
            </i>
          </div>
        </div>
        <div className="absolute top-[231px] left-[-57px] w-[465px] h-[51px] text-11xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[9px] inline-block font-medium">
              <ul className="m-0 font-inherit text-inherit pl-10">
                <li>Create Account</li>
              </ul>
            </i>
          </div>
        </div>
        <div className="absolute top-[345px] left-[0px] w-[408px] h-[51px] text-11xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[9px] inline-block font-medium">
              <ul className="m-0 font-inherit text-inherit pl-10">
                <li>Take a Personality Test</li>
              </ul>
            </i>
          </div>
        </div>
        <div className="absolute top-[459px] left-[-17px] w-[408px] h-[51px] text-11xl">
          <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[9px] inline-block font-medium">
            <ul className="m-0 font-inherit text-inherit pl-10">
              <li>Get answers</li>
            </ul>
          </i>
        </div>
        <div className="absolute top-[620px] left-[0px] w-[408px] h-[51px] text-11xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[9px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            IT’S THAT EASY!
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
