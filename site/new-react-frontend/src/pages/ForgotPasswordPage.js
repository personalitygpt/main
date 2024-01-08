import Emailbtn from "../components/Emailbtn";
import Resetpwdbtn from "../components/Resetpwdbtn";
import BackbtnForgotpwd from "../components/BackbtnForgotpwd";

const ForgotPasswordPage = () => {
  return (
    <div className="relative bg-white w-full h-[737px] overflow-hidden text-left text-31xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] box-border w-[1280px] h-[737px] overflow-hidden border-[3px] border-solid border-black">
        <img
          className="absolute top-[2px] left-[0px] w-[311px] h-[825.5px] object-cover"
          alt=""
          src="/forgotpasswordrectangle@2x.png"
        />
        <div className="absolute top-[320px] left-[12px] w-[299px] h-[206px] text-center">
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
        <div className="absolute top-[316px] left-[570px] w-[428px] h-16 text-16xl text-darkgray">
          <div className="absolute top-[18.75%] left-[2.8%]">Username</div>
        </div>
        <Emailbtn />
        <Resetpwdbtn />
        <div className="absolute top-[149px] left-[621px] w-[319px] h-12 text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            Forgot Password
          </div>
        </div>
      </div>
      <BackbtnForgotpwd />
    </div>
  );
};

export default ForgotPasswordPage;
