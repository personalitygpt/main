import { useCallback } from "react";
import { Input, Button, IconButton } from "@chakra-ui/react";
import axios from "axios";

const AccountPage = () => {
  const onRectangleClick = () => {
    navigate("/settings");
  };

  return (
    <div className="w-full h-[758px] relative bg-white overflow-hidden text-center text-[50px] text-black font-magra">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[332px] left-[0px] w-[299px] h-[206px]">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Account `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">page</p>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <Input
          className="bg-[transparent] absolute top-[338px] left-[392px] font-inter text-21xl text-darkgray"
          placeholder="Email"
          width="734px"
          w="734px"
        />
        <Input
          className="bg-[transparent] absolute top-[228px] left-[392px] font-inter text-21xl text-darkgray"
          placeholder="Username"
          width="710px"
          w="710px"
        />
        <Button
          className="bg-[transparent] absolute top-[433px] left-[392px] font-inter text-21xl text-darkgray"
          colorScheme="blue"
          variant="solid"
          as="a"
          width="710px"
          w="710px"
          href="/change-password"
        >
          Password
        </Button>
        <Button
          className="absolute top-[23px] left-[22px] cursor-pointer"
          colorScheme="blue"
          variant="solid"
          as="a"
          href="/settings"
          onClick={onRectangleClick}
        >
          back
        </Button>
      </div>
    </div>
  );
};

export default AccountPage;
