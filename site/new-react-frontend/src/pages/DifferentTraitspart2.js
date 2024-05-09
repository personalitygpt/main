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
  
      In this chat you will explain different personality traits in detail to the user. The user will ask questions regarding a personality trait and you must answer them with at least 3 points.
      Include the different characteristics and conditions associated with the personality trait and explain what tendencies and behaviors people with that personality trait have.
      Keep in mind that whatever response you give should be specific to the personality trait asked about. For example if the user asked about neuroticism explain the characteristics, behavior, and conditions of a neurotic person.
  
      Use this example for guidance:
  
      User: 'I just took a test and was deemed neurotic. What does it and is this bad?'
  
      System: "Being deemed neurotic on a personality test means that you scored higher on the trait of neuroticism compared to other people who have taken the test. Neuroticism is one of the Big Five personality traits and is characterized by the tendency to experience negative emotions such as anxiety, depression, and stress. 
      
      It's important to understand that being labeled as neurotic on a personality test does not necessarily mean that there is something inherently "bad" about you. Neuroticism is a normal and natural part of the human personality, and everyone experiences negative emotions to some degree from time to time."
  
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
    <div className="relative bg-white w-full h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute h-[96.17%] w-[24.3%] top-[3.56%] right-[75.7%] bottom-[0.26%] left-[0%] bg-lightsteelblue" />
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute h-[54.21%] w-[2.5%] top-[5.71%] right-[0%] bottom-[40.08%] left-[97.5%] bg-gainsboro" />
        <div className="absolute top-[51px] left-[342px] w-[902px] h-[72px] text-21xl">
          <button className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">New Chat</button>
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
        <img
          className="absolute h-[97.1%] w-[24.3%] top-[2.9%] right-[75.7%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/differenttraitsrectangle.svg"
        />
        <div className="absolute h-[97.1%] w-full top-[2.9%] right-[0%] bottom-[0%] left-[0%] box-border overflow-hidden text-base border-[3px] border-solid border-black">
          <div className="absolute h-[11.41%] w-[21.56%] top-[59.51%] right-[77.03%] bottom-[29.08%] left-[1.41%]">
            <div
              className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onRedFlagsClick}
            />
            <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
              Finding Red Flags
            </div>
          </div>
          <img
            className="absolute h-[3.11%] w-[2.08%] top-[0.82%] right-[76.44%] bottom-[96.07%] left-[21.48%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
            onClick={onSettingsClick}
          />
          <img
            className="absolute h-[54.21%] w-[2.5%] top-[5.71%] right-[0%] bottom-[40.08%] left-[97.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rec62.svg"
          />
          <div className="absolute h-[11.01%] w-[21.56%] top-[15.49%] right-[77.11%] bottom-[73.51%] left-[1.33%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div
                className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100"
                onClick={onCommPersonalityclick}
              />
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
              <div
                className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-200"
                onClick={onLearningMeaningDifferentPhrases}
              />
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
              <div
                className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-whitesmoke-200"
                onClick={onAnalyzeConvo}
              />
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
              <div
                className="absolute h-[73.42%] w-full top-[0%] right-[0%] bottom-[26.58%] left-[0%] rounded-2xl bg-lightgray"
                onClick={onDifferentTraits}
              />
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
              <div
                className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200"
                onClick={onViewHistory}
              />
              <div className="absolute h-[84.52%] w-[23.19%] top-[15.48%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
                View History
              </div>
            </div>
            <img
              className="absolute h-[51.19%] w-[4.35%] top-[10.71%] right-[6.16%] bottom-[38.1%] left-[89.49%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
            <div className="absolute h-[5.16%] w-[12.5%] top-[7.34%] right-[4.3%] bottom-[87.5%] left-[83.2%] rounded-9xl bg-gainsboro" onClick={onDifferenttraitinfo}/>
            <div className="absolute h-[4.48%] w-[6.41%] top-[8.02%] left-[86.25%] text-xl text-left inline-block">
              Go to info page
            </div>
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
          onClick={onLogOutClick}
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
      </div>
      <img
        className="absolute top-[56px] left-[18px] w-[276px] h-[69px]"
        alt=""
        src="/comp78.svg"
        onClick={onAIInsightsClick}
      />
    </div>
  );
};

export default DifferentTraits2;
 