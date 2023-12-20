import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SignUpPage: NextPage = () => {
  const router = useRouter();

  const onRectangle5Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-left text-16xl text-darkgray-200 font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[322px] left-[582px] w-[428px] h-16">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[428px] h-16" />
        </div>
        <div className="absolute top-[336px] left-[603px]">Username</div>
        <div className="absolute top-[226px] left-[579px] w-[428px] h-16">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[428px] h-16" />
        </div>
        <div className="absolute top-[240px] left-[600px]">Email</div>
        <div className="absolute top-[416px] left-[582px] bg-gainsboro w-[428px] h-16" />
        <div className="absolute top-[426px] left-[603px]">Password</div>
        <div className="absolute top-[119px] left-[556px] w-[379px] h-[61px] text-31xl text-black">
          <div className="absolute top-[0%] left-[0%]">Create your account</div>
        </div>
        <div className="absolute top-[19px] left-[19px] w-[146px] h-[65px] text-11xl text-black">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
          <div className="absolute top-[23.08%] left-[26.03%]">back</div>
        </div>
        <div className="absolute top-[524px] left-[704px] rounded-[65px] w-[178px] h-16 text-6xl text-black">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[20px] bg-lightsteelblue cursor-pointer"
            onClick={onRectangle5Click}
          />
          <div className="absolute h-[46.88%] w-[52.81%] top-[26.56%] right-[23.6%] bottom-[26.56%] left-[23.6%]">
            <div className="absolute top-[0%] left-[0%]">Create</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[154px] left-[12px] w-[299px] h-[524px] text-center text-31xl text-black font-magra">
        <div className="absolute h-[15.46%] w-full top-[31.49%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Sign up `}</p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
