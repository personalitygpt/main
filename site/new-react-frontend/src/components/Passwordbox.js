import { memo, useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='lg'>
      <Input
      className="bg-[transparent] absolute top-[343px] left-[586px] font-inter text-16xl text-darkgray"
      type={show ? 'text': 'password'}
      placeholder="Password"
      size="lg"
      width="428px"
      backgroundColor="#d9d9d9"
      w="428px"
      />
      <InputRightElement width='250px'>
        <Button h='300px' size='lg' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
};

export default PasswordInput;
