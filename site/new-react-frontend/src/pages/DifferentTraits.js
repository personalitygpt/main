import { useNavigate } from "react-router-dom";

const DifferentTraits = () => {

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

  const onNeuroticismClick = () => {
    alert("This trait measures the tendency to experience negative emotions such as anxiety, depression, and vulnerability. Individuals high in neuroticism may be more prone to stress and emotional instability, while those low in neuroticism tend to be more emotionally stable and resilient.")
  };

  const onOpennessClick = () => {
    alert("This trait reflects a person's receptiveness to new ideas, experiences, and perspectives. Individuals high in openness tend to be imaginative, curious, and creative, often embracing unconventional ideas and engaging in intellectual pursuits. Those low in openness may be more traditional, practical, and prefer familiarity over novelty.")
  };

  const onExtraversionClick = () => {
    alert("Extraversion refers to the extent of one's sociability, assertiveness, and tendency to seek stimulation in the company of others. People high in extraversion are outgoing, energetic, and enjoy social interactions, while those low in extraversion may prefer solitude, quiet activities, and have a more reserved demeanor.")
  };

  const onAgreeblenessClick = () => {
    alert("Agreeableness measures one's tendency to be cooperative, compassionate, and empathetic towards others. Individuals high in agreeableness are generally warm, considerate, and trusting, prioritizing harmonious relationships and helping others. Those low in agreeableness may be more skeptical, competitive, and less concerned with others' well-being.")
  };

  const onConsciousnessClick = () => {
    alert("Conscientiousness reflects the degree of organization, responsibility, and self-discipline in one's behavior. People high in conscientiousness are dependable, diligent, and goal-oriented, often demonstrating strong impulse control and adherence to rules. On the other hand, individuals low in conscientiousness may be more spontaneous, careless, and struggle with procrastination or disorganization.")
  };

  return (
      <div className="w-full relative bg-white h-[757px] overflow-hidden text-center text-31xl text-black font-inter">
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[758px]">
          <img
            className="absolute h-[97.1%] w-[24.3%] top-[2.9%] right-[75.7%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/differenttraitsrectangle.svg"
          />
          <div className="absolute h-[97.1%] w-full top-[2.9%] right-[0%] bottom-[0%] left-[0%] box-border overflow-hidden text-base border-[3px] border-solid border-black">
            <div className="absolute h-[11.41%] w-[21.56%] top-[59.51%] right-[77.03%] bottom-[29.08%] left-[1.41%]">
              <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" onClick = {onRedFlagsClick}/>
              <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
                Finding Red Flags
              </div>
            </div>
            <img
              className="absolute h-[3.11%] w-[2.08%] top-[0.82%] right-[76.44%] bottom-[96.07%] left-[21.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
              onClick = {onSettingsClick}
            />
            <img
              className="absolute h-[54.21%] w-[2.5%] top-[5.71%] right-[0%] bottom-[40.08%] left-[97.5%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rec62.svg"
            />
            <div className="absolute h-[11.01%] w-[21.56%] top-[15.49%] right-[77.11%] bottom-[73.51%] left-[1.33%]">
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
            <div className="absolute h-[10.87%] w-[21.56%] top-[26.49%] right-[77.11%] bottom-[62.64%] left-[1.33%]">
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
            <div className="absolute h-[11.28%] w-[21.56%] top-[37.36%] right-[77.19%] bottom-[51.36%] left-[1.25%]">
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
            <div className="absolute h-[10.73%] w-[21.56%] top-[48.78%] right-[77.19%] bottom-[40.49%] left-[1.25%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-lightgray" onClick = {onDifferentTraits}/>
                <div className="absolute h-[89.87%] w-[27.54%] top-[10.13%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
                  Different Traits
                </div>
              </div>
            </div>
            <img
              className="absolute h-[5.84%] w-[0.94%] top-[60.6%] right-[78.05%] bottom-[33.56%] left-[21.02%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
            <div className="absolute h-[11.41%] w-[21.56%] top-[70.38%] right-[77.11%] bottom-[18.21%] left-[1.33%]">
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
            <div className="absolute h-[13.59%] w-[7.81%] top-[46.6%] right-[17.34%] bottom-[39.81%] left-[74.84%] bg-gainsboro" />
          </div>
          <img
            className="absolute h-[2.9%] w-full top-[0%] right-[0%] bottom-[97.1%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rec1.svg"
          />
          <img
            className="absolute h-[7.65%] w-[21.56%] top-[82.19%] right-[77.11%] bottom-[10.16%] left-[1.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rec66.svg"
            onClick = {onLogOutClick}
          />
          <img
            className="absolute h-[2.02%] w-[4.38%] top-[85.12%] right-[85.67%] bottom-[12.86%] left-[9.95%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/log-out.svg"
          />
          <img
            className="absolute h-[4.09%] w-[21.19%] top-[10.49%] right-[27.08%] bottom-[85.42%] left-[51.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/different-traits.svg"
          />
          <img
            className="absolute h-[19.53%] w-[32.66%] top-[20.58%] right-[40.31%] bottom-[59.89%] left-[27.03%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
            onClick = {onNeuroticismClick}
          />
          <div className="absolute h-[11.87%] w-[27.81%] top-[28.89%] left-[29.61%] tracking-[-0.32px] leading-[21px] text-[45px] inline-block" onClick = {onNeuroticismClick}>
            Neuroticism
          </div>
          <img
            className="absolute h-[19.53%] w-[32.66%] top-[20.58%] right-[4.3%] bottom-[59.89%] left-[63.05%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
            onClick = {onOpennessClick}
          />
          <div className="absolute h-[11.87%] w-[27.81%] top-[28.5%] left-[65.78%] tracking-[-0.32px] leading-[21px] text-[45px] inline-block" onClick = {onOpennessClick}>
            Openness
          </div>
          <img
            className="absolute h-[19.53%] w-[32.66%] top-[46.17%] right-[4.3%] bottom-[34.3%] left-[63.05%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
            onClick = {onAgreeblenessClick}
          />
          <div className="absolute h-[11.87%] w-[27.81%] top-[53.83%] left-[66.09%] tracking-[-0.32px] leading-[21px] text-[45px] inline-block" onClick = {onAgreeblenessClick}>
            Agreeableness
          </div>
          <img
            className="absolute h-[19.53%] w-[32.66%] top-[72.56%] right-[21.41%] bottom-[7.92%] left-[45.94%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
            onClick = {onConsciousnessClick}
          />
          <div className="absolute h-[5.87%] w-[34.81%] top-[78.55%] left-[45.2%] tracking-[-0.32px] leading-[47px] text-[45px] inline-block" onClick = {onConsciousnessClick}>
            Conscientiousness
          </div>
          <img
            className="absolute h-[19.53%] w-[32.66%] top-[45.51%] right-[40.31%] bottom-[34.96%] left-[27.03%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/chat-bubble-5.svg"
            onClick = {onExtraversionClick}
          />
          <div className="absolute h-[11.87%] w-[27.81%] top-[54.09%] left-[29.61%] tracking-[-0.32px] leading-[17px] text-[45px] inline-block" onClick = {onExtraversionClick}>
            Extraversion
          </div>
        </div>
        <img
          className="absolute top-[56px] left-[18px] w-[276px] h-[69px]"
          alt=""
          src="/comp78.svg"
          onClick = {onAIInsightsClick}
        />
      </div>
    );
  };

export default DifferentTraits;
