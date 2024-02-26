import { useNavigate } from "react-router-dom";

const AIInsights = () => {

  const navigate = useNavigate();

  const onLogOutClick = () => {
    navigate("/");
  };

  const onNewChatClick = (message) => { 
    navigate("/ai-insights");
  };

  function newBlueBubble() {
    var msg = document.getElementById('userinput').value
    return (
      <div className="absolute top-[272px] left-[829px] w-[400px] h-[94.2px] text-left text-xl">
          <img
            className="absolute h-[88.11%] w-full top-[0%] right-[0%] bottom-[11.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/chat-bubble-4@2x.png"
          />
          <div className="absolute h-[15.92%] w-[3.75%] top-[88.75%] right-[11.25%] bottom-[-4.67%] left-[85%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[77.49%] w-[83.75%] top-[10.62%] left-[9.75%] tracking-[-0.32px] leading-[21px] inline-block">{msg}</div>
        </div>
    );
  }

  const input = document.querySelector('#userinput');
  // Add an event listener to the button that listens for a 'click' event
  input.addEventListener('click', function(event) {
    if (event === "Enter") {
      // Insert the code you want to run when the button is clicked
      newBlueBubble();
    }
  });

  return (
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute h-[96.17%] w-[24.3%] top-[3.56%] right-[75.7%] bottom-[0.26%] left-[0%] bg-lightsteelblue" />
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute h-[54.21%] w-[2.5%] top-[5.71%] right-[0%] bottom-[40.08%] left-[97.5%] bg-gainsboro" />
        <div className="absolute top-[51px] left-[342px] w-[902px] h-[72px] text-21xl">
          <button className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">New Chat</button>
        </div>
        <div className="absolute top-[272px] left-[829px] w-[400px] h-[94.2px] text-left text-xl">
          <img
            className="absolute h-[88.11%] w-full top-[0%] right-[0%] bottom-[11.89%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/chat-bubble-4@2x.png"
          />
          <div className="absolute h-[15.92%] w-[3.75%] top-[88.75%] right-[11.25%] bottom-[-4.67%] left-[85%] bg-dodgerblue-100 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[77.49%] w-[83.75%] top-[10.62%] left-[9.75%] tracking-[-0.32px] leading-[21px] inline-block">{`Could you help me? I am having trouble communicating with my coworker. `}</div>
        </div>
        <div className="absolute top-[123px] left-[411px] w-72 h-[90.2px] text-left text-xl">
          <img
            className="absolute h-[88.69%] w-full top-[0%] right-[0%] bottom-[11.31%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/chat-bubble-1@2x.png"
          />
          <div className="absolute h-[16.63%] w-[5.21%] top-[88.25%] right-[82.64%] bottom-[-4.88%] left-[12.15%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <div className="absolute h-[69.84%] w-[88.89%] top-[6.65%] left-[10.42%] tracking-[-0.32px] leading-[21px] inline-block">
            Welcome to PersonalityGPT! How may I assist you today?
          </div>
        </div>
        <div className="absolute top-[399px] left-[411px] w-[381px] h-[98.2px] text-left text-xl">
          <div className="absolute h-[15.27%] w-[3.94%] top-[89.21%] right-[88.19%] bottom-[-4.48%] left-[7.87%] bg-gainsboro [transform:_rotate(-45deg)] [transform-origin:0_0]" />
          <img
            className="absolute h-[89.61%] w-full top-[0%] right-[0%] bottom-[10.39%] left-[0%] rounded-99981xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/chat-bubble-5@2x.png"
          />
          <div className="absolute h-[62.12%] w-[78.74%] top-[22.4%] left-[9.71%] tracking-[-0.32px] leading-[21px] inline-block">{`Sure! I could definitely help out. Would you tell me more? `}</div>
          <div className="absolute h-[16.29%] w-[4.2%] top-[37.68%] right-[7.35%] bottom-[46.03%] left-[88.45%] rounded-[50%] bg-red" />
        </div>
        <div className="absolute top-[650px] left-[441px] w-[696px] h-[45px] text-left text-6xl text-dimgray">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro" />
          <input name="input" type="text" placeholder='Type Here' maxlength="512" id="userinput" class="searchField" onchange={newBlueBubble()}/>
        </div>
        <div className="absolute top-[217px] left-[346px] w-[65px] h-[65px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-15@2x.png"
          />
        </div>
        <div className="absolute top-[487px] left-[346px] w-[65px] h-[65px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-15@2x.png"
          />
        </div>
        <div className="absolute top-[636px] left-[21px] w-[276px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200" />
          <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block" onClick={onLogOutClick}>
            Log Out
          </div>
        </div>
        <img
          className="absolute top-[25px] left-[257px] w-[26.6px] h-[22.9px] object-cover"
          alt=""
          src="/group@2x.png"
        />
        <button className="absolute top-[67px] left-[16px] w-[276px] h-[69px]" onClick={onNewChatClick}>
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
        </button>
        <div className="absolute top-[154px] left-[17px] w-[276px] h-[81px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" />
            <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Communicating with a certain personality
            </div>
          </div>
          <div className="absolute h-[53.09%] w-[4.35%] top-[7.41%] right-[3.26%] bottom-[39.51%] left-[92.39%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[309px] left-[15px] w-[276px] h-[83px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-whitesmoke-200" />
            <div className="absolute h-[86.75%] w-[43.48%] top-[13.25%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
              Analyze a conversation
            </div>
          </div>
          <div className="absolute h-[51.81%] w-[4.35%] top-[13.25%] right-[3.62%] bottom-[34.94%] left-[92.03%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[388px] left-[15px] w-[276px] h-[79px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-whitesmoke-200" />
            <div className="absolute h-[89.87%] w-[27.54%] top-[10.13%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
              Different Traits
            </div>
          </div>
          <div className="absolute h-[54.43%] w-[4.35%] top-[12.66%] right-[4.35%] bottom-[32.91%] left-[91.3%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[551px] left-[15px] w-[276px] h-[84px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" />
            <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              View History
            </div>
          </div>
          <div className="absolute h-[51.19%] w-[4.35%] top-[5.95%] right-[3.62%] bottom-[42.86%] left-[92.03%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[235px] left-[15px] w-[276px] h-20">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-200" />
            <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Learning the meaning of different phrases
            </div>
          </div>
          <div className="absolute top-[0px] left-[254px] w-3 h-[50px] overflow-hidden">
            <div className="absolute h-[86%] w-full top-[14%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/more-than@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[489px] left-[17px] w-[276px] h-[84px]">
        <div className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200" />
        <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
          Finding Red Flags
        </div>
        <img
          className="absolute h-[51.19%] w-[4.35%] top-[9.52%] right-[4.71%] bottom-[39.29%] left-[90.94%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/more-than@2x.png"
        />
      </div>
    </div>
  );
};

export default AIInsights;
