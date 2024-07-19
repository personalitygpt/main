import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});

const LearningTheMeaningOfDiffer = () => {
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
  
      The responses must first empathize with the user's situation, making the response personalized to the user and taking the user's T-SCORES into account. Then, the response must include 2-4 numbered bullet points with sub-points that are 1-2 sentences going into detail that answer's the user's question and
      allow the user to improve their personality test scores without mentioning T-scores at all. THE RESPONSES SHOULD SOUND LIKE THE USER THEMSELF TALKING. In the end, summarize the answer into a small paragraph of 3 sentences. When listing out the solutions, do not list out the reason in numbers. Give at least 3 reasons/ideas please. 
  
      Use this example for guidance:
  
      User: 'How can I stop my teacher from abusing his power to give me a bad grade?'
  
      System: "It's really tough to feel like you're being treated unfairly, especially when it comes to grades. Here's what you might consider doing:
  
      Open a dialogue:
      
      Try to have a calm, private conversation with your teacher about your concerns.
      Express that you're eager to understand how you can improve and achieve better grades.
  
      Involve a third party:
  
      If the conversation doesn't help, consider involving a department head or academic advisor.
      They can provide a neutral perspective and facilitate a more productive discussion.
  
      Remember, it's about staying proactive and seeking clarity on how to enhance your performance, while also ensuring that you're being evaluated fairly. Keep the focus on your work and maintain open communication with both your teacher and other school officials if necessary."
      
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
    <div className="w-full relative bg-white h-[758px] overflow-hidden text-center text-base text-black font-inter">
      <div className="absolute top-[22px] left-[0px] w-[311px] h-[736px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue" />
      </div>
      <div className="absolute top-[22px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
        <div className="absolute top-[42px] left-[1248px] w-8 h-[399px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
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
        <div className="absolute top-[42px] left-[309px] w-[902px] h-[72px] text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            Learning the meaning of different phrases
          </div>
        </div>
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
          onClick = {onSettingsClick}
        />
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
            <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" onClick = {onCommPersonalityclick}/>
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
