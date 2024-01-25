import { useState } from "react";
import axios from 'axios';
import { Input, Button, IconButton } from "@chakra-ui/react";
import DontHaveAnAccountSignUp from "../components/DontHaveAnAccountSignUp";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../components/ForgotPassword";

function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const logInUser = () => {
    if (username.length === 0) {
      alert("Username should not be left Blank!");
    }
    else if(password.length === 0) {
      alert("Password should not be left Blank!");
    }
    else {
        axios.post('http://127.0.0.1:5000/login', {
            username: username,
            password: password
        })
        .then(function (response) {
            console.log(response);
            //console.log(response.data);
            navigate("/ai-insights");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    }     
}

  const onForgotPasswordContainerClick = () => {
    navigate("/forgot-password-page");
  };

  const onSignUpContainerClick = () => {
    navigate("/sign-up-page");
  };

  return (
    <div className="relative bg-white w-full h-[753px] overflow-hidden text-center text-31xl text-black font-inter lg:w-[1285px]">
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
      <div className="absolute top-[17px] left-[5px] box-border w-[1280px] h-[736px] overflow-hidden text-left text-xl border-[3px] border-solid border-black">
        <Button
        className="absolute top-[453px] left-[711px]"
        colorScheme="personalitygpt"
        size="lg"
        onClick={logInUser}
        variant="solid"
        w="178px">
          Login
        </Button>
        <DontHaveAnAccountSignUp 
        onClick={onSignUpContainerClick}/>
        <Input
        className="bg-[transparent] absolute top-[249px] left-[586px] font-inter text-16xl text-darkgray"
        placeholder="Username"
        size="lg"
        width="428px"
        backgroundColor="#d9d9d9"
        w="428px"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <Input
        className="bg-[transparent] absolute top-[343px] left-[586px] font-inter text-16xl text-darkgray"
        type='password'
        placeholder="Password"
        size="lg"
        width="428px"
        backgroundColor="#d9d9d9"
        w="428px"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className="absolute top-[418px] left-[845px] w-44 h-[25px] cursor-pointer"
          onClick={onForgotPasswordContainerClick}
        >
          <ForgotPassword />
        </div>
        <div className="absolute top-[180px] left-[755px] w-[90px] h-[21px] text-center text-16xl">
          <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
