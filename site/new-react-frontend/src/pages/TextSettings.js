import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const TextSettingsPage = () => {
  const navigate = useNavigate();

  const onBackClick = () => { 
      navigate("/settings");
  };

  return (
    <div className="w-full relative bg-white h-[764px] overflow-hidden text-center text-[100px] text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[96px] left-[718px] w-[162px] h-[77px]">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            Aa
          </div>
        </div>
        <Stack className="absolute top-[226px] left-[369px]">
          <Menu>
            <MenuButton
              w="591px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="blue"
            >
            Text Size
            </MenuButton>
            <MenuList>
              <MenuItem fontSize='lg'>10</MenuItem>
              <MenuItem fontSize='lg'>12</MenuItem>
              <MenuItem fontSize='lg'>14</MenuItem>
              <MenuItem fontSize='lg'>16</MenuItem>
              <MenuItem fontSize='lg'>20</MenuItem>
              <MenuItem fontSize='lg'>24</MenuItem>
              <MenuItem fontSize='lg'>30</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack className="absolute top-[342px] left-[369px]">
          <Menu>
            <MenuButton
              w="591px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="blue"
            >
            Text Font
            </MenuButton>
            <MenuList>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Arial' }}>Arial</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Comic Sans' }}>Comic Sans</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Times New Roman' }}>Times New Roman</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Italia' }}>Italia</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Kadwa' }}>Kadwa</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Inria Sans' }}>Inria Sans</MenuItem>
              <MenuItem fontSize='lg' style={{ fontFamily: 'Lao Muang Don' }}>Lao Muang Don</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Button
          className="absolute top-[18px] left-[22px]"
          colorScheme="blue"
          variant="solid"
          w="146px"
          onClick={onBackClick}
        >
          back
        </Button>
      </div>
      <div className="absolute top-[291px] left-[0px] w-[299px] h-28 text-31xl font-magra">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Text `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default TextSettingsPage;