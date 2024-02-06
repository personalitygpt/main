import { useState } from "react";
import axios from "axios";
import { Input, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BackbtnForgotpwd from "../components/BackbtnForgotpwd";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const forgotpassword = () => {
    if (email.length === 0) {
      alert("Email should not be left blank");
    } else if (username.length === 0) {
      alert("Password should not be left blank");
    } else {
      axios
        .post("http://127.0.0.1:5000/resetpwd", {
          email: email,
          username: username,
        })
        .then(function (response) {
          console.log(response);
          //console.log(response.data);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
  };

  const onBackButtonContainerClick = () => {
    navigate("/");
  };

  return (
    <div className="relative bg-white w-full h-[737px] overflow-hidden text-left text-31xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] box-border w-[1280px] h-[737px] overflow-hidden border-[3px] border-solid border-black">
        <img
          className="absolute top-[2px] left-[0px] w-[311px] h-[825.5px] object-cover"
          alt=""
          src="/forgotpasswordrectangle@2x.png"
        />
        <div className="absolute top-[320px] left-[12px] w-[299px] h-[206px] text-center">
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
        <Button
          className="absolute top-[453px] left-[711px]"
          colorScheme="personalitygpt"
          size="lg"
          onClick={forgotpassword}
          variant="solid"
          w="178px"
        >
          Reset Password
        </Button>
        <Input
          className="bg-[transparent] absolute top-[249px] left-[586px] font-inter text-16xl text-darkgray"
          placeholder="Email"
          size="lg"
          width="428px"
          backgroundColor="#d9d9d9"
          w="428px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="bg-[transparent] absolute top-[343px] left-[586px] font-inter text-16xl text-darkgray"
          type="username"
          placeholder="Username"
          size="lg"
          width="428px"
          backgroundColor="#d9d9d9"
          w="428px"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="absolute top-[149px] left-[621px] w-[319px] h-12 text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
            Forgot Password
          </div>
        </div>
      </div>
      <div className="absolute top-[19px] left-[16px] w-[146px] h-[65px] text-left text-11xl text-black font-inter">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
        <div className="absolute top-[23.08%] left-[26.03%]" onClick={onBackButtonContainerClick}>back</div>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
