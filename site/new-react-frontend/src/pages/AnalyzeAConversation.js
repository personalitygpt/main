import { useNavigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "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", dangerouslyAllowBrowser: true,});

const AnalyzeAConversation = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    navigate("/");
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

Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
You must respond in a casual tone without slang. Remember everything from previous conversations.

In this chat, the user will upload a screenshot or paste a past conversation they had with a friend, family member, or anyone they know. When they do, you will analyze their pasted conversation and help them understand it or tell them what they can do. Make sure to answer the question that the user asks you with a proper 5 sentence response.

Use this example for guidance:

User: 'What did I do wrong in this conversation with my girlfriend? Here is the pasted conversation:
        User: Hey babe
        Girlfriend: Hey baby
        User: Want to hangout tonight and go out to eat? I might bring some friends along
        Girlfriend: Sure, but can it only be us two? I want some alone time with you
        User: No. See, this is why I hate making plans. You don't want anyone to come along and always want alone time
        Girlfriend: Don't talk to me anymore. We're done.'

System: "It looks like you were being too rude and pushy with your girlfriend. You should be nicer and calmer, an alternative and more peaceful way than yelling.

Next time, talk with a more peaceful voice in order to maintain good relationships with people.
Human: ${message}
AI:`;

      // Get the response from OpenAI
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }],
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
        console.error(
          "OpenAI response is undefined or does not contain a message."
        );
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
      <div className="absolute top-[22px] left-[0px] w-[1280px] h-[736px]">
        <div className="absolute top-[0px] left-[0px] w-[311px] h-[736px]">
          <div className="absolute h-full w-[109.97%] top-[0%] right-[-9.97%] bottom-[0%] left-[0%] bg-lightsteelblue" />
          <button className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            New Chat
          </button>
        </div>
        <div
          className="absolute top-[100px] left-[441px] w-[696px] h-[248px]"
          id="chatbox"
        >
          {chats
            .map((chat, index) => (
              <div
                key={index}
                className={`p-4 m-2 rounded-lg ${
                  chat.role === "user" ? "bg-lightsteelblue" : "bg-royalblue"
                }`}
              >
                <p className="text-2xl text-black">
                  {typeof chat.content === "string"
                    ? chat.content
                    : JSON.stringify(chat.content)}
                </p>
              </div>
            ))
            .reverse()}
        </div>
        <div className="absolute top-[0px] left-[0px] box-border w-[1280px] h-[736px] overflow-hidden border-[3px] border-solid border-black">
          <div className="absolute h-[7.88%] w-[21.56%] top-[87.09%] right-[76.48%] bottom-[5.03%] left-[1.95%]">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dodgerblue-200"
              onClick={onLogOutClick}
            />
            <div className="absolute h-[32.76%] w-[22.46%] top-[31.03%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              Log Out
            </div>
          </div>
          <div className="absolute h-[10.87%] w-[21.56%] top-[32.34%] right-[76.41%] bottom-[56.79%] left-[2.03%]">
            <div
              className="absolute h-[71.25%] w-full top-[0%] right-[0%] bottom-[28.75%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onLearningMeaningDifferentPhrases}
            />
            <div className="absolute h-[87.5%] w-[77.54%] top-[12.5%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Learning the meaning of different phrases
            </div>
            <img
              className="absolute h-[55%] w-[4.35%] top-[10%] right-[3.62%] bottom-[35%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
          <div className="absolute h-[11.14%] w-[21.56%] top-[75.95%] right-[76.41%] bottom-[12.91%] left-[2.03%]">
            <div
              className="absolute h-[70.73%] w-full top-[0%] right-[0%] bottom-[29.27%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onViewHistory}
            />
            <div className="absolute h-[86.59%] w-[23.19%] top-[13.41%] left-[38.77%] tracking-[-0.32px] leading-[21px] inline-block">
              View History
            </div>
            <img
              className="absolute h-[52.44%] w-[4.35%] top-[10.98%] right-[3.62%] bottom-[36.59%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
          <div className="absolute h-[9.38%] w-[21.56%] top-[10.19%] right-[76.41%] bottom-[80.43%] left-[2.03%]">
            <div
              className="absolute h-[84.06%] w-full top-[0%] right-[0%] bottom-[15.94%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onAIInsightsClick}
            />
            <div className="absolute h-[72.46%] w-[48.55%] top-[27.54%] left-[25.36%] tracking-[-0.32px] leading-[21px] inline-block">
              New Chat
            </div>
            <img
              className="absolute h-[62.32%] w-[4.35%] top-[13.04%] right-[3.62%] bottom-[24.64%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
          <div className="absolute h-[10.73%] w-[21.56%] top-[54.35%] right-[76.41%] bottom-[34.92%] left-[2.03%]">
            <div
              className="absolute h-[73.42%] w-full top-[-12.66%] right-[0%] bottom-[39.24%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onDifferentTraits}
            />
            <img
              className="absolute h-[55.7%] w-[4.35%] top-[-3.8%] right-[3.62%] bottom-[48.1%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
            <div className="absolute h-[89.87%] w-[27.54%] top-[-2.53%] left-[36.59%] tracking-[-0.32px] leading-[21px] inline-block">
              Different Traits
            </div>
          </div>
          <div className="absolute top-[640px] left-[400px] w-[696px] h-[45px] text-left text-6xl text-dimgray">
            <Input
              name="messageInput"
              className="bg-[light-gray] absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
              placeholder="Type Here"
              size="lg"
              width="696px"
              w="696px"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  const message = e.target.value;
                  chat(message);
                  e.target.value = ""; // Clear input after sending
                }
              }}
            />
            <Button
              className="left-[105%]"
              colorScheme="blue"
              onClick={() => {
                const input = document.getElementsByName("messageInput")[0];
                const message = input.value;
                chat(message);
                input.value = ""; // Clear input after sending
              }}
            >
              Send
            </Button>
          </div>
          <div className="absolute h-[11.41%] w-[21.56%] top-[65.22%] right-[76.41%] bottom-[23.37%] left-[2.03%]">
            <div
              className="absolute h-[69.05%] w-full top-[0%] right-[0%] bottom-[30.95%] left-[0%] rounded-2xl bg-whitesmoke-200"
              onClick={onRedFlagsClick}
            />
            <img
              className="absolute h-[52.38%] w-[4.35%] top-[9.52%] right-[3.62%] bottom-[38.1%] left-[92.03%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
            <div className="absolute h-[86.9%] w-[32.61%] top-[13.1%] left-[34.42%] tracking-[-0.32px] leading-[21px] inline-block">
              Finding Red Flags
            </div>
          </div>
          <div className="absolute top-[157px] left-[28px] w-[276px] h-[81px]">
            <div className="absolute h-[70.37%] w-full top-[0%] right-[0%] bottom-[29.63%] left-[0%] rounded-2xl bg-whitesmoke-100" />
            <div className="absolute h-[87.65%] w-[77.17%] top-[12.35%] left-[11.23%] tracking-[-0.32px] leading-[21px] inline-block">
              Communicating with a certain personality
            </div>
            <img
              className="absolute h-[53.09%] w-[4.35%] top-[6.17%] right-[4.35%] bottom-[40.74%] left-[91.3%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
          <div className="absolute top-[106px] left-[1228px] w-8 h-[399px]">
            <div className="absolute h-full w-full top-[-3.51%] right-[-50%] bottom-[3.51%] left-[50%] bg-gainsboro" />
          </div>
          <img
            className="absolute h-[3.21%] w-[2.08%] top-[2.45%] right-[77.53%] bottom-[94.35%] left-[20.39%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className="absolute top-[63px] left-[346px] w-[902px] h-[72px] text-21xl">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.32px] leading-[21px] inline-block">
            Analyze a conversation
          </div>
        </div>
        <div className="absolute top-[315px] left-[18px] w-[276px] h-[83px]">
          <div className="absolute h-full w-full top-[0%] right-[-3.62%] bottom-[0%] left-[3.62%]">
            <div
              className="absolute h-[69.88%] w-full top-[0%] right-[0%] bottom-[30.12%] left-[0%] rounded-2xl bg-lightgray"
              onClick={onAnalyzeConvo}
            />
            <div className="absolute h-[86.75%] w-[43.48%] top-[13.25%] left-[28.26%] tracking-[-0.32px] leading-[21px] inline-block">
              Analyze a conversation
            </div>
            <img
              className="absolute h-[53.01%] w-[4.35%] top-[6.02%] right-[4.35%] bottom-[40.96%] left-[91.3%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/more-than@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeAConversation;
