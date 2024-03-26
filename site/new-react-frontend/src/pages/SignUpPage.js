import { Input, Button, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import BackbtnForgotpwd from "../components/BackbtnForgotpwd";

function SignUpPage() {
  const [email,setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const registerUser = () => {
    axios.post('http://127.0.0.1:5000/signup', {
        email: email,
        username: username,
        password: password
    })
    .then(function (response) {
         console.log(response);
        navigate("/login-page");
    })
    .catch(function (error) {
        console.log(error, 'error');
        if (error.response.status === 401) {
            alert("Invalid credentials");
        }
    });
};

  const onBackbtnForgotpwdContainerClick = () => {
    navigate("/");
  };

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-left text-31xl text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <Input
          className="bg-[transparent] absolute top-[246px] left-[603px] font-inter text-16xl text-darkgray"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          width="405px"
          backgroundColor="#d9d9d9"
          w="405px"
        />
        <div className="absolute top-[119px] left-[556px] w-[486px] h-[61px]">
          <div className="absolute top-[0%] left-[0%]">Create your account</div>
        </div>
        <div
          className="absolute top-[19px] left-[19px] w-[146px] h-[65px] cursor-pointer"
          onClick={onBackbtnForgotpwdContainerClick}
        >
          <BackbtnForgotpwd />
        </div>
        <Button
        className="absolute top-[524px] left-[704px]"
        colorScheme="personalitygpt"
        size="lg"
        variant="solid"
        w="178px"
        onClick={registerUser}>
          Create
        </Button>
        <Input
        className="bg-[transparent] absolute top-[420px] left-[603px] font-inter text-16xl text-darkgray"
        type='password'
        placeholder="Password"
        size="lg"
        width="428px"
        backgroundColor="#d9d9d9"
        w="428px"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="bg-[transparent] absolute top-[333px] left-[603px] font-inter text-16xl text-darkgray"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          width="428px"
          backgroundColor="#d9d9d9"
          w="428px"
        />
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
