import type { NextPage } from "next";
import { Input, Button, IconButton } from "@chakra-ui/react";

const SignUpPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-left text-31xl text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <Input
          className="bg-[transparent] absolute top-[336px] left-[603px]"
          placeholder="Username"
          backgroundColor="#d9d9d9"
        />
        <Input
          className="bg-[transparent] absolute top-[240px] left-[600px]"
          placeholder="Email"
          backgroundColor="#d9d9d9"
        />
        <Input
          className="bg-[transparent] absolute top-[426px] left-[603px]"
          placeholder="Password"
          backgroundColor="#d9d9d9"
        />
        <div className="absolute top-[119px] left-[556px] w-[379px] h-[61px]">
          <div className="absolute top-[0%] left-[0%]">Create your account</div>
        </div>
        <Button
          className="absolute top-[19px] left-[19px]"
          colorScheme="personalitygpt"
          variant="solid"
          w="146px"
          as="a"
          href="/login-page"
        >
          back
        </Button>
        <Button
          className="absolute top-[524px] left-[704px]"
          colorScheme="personalitygpt"
          variant="solid"
          w="178px"
          as="a"
          href="/personality-quiz"
        >
          Create
        </Button>
      </div>
      <div className="absolute top-[154px] left-[12px] w-[299px] h-[524px] text-center font-magra">
        <div className="absolute h-[15.46%] w-full top-[31.49%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Sign up `}</p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
