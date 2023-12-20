import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SettingsPage: NextPage = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/text-settings-page1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/account-page");
  }, [router]);

  const onBacksettingsbtnContainerClick = useCallback(() => {
    router.push("/profile-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-31xl text-black font-magra">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
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
        <div className="absolute top-[437px] left-[584px] w-[393px] h-[85px]">
          <div
            className="absolute h-[58.82%] w-full top-[20%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-gainsboro cursor-pointer"
            onClick={onRectangle1Click}
          />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
        </div>
        <div className="absolute top-[304px] left-[584px] w-[393px] h-[85px]">
          <div
            className="absolute h-[57.65%] w-full top-[21.18%] right-[0%] bottom-[21.18%] left-[0%] rounded-2xl bg-gainsboro cursor-pointer"
            onClick={onRectangle2Click}
          />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
          <div className="absolute top-[37.65%] left-[4.58%] tracking-[-0.32px] leading-[21px]">
            Account
          </div>
        </div>
        <div className="absolute top-[371px] left-[584px] w-[393px] h-[85px]">
          <div className="absolute h-[58.82%] w-full top-[21.18%] right-[0%] bottom-[20%] left-[0%] rounded-2xl bg-gainsboro" />
          <img
            className="absolute h-full w-[5.85%] top-[0%] right-[5.6%] bottom-[0%] left-[88.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than2@2x.png"
          />
          <div className="absolute top-[37.65%] left-[4.58%] tracking-[-0.32px] leading-[21px]">
            Audio
          </div>
        </div>
        <div className="absolute top-[471px] left-[602px] tracking-[-0.32px] leading-[21px]">
          Text Settings
        </div>
        <img
          className="absolute top-[104px] left-[683px] w-[155px] h-[158px] overflow-hidden"
          alt=""
          src="/frame1.svg"
        />
        <div
          className="absolute top-[21px] left-[19px] w-[146px] h-[65px] cursor-pointer text-left"
          onClick={onBacksettingsbtnContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-dodgerblue-200" />
          <div className="absolute top-[21.54%] left-[26.03%]">back</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
