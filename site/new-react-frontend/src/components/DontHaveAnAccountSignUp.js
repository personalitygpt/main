import { Link, useNavigate } from "react-router-dom";

const DontHaveAnAccountSignUp = () => {
  const navigate = useNavigate();

  const onDontHaveAnAccountSignUpClick = () => {
    navigate("/sign-up-page");
  };

  return (
    <Link
      className="cursor-pointer [text-decoration:none] absolute top-[543px] left-[635px] w-[345px] h-[18px] text-center text-xl text-black font-inter"
      to="/sign-up-page"
      onClick={onDontHaveAnAccountSignUpClick}
    >
      <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
        Don’t have an account? Sign up here
      </div>
    </Link>
  );
};

export default DontHaveAnAccountSignUp;
