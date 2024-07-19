import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OpenAI } from "openai";

const FindingRedFlags = () => {

  const navigate = useNavigate();

  const onLogOutClick = () => {
    navigate("/");
  };
 
  const onCommPersonalityclick = () => {
    navigate('/comm-person');
  };
 
  const onSettingsClick = () => {
    navigate("/profile");
  };

  const onRedFlagsClick = () => {
    navigate("/red-flags")
  };

  const onAIInsightsClick = () => {
    navigate("/ai-insights");
  };

  const onLearningMeaningDifferentPhrases = () => {
    navigate("/learning-the-meaning-of-different-phrases")
  };

  const onViewHistory = () => {
    navigate("/view-hist")
  };

  const onDifferentTraits = () => {
    navigate("/different-traits")
  };

  const onAnalyzeConvo = () => {
    navigate('/analyze-conv')
  };

  const onRedFlags2 = () => {
    navigate("/red-flags-2")
  };


  return (
    <div className="relative bg-white w-full h-[762px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1347px] h-[22px]" />
      <div className="absolute top-[11px] left-[0px] box-border w-[1347px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[71px] left-[1315px] w-8 h-[399px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute top-[82px] left-[461px] w-[511px] h-[83px] text-left text-xl text-royalblue">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <p className="m-0">
              {" "}
              Please note that this tool highlights concerns, but always use
              your best judgment or seek expert advice.
            </p>
            <p className="m-0">{`Here is a brief list of the most common red flags noted. `}</p>
          </div>
        </div>
        <div className="absolute top-[22px] left-[200px] w-[1065px] h-[82px] text-21xl">
          <div className="absolute h-[87.8%] w-[84.69%] top-[12.2%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">{`Finding `}</div>
          <img
            className="absolute h-[58.54%] w-[6.38%] top-[0%] right-[43.29%] bottom-[41.46%] left-[50.33%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <div className="absolute h-[87.8%] w-[84.69%] top-[10.98%] left-[15.31%] tracking-[-0.32px] leading-[21px] inline-block">
            ‘s
          </div>
        </div>
        <img
          className="absolute top-[25px] left-[257px] w-[26.6px] h-[22.9px]"
          alt=""
          src="/group.svg"
          onClick = {onSettingsClick}
        />
        <div className="absolute top-[642px] left-[14px] w-[276px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200" onClick = {onLogOutClick}/>
          <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
            Log Out
          </div>
        </div>
        <div className="absolute top-[76px] left-[15px] w-[276px] h-[69px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[84.06%] w-full top-[0%] right-[0%] bottom-[15.94%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onAIInsightsClick}/>
            <div className="absolute h-[72.46%] w-[48.55%] top-[27.54%] left-[25.36%] tracking-[-0.32px] leading-[21px] inline-block">
              New Chat
            </div>
          </div>
          <img
            className="absolute h-[62.32%] w-[4.35%] top-[18.84%] right-[5.8%] bottom-[18.84%] left-[89.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[158px] left-[14px] w-[276px] h-[81px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" onClick = {onCommPersonalityclick}/>
            <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Communicating with a certain personality
            </div>
          </div>
          <img
            className="absolute h-[53.09%] w-[4.35%] top-[8.64%] right-[3.99%] bottom-[38.27%] left-[91.67%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[239px] left-[14px] w-[276px] h-20">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onLearningMeaningDifferentPhrases}/>
            <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Learning the meaning of different phrases
            </div>
          </div>
          <img
            className="absolute h-[53.75%] w-[4.35%] top-[10%] right-[3.62%] bottom-[36.25%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[319px] left-[16px] w-[276px] h-[83px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onAnalyzeConvo}/>
            <div className="absolute h-[86.75%] w-[43.48%] top-[13.25%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
              Analyze a conversation
            </div>
          </div>
          <img
            className="absolute h-[51.81%] w-[4.35%] top-[8.43%] right-[5.07%] bottom-[39.76%] left-[90.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[401px] left-[14px] w-[276px] h-[79px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onDifferentTraits}/>
            <div className="absolute h-[89.87%] w-[27.54%] top-[10.13%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
              Different Traits
            </div>
          </div>
          <img
            className="absolute h-[54.43%] w-[4.35%] top-[10.13%] right-[4.35%] bottom-[35.44%] left-[91.3%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[480px] left-[16px] w-[276px] h-[84px]">
          <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-lightgray" onClick = {onRedFlagsClick}/>
          <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
            Finding Red Flags
          </div>
        </div>
        <img
          className="absolute top-[488px] left-[268px] w-3 h-[43px] object-cover"
          alt=""
          src="/more-than@2x.png"
        />
        <div className="absolute top-[558px] left-[14px] w-[276px] h-[84px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onViewHistory}/>
            <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              View History
            </div>
          </div>
          <img
            className="absolute h-[51.19%] w-[4.35%] top-[10.71%] right-[6.16%] bottom-[38.1%] left-[89.49%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[306px] left-[383px] text-xl tracking-[-0.32px] leading-[32px] text-left inline-block w-[918px] h-[108px]">
          <ul className="m-0 font-inherit text-inherit pl-[27px]">
            <li className="mb-0">{`Lack of communication `}</li>
            <li className="mb-0">
              This could indicate that the person you are trying to reach is not
              interested in talking to you
            </li>
            <li className="mb-0">{`One word answers `}</li>
            <li className="mb-0">
              This indicates that the person is either uninterested in
              communication or has been annoyed by you in some way
            </li>
            <li className="mb-0">{`Passive Aggressive Comments `}</li>
            <li className="mb-0">{`This is a common indication that someone has been annoyed with previous actions of yours and that is now affecting their mood. `}</li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`If you would like to seek further advice based on your current situation, please visit the New Chat window in the sidebar on the left. `}</p>
        </div>
        <div className="absolute h-[5.16%] w-[11.88%] top-[13.04%] right-[6.31%] bottom-[81.79%] left-[81.81%] rounded-9xl bg-gainsboro" onclick = {onRedFlags2}/>
        <div className="absolute h-[4.48%] w-[6.09%] top-[13.73%] left-[84.71%] text-xl text-left inline-block">
          Go to AI
        </div>
      </div>
    </div>
  );
};

export default FindingRedFlags;
