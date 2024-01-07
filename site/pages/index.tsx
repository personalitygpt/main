import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const onDontHaveAnAccountSignUpClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  const onLoginbtnClick = useCallback(() => {
    router.push("/personality-quiz");
  }, [router]);

  const onForgotPasswordClick = useCallback(() => {
    router.push("/forgot-password-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[753px] overflow-hidden text-center text-31xl text-black font-inter lg:w-[1285px]">
      <Button
        className="absolute top-[560px] left-[640px] cursor-pointer"
        sx={{ width: 345 }}
        color="primary"
        variant="contained"
        href="/sign-up-page"
        onClick={onDontHaveAnAccountSignUpClick}
      >
        Don’t have an account? Sign up here
      </Button>
      <div className="absolute top-[22px] left-[4px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[251px] left-[16px] w-[299px] h-[271px]">
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
      <div className="absolute top-[17px] left-[5px] box-border w-[1280px] h-[736px] overflow-hidden text-16xl border-[3px] border-solid border-black">
        <Button
          className="absolute top-[453px] left-[711px] cursor-pointer"
          sx={{ width: 178 }}
          color="primary"
          variant="contained"
          onClick={onLoginbtnClick}
        >
          Login
        </Button>
        <div className="absolute top-[249px] left-[586px] w-[428px] h-16">
          <Input
            className="bg-[transparent] absolute h-full w-[100.23%] top-[0%] left-[0%]"
            placeholder="Username"
            width="429px"
            backgroundColor="#d9d9d9"
            w="429px"
          />
          <div className="absolute h-[156.25%] w-[23.36%] top-[15.63%] right-[-0.23%] bottom-[-71.87%] left-[76.87%] overflow-hidden" />
        </div>
        <div className="absolute top-[343px] left-[586px] w-[428px] h-16">
          <Input
            className="bg-[transparent] absolute h-full w-full top-[0%] left-[0%]"
            placeholder="Password"
            size="lg"
            width="428px"
            w="428px"
          />
        </div>
        <Button
          className="absolute top-[418px] left-[845px] cursor-pointer"
          sx={{ width: 176 }}
          color="primary"
          variant="contained"
          href="/forgot-password-page"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </Button>
        <div className="absolute top-[180px] left-[755px] w-[90px] h-[21px]">
          <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
