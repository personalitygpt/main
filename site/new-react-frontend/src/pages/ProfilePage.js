import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const onBackButton = () => {
    navigate("/ai-insights");
  };

  const onSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="w-full relative bg-white h-[758px] overflow-hidden">
      <div className="absolute top-[2px] left-[-20px] rounded-[5px] box-border w-[1320px] h-[776px] overflow-hidden border-[1px] border-dashed border-blueviolet">
        <main className="absolute top-[20px] left-[20px] w-[1280px] h-[736px] text-center text-11xl text-black font-inter">
          <div className="absolute h-full w-[23.75%] top-[0%] right-[76.25%] bottom-[0%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
          </div>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden border-[3px] border-solid border-black">
            <div className="absolute top-[408px] left-[565px] w-[399px] h-[171px]" />
            <img
              className="absolute top-[123px] left-[676px] w-[200px] h-[200px] overflow-hidden"
              alt=""
              src="/frame.svg"
            />
            <div className="absolute top-[319px] left-[739px] w-[79px] h-[21px] text-base text-mediumblue">
              <div className="absolute top-[0%] left-[0%] [text-decoration:underline] tracking-[-0.32px] leading-[21px]">
                Add Image
              </div>
            </div>
            <div className="absolute top-[356px] left-[605px] w-[357px] h-[42px] text-xl">
              <div className="absolute w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
                Based on the personality test, your personality is _________
              </div>
            </div>
            <div className="absolute top-[84px] left-[644px] w-[279px] h-[21px] text-21xl">
              <div className="absolute top-[0%] left-[0%] tracking-[-0.32px] leading-[21px]">
                Example Name
              </div>
            </div>
            <div className="absolute top-[24px] left-[25px] w-[146px] h-[65px] text-left">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
              </div>
              <div className="absolute h-[55.38%] w-[47.26%] top-[23.08%] right-[26.71%] bottom-[21.54%] left-[26.03%]">
                <div className="absolute top-[0%] left-[0%]" onClick = {onBackButton}>back</div>
              </div>
            </div>
            <div className="absolute top-[424px] left-[582px] w-[393px] h-[85px]">
              <div className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-300" onClick = {onSettings}/>
                <div className="absolute h-[109.59%] w-[101.53%] top-[26.53%] left-[-21.37%] tracking-[-0.32px] leading-[21px] inline-block">
                  Settings
                </div>
              </div>
              <img
                className="absolute h-[20.59%] w-[4.58%] top-[40%] right-[90.59%] bottom-[39.41%] left-[4.83%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-[35.88%] w-[7.81%] top-[32.94%] right-[88.88%] bottom-[31.18%] left-[3.31%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-full w-[5.85%] top-[0%] right-[3.82%] bottom-[0%] left-[90.33%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
          </div>
          <div className="absolute h-[71.2%] w-[23.36%] top-[23.37%] right-[75.55%] bottom-[5.43%] left-[1.09%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-31xl font-magra">
            <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
              <p className="m-0">{`Welcome to `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`Your `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`Personality `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Profile</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Page</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
