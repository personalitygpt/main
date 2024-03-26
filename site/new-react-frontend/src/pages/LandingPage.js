import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Personality Quiz" to the project
  }, []);

  const navigate = useNavigate();

  const onLogInClick = () => {
    navigate("/login-page");
  };

  const onSignUpClick = () => { 
    navigate("/sign-up-page");
  };

  const onNewChatClick = () => { 
    navigate("/ai-insights");
  };

  return (
    <button className="cursor-pointer [border:none] p-0 bg-white w-full relative h-[760px] overflow-hidden">
      <div className="absolute top-[24px] left-[0px] w-[1280px] h-[736px] overflow-hidden">
        <div className="absolute top-[0px] left-[4px] w-[404px] h-[759px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
        </div>
        <div className="absolute top-[48px] left-[455px] w-[615px] h-[574px]">
          <div className="absolute h-[61.48%] w-full top-[20.14%] right-[-17.12%] bottom-[18.38%] left-[17.12%] bg-black" />
          <img
            className="absolute h-full w-[71.64%] top-[0%] right-[-2.94%] bottom-[0%] left-[31.3%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-17@2x.png"
          />
          <div className="absolute h-[17.16%] w-[43.53%] top-[-17.16%] right-[92.41%] bottom-[100%] left-[-35.93%] hidden">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue cursor-pointer"
              onClick={onRectangleClick}
            />
            <i className="absolute top-[26.6%] left-[14.61%] text-6xl font-bold font-inter text-black text-left">
              Contact us
            </i>
          </div>
        </div>
        <i className="absolute top-[575px] left-[500px] text-6xl font-bold font-inter text-black text-center">
          <p className="m-0">PersonalityGPT is a AI that can give you</p>
          <p className="m-0">
            personalized responses to help solve misunderstandings
          </p>
          <p className="m-0">
            and close the communication gap in everyday texting!
          </p>
        </i>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[429px] w-[178px] h-16" onClick={onSignUpClick}>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue" />
          <i className="absolute top-[28.13%] left-[23.6%] text-6xl font-bold font-inter text-black text-left">
            Sign Up
          </i>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[1086px] w-[178px] h-16"
          id="loginbutton"
          onClick={onLogInClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue" />
            <i className="absolute top-[28.13%] left-[23.6%] text-6xl font-bold font-inter text-black text-left">
              Log In
            </i>
          </div>
        </button>
        <div className="absolute top-[79px] left-[-538px] w-[1484px] h-[51px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[15px] inline-block font-bold font-inter text-black text-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
              <p className="m-0 text-21xl">How to use:</p>
              <p className="m-0 text-31xl">&nbsp;</p>
              <p className="m-0 text-31xl">&nbsp;</p>
            </i>
          </div>
        </div>
        <div className="absolute top-[231px] left-[-57px] w-[465px] h-[51px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] text-11xl tracking-[-0.32px] leading-[9px] inline-block font-medium font-inter text-black text-center">
              <ol className="m-0 font-inherit text-inherit pl-10">
                <li>Create Account</li>
              </ol>
            </i>
          </div>
        </div>
        <div className="absolute top-[345px] left-[0px] w-[408px] h-[51px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] text-11xl tracking-[-0.32px] leading-[9px] inline-block font-medium font-inter text-black text-center">
              <ol className="m-0 font-inherit text-inherit pl-10">
                <li>Take a Personality Test</li>
              </ol>
            </i>
          </div>
        </div>
        <div className="absolute top-[459px] left-[-17px] w-[408px] h-[51px]">
          <i className="absolute h-full w-full top-[0%] left-[0%] text-11xl tracking-[-0.32px] leading-[9px] inline-block font-medium font-inter text-black text-center">
            <ol className="m-0 font-inherit text-inherit pl-10">
              <li>Get answers</li>
            </ol>
          </i>
        </div>
        <div className="absolute top-[620px] left-[0px] w-[408px] h-[51px]">
          <div className="absolute h-full w-full top-[0%] left-[0%] text-11xl tracking-[-0.32px] leading-[9px] font-inter text-black text-center inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            IT’S THAT EASY!
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[758px] w-[178px] h-16"
          id="loginbutton"
          onClick={onNewChatClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue" />
            <i className="absolute top-[28.13%] left-[23.6%] text-6xl font-bold font-inter text-black text-left">
              New Chat
            </i>
          </div>
        </button>
      </div>
    </button>
  );
};

export default LandingPage;
