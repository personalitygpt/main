import { useNavigate } from "react-router-dom";
import {Input, Button} from "@chakra-ui/react";

const ViewHistory = () => {
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

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[0px] left-[0px] w-[1280px] overflow-hidden flex flex-col items-center justify-start">
        <div className="self-stretch relative h-[758px]">
          <div className="absolute h-[97.1%] w-[24.3%] top-[2.9%] right-[75.7%] bottom-[0%] left-[0%] bg-lightsteelblue" />
          <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
            <div className="absolute h-[10.87%] w-[21.56%] top-[33.29%] right-[76.48%] bottom-[55.84%] left-[1.95%]">
              <div className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-200" />
              <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
                Learning the meaning of different phrases
              </div>
              <img
                className="absolute h-[55%] w-[4.35%] top-[10%] right-[3.62%] bottom-[35%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
            <div className="absolute h-[9.38%] w-[21.56%] top-[12.77%] right-[76.48%] bottom-[77.85%] left-[1.95%]">
              <div className="absolute h-[84.06%] w-full top-[0%] right-[0%] bottom-[15.94%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onAIInsightsClick}/>
              <div className="absolute h-[72.46%] w-[48.55%] top-[27.54%] left-[25.36%] tracking-[-0.32px] leading-[21px] inline-block">
                New Chat
              </div>
              <img
                className="absolute h-[62.32%] w-[4.35%] top-[13.04%] right-[3.62%] bottom-[24.64%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
            <div className="absolute h-[11.01%] w-[21.56%] top-[23.23%] right-[76.41%] bottom-[65.76%] left-[2.03%]">
              <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" onClick = {onCommPersonalityclick}/>
              <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
                Communicating with a certain personality
              </div>
              <img
                className="absolute h-[53.09%] w-[4.35%] top-[6.17%] right-[4.35%] bottom-[40.74%] left-[91.3%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
            <div className="absolute h-[11.28%] w-[21.56%] top-[45.52%] right-[76.56%] bottom-[43.21%] left-[1.88%]">
              <div className="absolute h-[69.88%] w-full top-[-12.05%] right-[0%] bottom-[42.17%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onAnalyzeConvo}/>
              <div className="absolute h-[86.75%] w-[43.48%] top-[1.2%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
                Analyze a conversation
              </div>
              <img
                className="absolute h-[53.01%] w-[4.35%] top-[-2.41%] right-[3.62%] bottom-[49.4%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
            <div className="absolute h-[10.73%] w-[21.56%] top-[56.11%] right-[76.41%] bottom-[33.15%] left-[2.03%]">
              <div className="absolute h-[73.42%] w-full top-[-12.66%] right-[0%] bottom-[39.24%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onDifferentTraits}/>
              <img
                className="absolute h-[55.7%] w-[4.35%] top-[-3.8%] right-[3.62%] bottom-[48.1%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
              <div className="absolute h-[89.87%] w-[27.54%] top-[-2.53%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
                Different Traits
              </div>
            </div>
            <div className="absolute top-[502px] left-[12px] w-[276px] h-[82px]" />
            <div className="absolute top-[554px] left-[25px] w-[276px] h-[82px]">
              <div className="absolute h-[70.73%] w-full top-[0%] right-[0%] bottom-[29.27%] left-[0%] rounded-2xl bg-lightgray" onClick = {onViewHistory}/>
              <div className="absolute h-[86.59%] w-[23.19%] top-[13.41%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
                View History
              </div>
            </div>
            <div className="absolute h-[7.88%] w-[21.56%] top-[86.41%] right-[76.48%] bottom-[5.71%] left-[1.95%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200" onClick = {onLogOutClick}/>
              <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
                Log Out
              </div>
            </div>
            <div className="absolute h-[11.41%] w-[21.56%] top-[65.76%] right-[76.48%] bottom-[22.83%] left-[1.95%]">
              <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onRedFlagsClick}/>
              <img
                className="absolute h-[52.38%] w-[4.35%] top-[9.52%] right-[3.62%] bottom-[38.1%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
              <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
                Finding Red Flags
              </div>
            </div>
            <img
              className="absolute h-[3.21%] w-[2.08%] top-[2.58%] right-[77.69%] bottom-[94.21%] left-[20.23%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
              onClick = {onSettingsClick}
            />
            <div className="absolute top-[237px] left-[389px] w-[304px] h-[98.2px]" />
            <div className="absolute top-[609px] left-[397px] w-[21.2px] h-[21.2px]">
              <div className="absolute h-[70.75%] w-[70.75%] top-[50%] right-[29.25%] bottom-[-20.75%] left-[0%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
            </div>
            <img
              className="absolute top-[532px] left-[357px] w-[304px] h-[89px]"
              alt=""
              src="/chat-bubble-8.svg"
            />
            <div className="absolute top-[540px] left-[397px] w-[229px] h-[74px] text-left text-xl">
              <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
                Welcome to PersonalityGPT! How may I assist you today?
              </div>
            </div>
            <div className="absolute top-[88px] left-[429px] w-[667px] h-[69px] text-[24px]">
              <div className="absolute h-[82.61%] w-[85.01%] top-[0%] right-[5.55%] bottom-[17.39%] left-[9.45%] bg-white" />
              <div className="absolute h-[75.12%] w-full top-[15.88%] left-[3%] tracking-[-0.32px] leading-[-100px] inline-block">
              <Input
              placeholder="Search for terms..."
              size="lg"
              width="428px"
              w="428px"
              />
              </div>
              <img
                className="absolute h-[52.17%] w-[6.75%] top-[18.84%] right-[80.81%] bottom-[28.99%] left-[12.44%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="absolute h-[78.26%] w-[0.15%] top-[6.52%] right-[89.13%] bottom-[15.22%] left-[10.72%] box-border border-r-[1px] border-solid border-black" />
              <div className="absolute h-[78.26%] w-[0.15%] top-[7.97%] right-[10.12%] bottom-[13.77%] left-[89.73%] box-border border-r-[1px] border-solid border-black" />
              
            </div>
            <div className="absolute top-[292px] left-[361px] w-[304px] overflow-hidden flex flex-col items-center justify-start text-left text-xl">
              <div className="self-stretch relative h-[99.2px]">
                <div className="absolute h-[15.12%] w-[4.93%] top-[89.31%] right-[80.92%] bottom-[-4.44%] left-[14.14%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
                <img
                  className="absolute h-[89.72%] w-full top-[0%] right-[0%] bottom-[10.28%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/chat-bubble-8.svg"
                />
                <div className="absolute h-[67.54%] w-[72.37%] top-[11.09%] left-[12.5%] tracking-[-0.32px] leading-[21px] inline-block">{`Sure! I could definitely help out. Would you tell me more? `}</div>
              </div>
            </div>
            <div className="absolute top-[163px] left-[330px] w-[310px] h-[58px] text-left text-xl">
              <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Conversation Date: 9-25-23</p>
              </div>
            </div>
            <div className="absolute top-[400px] left-[888px] w-[342px] h-[75.2px] text-left text-xl">
              <div className="absolute h-[87.77%] w-full top-[0%] right-[0%] bottom-[12.23%] left-[0%] rounded-99981xl bg-dodgerblue-100" />
              <div className="absolute h-[73.14%] w-[81.58%] top-[0%] left-[8.48%] tracking-[-0.32px] leading-[21px] inline-block">{`Could you help me? I am having trouble communicating with my coworker. `}</div>
              <div className="absolute h-[19.95%] w-[4.39%] top-[85.9%] right-[21.93%] bottom-[-5.85%] left-[73.68%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute top-[26px] left-[445px] w-[613px] h-[42px] text-21xl">
              <div className="absolute w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Chat History</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-391px] left-[1212px] w-[68px] h-[684px] overflow-hidden flex flex-col items-center justify-end">
        <div className="w-9 h-[201px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <div className="relative bg-gainsboro w-9 h-[193px]" />
        </div>
      </div>
    </div>
  );
};

export default ViewHistory;
