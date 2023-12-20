import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const onDontHaveAnAccountSignUpClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/personality-quiz");
  }, [router]);

  const onForgotPasswordContainerClick = useCallback(() => {
    router.push("/forgot-password-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[753px] overflow-hidden text-center text-xl text-black font-inter">
      <div
        className="absolute top-[560px] left-[640px] w-[345px] h-[13px] cursor-pointer"
        onClick={onDontHaveAnAccountSignUpClick}
      >
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          Don’t have an account? Sign up here
        </div>
      </div>
      <div className="absolute top-[22px] left-[4px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[251px] left-[4px] w-[299px] h-[271px] text-31xl">
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
      <div className="absolute top-[18px] left-[4px] box-border w-[1280px] h-[736px] overflow-hidden text-left text-16xl border-[3px] border-solid border-black">
        <div className="absolute top-[249px] left-[586px] w-[428px] h-16 text-darkgray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <div className="absolute top-[21.88%] left-[4.91%]">Username</div>
        </div>
        <div className="absolute top-[453px] left-[711px] w-[178px] h-16 text-6xl">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightsteelblue cursor-pointer"
            onClick={onRectangle1Click}
          />
          <div className="absolute top-[26.56%] left-[32.58%]">Login</div>
        </div>
        <div className="absolute top-[343px] left-[586px] w-[428px] h-16 text-darkgray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <div className="absolute top-[12.5%] left-[4.91%]">Password</div>
        </div>
        <div
          className="absolute top-[418px] left-[845px] w-44 h-[25px] cursor-pointer text-xl"
          onClick={onForgotPasswordContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            Forgot Password?
          </div>
        </div>
        <div className="absolute top-[180px] left-[755px] w-[90px] h-[21px] text-center">
          <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
