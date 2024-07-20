import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OpenAI } from "openai";


const DifferentTraits2 = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    navigate("/");
  };

  const onCommPersonalityclick = () => {
    navigate("/comm-person");
  };
 
  const onSettingsClick = () => {
    navigate("/profile");
  };

  const onRedFlagsClick = () => {
    navigate("/red-flags");
  };

  const onAIInsightsClick = () => {
    navigate("/ai-insights");
  };

  const onLearningMeaningDifferentPhrases = () => {
    navigate("/learning-the-meaning-of-different-phrases");
  };

  const onViewHistory = () => {
    navigate("/view-hist");
  };

  const onDifferentTraits = () => {
    navigate("/different-traits");
  };

  const onAnalyzeConvo = () => {
    navigate("/analyze-conv");
  };

  const onDifferenttraitinfo = () => {
    navigate("/different-traits")
  };
  
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (message) => {
    if (!message.trim()) return; // Enhanced check for an empty message

    setIsTyping(true);
    window.scrollTo(0, 0); // Scroll to the top

    const newChat = { role: "user", content: message };
    // Update state immediately to reflect the new chat in UI
    setChats((prevChats) => [...prevChats, newChat]);

    try {
      // Create the prompt for the AI response
      const prompt = `You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

      Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions 
      that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
      You must respond in an casual tone without slang. Remember everything from previous conversations.
  
      In this chat you will identify if there are any red flags in the relationship. the user will provide a copy-pasted conversation they have had with a friend or anyone they know and will ask you to identify red flags and for any advice you can give them.
      make sure to be accurate and help them identify the red flags. At the end of each response, tell them that it would always be best to seek expert advice for finding red flags. Answer the prompt in 2-3 sentence answers and make sure is it not too long.

      Use this example for guidance:
  
      User: 'Can you identify any red flags about me in this conversation:
        User: Hey babe
        Girlfriend: Hey baby
        User: Want to hangout tonight and go out to eat? I might bring some friends along
        Girlfriend: Sure, but can it only be us two? I want some alone time with you
        User: No. See, this is why I hate making plans. You don't want anyone to come along and always want alone time
        Girlfriend: Don't talk to me anymore. We're done.'

      System: In this conversation, a red flag I have identified is that you are being too forcing and controlling, wanting your ways and not being flexible. It would be best if you and your partner can 
      come to an agreement and make a comrpomise. Remember, it is always best to seek out prefessional advice.

  
      Neuroticism = 30
      Extraversion = 99
      Openness = 57
      Agreeableness = 45
      Conscientiousness = 49
  
      Age = 20
  
      
      \n\nHuman: ${message}\nAI:`;
      
      // Get the response from OpenAI
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: prompt}],
        temperature: 0.7,
        max_tokens: 450,
      });

      // Check if response and response.choices exist to avoid type error
      if (response && response.choices) {
        const aiText = response.choices[0].message.content;
        const aiResponse = { role: "ai", content: aiText };
        // Ensure AI response is not empty and then update the chats
        if (aiResponse.content) {
          setChats((prevChats) => [...prevChats, aiResponse]);
        }
      } else {
        console.error("OpenAI response is undefined or does not contain a message.");
      }
    } catch (error) {
      console.error("Failed to fetch OpenAI response:", error);
    } finally {
      setIsTyping(false);
      window.scrollTo(0, 0); // Scroll to the top
    }
  };
  return (
    <div className="relative bg-white w-full h-[762px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[100px] left-[441px] w-[696px] h-[248px]" id="chatbox">
         {chats.map((chat, index) => (
           <div key={index} className={`p-4 m-2 rounded-lg ${chat.role === "user" ? "bg-lightsteelblue" : "bg-royalblue"}`}>
             <p className="text-2xl text-black">{typeof chat.content === 'string' ? chat.content : JSON.stringify(chat.content)}</p>
           </div>
         )).reverse()}
       </div>
       <div className="absolute top-[640px] left-[400px] w-[696px] h-[45px] text-left text-6xl text-dimgray">
         <form onSubmit={(e) => {
           e.preventDefault();
           const message = e.target.elements.messageInput.value;
           chat(message);
           e.target.elements.messageInput.value = ''; // Clear input after sending
         }}>
           <Input
               name="messageInput"
               className="bg-[transparent] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
               placeholder="Type Here"
               size="lg"
               width="696px"
               w="696px"
             />
           <Button
               className="left-[105%]"
               colorScheme='blue'
               type="submit"
             >
             Send
           </Button>
         </form>
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
        <div className="absolute h-[5.16%] w-[11.88%] top-[13.04%] right-[6.31%] bottom-[81.79%] left-[81.81%] rounded-9xl bg-gainsboro" onclick = {onRedFlagsClick}/>
        <div className="absolute h-[4.48%] w-[6.09%] top-[13.73%] left-[84.71%] text-xl text-left inline-block">
          Go to info page
        </div>
      </div>
    </div>
  );
};

export default FindingRedFlags;
