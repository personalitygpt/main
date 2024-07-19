import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {

  const navigate = useNavigate();

  const onBackButton = () => {
    navigate("/account-page")
  };

  return (
    <div className="w-full relative bg-white h-[761px] overflow-hidden text-left text-16xl text-darkgray font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[299px] left-[606px] w-[169px] h-[42px]">
        <div className="absolute top-[0%] left-[0%]">Username</div>
      </div>
      <div className="absolute top-[306px] left-[6px] w-[299px] h-[174px] text-center text-31xl text-black font-magra">
        <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
          <p className="m-0">{`Password `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">page</p>
        </div>
      </div>
      <div className="absolute top-[277px] left-[561px] w-[428px] h-16">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute h-[65.63%] w-[39.49%] top-[17.19%] right-[57.71%] bottom-[17.19%] left-[2.8%]">
          <div className="absolute top-[0%] left-[0%]">Username</div>
        </div>
      </div>
      <div className="absolute top-[198px] left-[561px] w-[428px] h-16">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute h-[65.63%] w-[20.56%] top-[10.94%] right-[76.64%] bottom-[23.44%] left-[2.8%]">
          <div className="absolute top-[0%] left-[0%]">Email</div>
        </div>
      </div>
      <div className="absolute top-[131px] left-[607px] w-[354px] h-12 text-21xl text-black">
        <div className="absolute top-[0%] left-[0%]">Change Password!</div>
      </div>
      <div className="absolute top-[519px] left-[561px] w-[428px] h-16">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute h-[65.63%] w-[90.65%] top-[17.19%] right-[6.54%] bottom-[17.19%] left-[2.8%]">
          <div className="absolute top-[0%] left-[0%]">
            Confirm New Password
          </div>
        </div>
      </div>
      <div className="absolute top-[361px] left-[561px] w-[428px] h-16">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute h-[65.63%] w-[69.39%] top-[20.31%] right-[27.8%] bottom-[14.06%] left-[2.8%]">
          <div className="absolute top-[0%] left-[0%]">Current Password</div>
        </div>
      </div>
      <div className="absolute top-[440px] left-[561px] w-[428px] h-16">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute h-[65.63%] w-[57.71%] top-[17.19%] right-[39.49%] bottom-[17.19%] left-[2.8%]">
          <div className="absolute top-[0%] left-[0%]">New Password</div>
        </div>
      </div>
      <div className="absolute top-[609px] left-[660px] w-[280px] h-16 text-center text-6xl text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
        </div>
        <div className="absolute h-[46.88%] w-[68.21%] top-[26.56%] right-[16.07%] bottom-[26.56%] left-[15.71%]">
          <div className="absolute w-full top-[0%] left-[0%] inline-block">
            Change!
          </div>
        </div>
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden text-11xl text-black border-[3px] border-solid border-black">
        <div className="absolute top-[34px] left-[27px] w-[146px] h-[65px]" onClick = {onBackButton}>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
          <div className="absolute top-[23.08%] left-[26.03%]">back</div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
