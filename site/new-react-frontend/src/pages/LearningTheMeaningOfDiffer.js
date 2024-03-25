import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LearningTheMeaningOfDiffer = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    navigate("/");
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

  return (
    <div className="w-full relative bg-white h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[42px] left-[1248px] w-8 h-[399px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
        </div>
        <div className="absolute top-[42px] left-[309px] w-[902px] h-[72px] text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            Learning the meaning of different phrases
          </div>
        </div>
        <div className="absolute top-[401px] left-[411px] w-[418px] h-[158.2px] text-left text-xl">
          <div className="absolute h-[9.48%] w-[3.59%] top-[93.3%] right-[81.82%] bottom-[-2.78%] left-[14.59%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <img
            className="absolute h-[93.55%] w-full top-[0%] right-[0%] bottom-[6.45%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
          />
          <div className="absolute h-[77.12%] w-[82.3%] top-[13.27%] left-[8.85%] tracking-[-0.32px] leading-[21px] inline-block">
            “Bro” refers to a general audience and is a signal for an informal
            conversation. “lol” or “laugh out loud” is used to indicate when one
            finds a remark funny.
          </div>
        </div>
        <div className="absolute top-[307px] left-[795px] w-[400px] h-[94.2px] text-left text-xl">
          <img
            className="absolute h-[88.11%] w-full top-[0%] right-[0%] bottom-[11.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-4.svg"
          />
          <div className="absolute h-[15.92%] w-[3.75%] top-[88.75%] right-[11.25%] bottom-[-4.67%] left-[85%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute w-[79.25%] top-[10.62%] left-[14.25%] tracking-[-0.32px] leading-[21px] inline-block">
            I just took the test and was deemed neurotic. What does this mean
            and is it bad?
          </div>
        </div>
        <div className="absolute top-[123px] left-[411px] w-72 h-[90.2px] text-left text-xl">
          <img
            className="absolute h-[88.69%] w-full top-[0%] right-[0%] bottom-[11.31%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-1.svg"
          />
          <div className="absolute h-[16.63%] w-[5.21%] top-[88.25%] right-[82.64%] bottom-[-4.88%] left-[12.15%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[69.84%] w-[88.89%] top-[18.85%] left-[8.33%] tracking-[-0.32px] leading-[21px] inline-block">
            Hello! What phrases would you like to learn about?
          </div>
        </div>
        <div className="absolute top-[213px] left-[1019px] w-[193px] h-[76.2px] text-left text-xl">
          <img
            className="absolute h-[86.61%] w-[88.6%] top-[0%] right-[11.4%] bottom-[13.39%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-3.svg"
          />
          <img
            className="absolute h-[27.82%] w-[10.98%] top-[72.18%] right-[34.09%] bottom-[0%] left-[54.92%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/rectangle-45.svg"
          />
          <div className="absolute h-[35.43%] w-[88.08%] top-[28.87%] left-[11.92%] tracking-[-0.32px] leading-[21px] inline-block">
            “Bro” and “lol”
          </div>
        </div>
        <img
          className="absolute top-[229px] left-[381px] w-[65px] h-[65px] object-cover"
          alt=""
          src="/image-15@2x.png"
        />
        <img
          className="absolute top-[565px] left-[392px] w-[65px] h-[65px] object-cover"
          alt=""
          src="/image-15@2x.png"
        />
        <div className="absolute top-[644px] left-[19px] w-[276px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200" onClick ={onLogOutClick}/>
          <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
            Log Out
          </div>
        </div>
        <img
          className="absolute top-[31px] left-[258px] w-[26.6px] h-[22.9px]"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[662px] left-[467px] w-[696px] h-[45px] text-left text-6xl text-dimgray">
          <Input
            className="bg-[transparent] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
            placeholder="Type Here"
            size="lg"
            width="696px"
            w="696px"
          />
          <div className="absolute top-[6px] left-[25px] hidden w-[420px] h-[34px]">
            {" "}
            Type Here...
          </div>
        </div>
        <div className="absolute top-[497px] left-[1070px] w-[198px] h-[129.2px] text-left text-77xl">
          <img
            className="absolute h-[44.89%] w-[57.07%] top-[47.21%] right-[42.93%] bottom-[7.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-3.svg"
          />
          <img
            className="absolute h-[16.41%] w-[10.71%] top-[83.59%] right-[52.93%] bottom-[0%] left-[36.36%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/rectangle-45.svg"
          />
          <div className="absolute h-[25.54%] w-[91.92%] top-[0%] left-[8.08%] inline-block">
            ...
          </div>
        </div>
        <div className="absolute top-[74px] left-[19px] w-[276px] h-[69px]">
          <div className="absolute h-[84.06%] w-full top-[15.94%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-whitesmoke-100" />
          <div className="absolute h-full w-full top-[0%] right-[-1.09%] bottom-[0%] left-[1.09%]" onClick = {onAIInsightsClick}>
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
        <div className="absolute top-[162px] left-[19px] w-[276px] h-[81px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" />
            <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Communicating with a certain personality
            </div>
          </div>
          <img
            className="absolute h-[53.09%] w-[4.35%] top-[7.41%] right-[5.43%] bottom-[39.51%] left-[90.22%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[237px] left-[19px] w-[276px] h-20">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-lightgray cursor-pointer"
              onClick={onLearningMeaningDifferentPhrases}
            />
            <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Learning the meaning of different phrases
            </div>
          </div>
        </div>
        <div className="absolute top-[316px] left-[19px] w-[276px] h-[83px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onAnalyzeConvo}/>
            <div className="absolute h-[86.75%] w-[43.48%] top-[13.25%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
              Analyze a conversation
            </div>
          </div>
          <img
            className="absolute h-[51.81%] w-[4.35%] top-[10.84%] right-[5.07%] bottom-[37.35%] left-[90.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <div className="absolute top-[475px] left-[15px] w-[276px] h-[84px]">
          <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onRedFlagsClick}/>
          <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
            Finding Red Flags
          </div>
          <img
            className="absolute h-[51.19%] w-[4.35%] top-[9.52%] right-[4.71%] bottom-[39.29%] left-[90.94%] max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
        <img
          className="absolute h-[5.84%] w-[0.94%] top-[65.63%] right-[78.52%] bottom-[28.53%] left-[20.55%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/more-than@2x.png"
        />
        <div className="absolute top-[560px] left-[15px] w-[276px] h-[84px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onViewHistory}/>
            <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              View History
            </div>
          </div>
          <img
            className="absolute h-[51.19%] w-[4.35%] top-[9.52%] right-[6.16%] bottom-[39.29%] left-[89.49%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[416px] left-[17px] w-[276px] h-[79px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onDifferentTraits}/>
          <div className="absolute h-[89.87%] w-[27.54%] top-[10.13%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
            Different Traits
          </div>
        </div>
        <img
          className="absolute h-[54.43%] w-[4.35%] top-[10.13%] right-[5.8%] bottom-[35.44%] left-[89.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/more-than@2x.png"
        />
      </div>
    </div>
  );
};

export default LearningTheMeaningOfDiffer;

