import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AIInsightsPart2: NextPage = () => {
  const router = useRouter();

  const onGroupIconClick = useCallback(() => {
    router.push("/profile-page");
  }, [router]);

  const onRectangle4Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const onRedflagsidebarContainerClick = useCallback(() => {
    router.push("/finding-red-flags");
  }, [router]);

  const onRectangle9Click = useCallback(() => {
    router.push("/view-history");
  }, [router]);

  const onRectangle10Click = useCallback(() => {
    router.push("/different-traits");
  }, [router]);

  const onRectangle11Click = useCallback(() => {
    router.push("/analyze-a-conversation");
  }, [router]);

  const onRectangle12Click = useCallback(() => {
    router.push("/learning-the-meaning-of-differ");
  }, [router]);

  const onRectangle13Click = useCallback(() => {
    router.push("/main-menu");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <img
        className="absolute top-[253px] left-[11px] w-[276px] h-[58px]"
        alt=""
        src="/line-12.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[22px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
      </div>
      <div className="absolute top-[17px] left-[0px] box-border w-[1280px] h-[741px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[42px] left-[1248px] bg-gainsboro w-8 h-[399px]" />
        <div className="absolute top-[51px] left-[342px] w-[902px] h-[72px] text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            AI Insights
          </div>
        </div>
        <div className="absolute top-[399px] left-[411px] w-[381px] h-[98.2px] text-left text-xl">
          <div className="absolute h-[15.27%] w-[3.94%] top-[89.21%] right-[80.05%] bottom-[-4.48%] left-[16.01%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <img
            className="absolute h-[89.61%] w-full top-[0%] right-[0%] bottom-[10.39%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
          />
          <div className="absolute h-[62.12%] w-[78.74%] top-[22.4%] left-[9.71%] tracking-[-0.32px] leading-[21px] inline-block">{`Sure! I could definitely help out. Would you tell me more? `}</div>
        </div>
        <div className="absolute top-[272px] left-[829px] w-[400px] h-[94.2px] text-left text-xl">
          <img
            className="absolute h-[88.11%] w-full top-[0%] right-[0%] bottom-[11.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-4.svg"
          />
          <div className="absolute h-[15.92%] w-[3.75%] top-[88.75%] right-[11.25%] bottom-[-4.67%] left-[85%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[77.49%] w-[83.75%] top-[10.62%] left-[9.75%] tracking-[-0.32px] leading-[21px] inline-block">{`Could you help me? I am having trouble communicating with my coworker. `}</div>
        </div>
        <div className="absolute top-[515px] left-[1082px] w-[198px] h-[129.2px] text-left text-77xl">
          <img
            className="absolute h-[44.89%] w-[57.07%] top-[47.21%] right-[42.93%] bottom-[7.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-62.svg"
          />
          <img
            className="absolute h-[16.41%] w-[10.71%] top-[83.59%] right-[53.94%] bottom-[0%] left-[35.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-58.svg"
          />
          <div className="absolute h-[25.54%] w-[91.92%] top-[0%] left-[8.08%] inline-block">
            ...
          </div>
        </div>
        <img
          className="absolute h-[3.12%] w-[2.08%] top-[0.94%] right-[76.59%] bottom-[95.94%] left-[21.33%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/group3.svg"
          onClick={onGroupIconClick}
        />
        <div className="absolute top-[439px] left-[740px] rounded-[50%] bg-red w-4 h-4" />
        <div className="absolute top-[645px] left-[10px] w-[276px] h-[58px]">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200 cursor-pointer"
            onClick={onRectangle4Click}
          />
          <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
            Log Out
          </div>
        </div>
        <div className="absolute top-[568px] left-[556px] w-[276px] h-[84px]">
          <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-400 hidden" />
          <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] hidden">
            View History
          </div>
        </div>
        <div className="absolute top-[217px] left-[370px] w-[65px] h-[65px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-15@2x.png"
          />
        </div>
        <div className="absolute top-[504px] left-[379px] w-[65px] h-[65px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-15@2x.png"
          />
        </div>
        <div className="absolute top-[674px] left-[448px] w-[696px] h-[45px] text-left text-6xl text-dimgray">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <div className="absolute top-[6px] left-[25px] inline-block w-[420px] h-[34px]">
            {" "}
            Type Here...
          </div>
        </div>
        <div className="absolute top-[137px] left-[421px] w-72 h-[90.2px] text-left text-xl">
          <img
            className="absolute h-[88.69%] w-full top-[0%] right-[0%] bottom-[11.31%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-61.svg"
          />
          <div className="absolute h-[16.63%] w-[5.21%] top-[88.25%] right-[82.64%] bottom-[-4.88%] left-[12.15%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[69.84%] w-[88.89%] top-[6.65%] left-[10.42%] tracking-[-0.32px] leading-[21px] inline-block">
            Welcome to PersonalityGPT! How may I assist you today?
          </div>
        </div>
        <div className="absolute top-[476px] left-[10px] w-[276px] h-[84px]">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] cursor-pointer"
            onClick={onRedflagsidebarContainerClick}
          >
            <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-400" />
            <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
              Finding Red Flags
            </div>
            <img
              className="absolute h-[51.19%] w-[4.35%] top-[13.1%] right-[6.52%] bottom-[35.71%] left-[89.13%] max-w-full overflow-hidden max-h-full object-cover hidden"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
          <img
            className="absolute h-[51.19%] w-[4.35%] top-[7.14%] right-[5.07%] bottom-[41.67%] left-[90.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[560px] left-[12px] w-[276px] h-[84px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-400 cursor-pointer"
              onClick={onRectangle9Click}
            />
            <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              View History
            </div>
          </div>
          <img
            className="absolute h-[51.19%] w-[4.35%] top-[8.33%] right-[6.88%] bottom-[40.48%] left-[88.77%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[397px] left-[8px] w-[276px] h-[79px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-whitesmoke-400 cursor-pointer"
              onClick={onRectangle10Click}
            />
            <div className="absolute h-[89.87%] w-[27.54%] top-[10.13%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
              Different Traits
            </div>
          </div>
          <img
            className="absolute h-[54.43%] w-[4.35%] top-[11.39%] right-[6.16%] bottom-[34.18%] left-[89.49%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[314px] left-[8px] w-[276px] h-[83px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-whitesmoke-400 cursor-pointer"
              onClick={onRectangle11Click}
            />
            <div className="absolute h-[86.75%] w-[43.48%] top-[13.25%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
              Analyze a conversation
            </div>
          </div>
          <img
            className="absolute h-[51.81%] w-[4.35%] top-[9.64%] right-[5.07%] bottom-[38.55%] left-[90.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[233px] left-[10px] w-[276px] h-20">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-400 cursor-pointer"
              onClick={onRectangle12Click}
            />
            <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Learning the meaning of different phrases
            </div>
          </div>
          <img
            className="absolute h-[53.75%] w-[4.35%] top-[10%] right-[5.07%] bottom-[36.25%] left-[90.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[149px] left-[9px] w-[276px] h-[81px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100 cursor-pointer"
              onClick={onRectangle13Click}
            />
            <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Communicating with a certain personality
            </div>
          </div>
          <img
            className="absolute h-[53.09%] w-[4.35%] top-[9.88%] right-[5.8%] bottom-[37.04%] left-[89.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[54px] left-[9px] w-[276px] h-[69px]">
          <div className="absolute h-[84.06%] w-full top-[15.94%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-lightgray" />
          <div className="absolute h-full w-full top-[0%] right-[-1.09%] bottom-[0%] left-[1.09%]">
            <div className="absolute h-[72.46%] w-[48.55%] top-[44.93%] left-[25.36%] tracking-[-0.32px] leading-[21px] inline-block">
              New Chat
            </div>
            <img
              className="absolute h-[62.32%] w-[4.35%] top-[36.23%] right-[6.52%] bottom-[1.45%] left-[89.13%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[195px] left-[748px] w-[265px] h-[274px] text-left text-xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-br-2xl rounded-bl-none bg-darkgray-100 mix-blend-normal" />
        <div className="absolute top-[21.9%] left-[4.91%] tracking-[-0.32px] leading-[21px] whitespace-pre-wrap">
          <span>{`Confidence: `}</span>
          <span className="text-limegreen">{`85%  `}</span>
        </div>
        <div className="absolute top-[33.94%] left-[4.91%] tracking-[-0.32px] leading-[21px]">
          <span>{`Sentiment: `}</span>
          <span className="text-yellow">Happy, curious</span>
        </div>
        <div className="absolute top-[62.77%] left-[4.15%] tracking-[-0.32px] leading-[21px]">
          <p className="m-0">Intention: Clarify the user’s</p>
          <p className="m-0">miscommunication with</p>
          <p className="m-0">their coworker</p>
        </div>
        <div className="absolute top-[6.93%] left-[22.26%] text-6xl tracking-[-0.32px] leading-[21px]">
          AI Perception
        </div>
      </div>
    </div>
  );
};

export default AIInsightsPart2;
