import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ProfilePage: NextPage = () => {
  const router = useRouter();

  const onBackbtnprofileContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRectangleContainer1Click = useCallback(() => {
    router.push("/color-pallete-blue");
  }, [router]);

  const onColorTonesContainerClick = useCallback(() => {
    router.push("/color-pallete-blue");
  }, [router]);

  const onRectangleContainer2Click = useCallback(() => {
    router.push("/settings-page");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/settings-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-11xl text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[304px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
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
        <div
          className="absolute top-[24px] left-[25px] w-[146px] h-[65px] cursor-pointer text-left"
          onClick={onBackbtnprofileContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
          </div>
          <div className="absolute h-[55.38%] w-[47.26%] top-[23.08%] right-[26.71%] bottom-[21.54%] left-[26.03%]">
            <div className="absolute top-[0%] left-[0%]">back</div>
          </div>
        </div>
        <div className="absolute top-[491px] left-[543px] w-[437px] h-[85px]">
          <div
            className="absolute h-[58.82%] w-[89.93%] top-[21.18%] right-[0%] bottom-[20%] left-[10.07%] cursor-pointer"
            onClick={onRectangleContainer1Click}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-200" />
          </div>
          <div
            className="absolute h-[42.35%] w-[87.87%] top-[37.65%] right-[12.13%] bottom-[20%] left-[0%] cursor-pointer"
            onClick={onColorTonesContainerClick}
          >
            <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
              Color Tones
            </div>
          </div>
          <div className="absolute h-[47.06%] w-[8.24%] top-[27.06%] right-[78.26%] bottom-[25.88%] left-[13.5%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="absolute h-full w-[5.26%] top-[0%] right-[2.06%] bottom-[0%] left-[92.68%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than2@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[424px] left-[582px] w-[393px] h-[85px]">
          <div
            className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%] cursor-pointer"
            onClick={onRectangleContainer2Click}
          >
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-200 cursor-pointer"
              onClick={onRectangle2Click}
            />
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
            src="/vector1.svg"
          />
          <div className="absolute h-full w-[5.85%] top-[0%] right-[3.82%] bottom-[0%] left-[90.33%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[194px] left-[14px] w-[299px] h-[524px] text-31xl font-magra">
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
    </div>
  );
};

export default ProfilePage;
