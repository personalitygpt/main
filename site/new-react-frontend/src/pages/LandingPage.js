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
    <div className="w-full relative bg-ghostwhite h-[760px] overflow-hidden text-center text-6xl text-black font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[180px]"
        alt=""
        src="/upperrect.svg"
      />
      <div className="absolute top-[24px] left-[0px] w-[1280px] h-[736px] overflow-hidden">
        <b className="absolute top-[598px] left-[306px]">
          <p className="m-0">PersonalityGPT is an AI tool that can give you</p>
          <p className="m-0">
            personalized responses to help solve misunderstandings
          </p>
          <p className="m-0">
            and close the communication gap in everyday texting!
          </p>
        </b>
        <div className="absolute top-[31px] left-[306px] w-[178px] h-16">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[178px] h-16">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-cornflowerblue" />
            <b className="absolute top-[28.13%] left-[23.6%] text-6xl font-inter text-black text-left">
              Sign Up
            </b>
          </button>
        </div>
        <div className="absolute top-[31px] left-[826px] w-[178px] h-16">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[178px] h-16"
            id="loginbutton"
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-cornflowerblue" />
                <b className="absolute top-[26.56%] left-[29.21%] text-6xl font-inter text-black text-left">
                  Log In
                </b>
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-[156px] left-[5px] w-[408px] h-[51px] text-11xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <i className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[9px] hidden font-medium">
              <ol className="m-0 font-inherit text-inherit pl-10">
                <li>Take a Personality Test</li>
              </ol>
            </i>
          </div>
        </div>
        <div className="absolute top-[186px] left-[368px] box-border w-[544px] h-[389px] border-[5px] border-dashed border-black" />
      </div>
      <img
        className="absolute top-[228px] left-[383px] w-[514px] h-[352px] object-cover"
        alt=""
        src="/logo@2x.png"
      />
    </div>
  );
};

export default LandingPage;
