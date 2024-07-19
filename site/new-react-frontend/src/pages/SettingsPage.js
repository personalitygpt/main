import { Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {

  const navigate = useNavigate();

  const onTextSettingsClick = () => {
    navigate("/text-settings");
  };

  const onAccountClick = () => {
    navigate("/account-page")
  };

  return (
    <div className="w-full relative bg-white h-[758px] overflow-hidden text-center text-31xl text-black font-magra">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[302px] left-[0px] w-[299px] h-[267px]">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Settings `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">page</p>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden text-11xl font-inter border-[3px] border-solid border-black">
        <Button
          className="absolute top-[304px] left-[584px]"
          colorScheme="personalitygpt"
          variant="outline"
          w="393px"
          as="a"
          href="/account-page"
          onClick={onAccountClick}
        >
          Account
        </Button>
        <Button
          className="absolute top-[371px] left-[584px]"
          variant="outline"
          w="393px"
          colorScheme="teal"
          href="/text-settings"
          onClick = {onTextSettingsClick}
        >
          Text Settings
        </Button>
        <img
          className="absolute top-[104px] left-[707px] w-[155px] h-[158px] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
        <Button
          className="absolute top-[21px] left-[19px]"
          colorScheme="blue"
          variant="solid"
          w="146px"
          as="a"
          href="/profile"
        >
          back
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
