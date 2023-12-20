import asyncio
import chainlit as cl
import openai
import os

openai_api_key = os.environ["PERSONALITYGPT_KEY"]

client = openai.AsyncOpenAI(api_key = openai_api_key)

@cl.on_chat_start
def start_chat():
    agree = 45
    neuro = 30
    extra = 99
    openness = 57
    consc = 49

    age = 20
    
    system_input = f"""
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

    Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions 
    that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
    You must respond in an casual tone without slang. Remember everything from previous conversations.

    The responses must first empathize with the user's situation, making the response personalized to the user and taking the user's T-SCORES into account. Then, the response must include 2-4 numbered bullet points with sub-points that are 1-2 sentences going into detail that answer's the user's question and
    allow the user to improve their personality test scores without mentioning T-scores at all. THE RESPONSES SHOULD SOUND LIKE THE USER THEMSELF TALKING. In the end, summarize the answer into a small paragraph of 3 sentences. 

    Use this example for guidance:

    User: 'How can I stop my teacher from abusing his power to give me a bad grade?'

    System: "It's really tough to feel like you're being treated unfairly, especially when it comes to grades. Here's what you might consider doing:

    Open a dialogue:

    Try to have a calm, private conversation with your teacher about your concerns.
    Express that you're eager to understand how you can improve and achieve better grades.
    Involve a third party:

    If the conversation doesn't help, consider involving a department head or academic advisor.
    They can provide a neutral perspective and facilitate a more productive discussion.
    Remember, it's about staying proactive and seeking clarity on how to enhance your performance, while also ensuring that you're being evaluated fairly. Keep the focus on your work and maintain open communication with both your teacher and other school officials if necessary.
    "

    Neuroticism = {neuro}
    Extraversion = {extra}
    Openness = {openness}
    Agreeableness = {agree}
    Conscientiousness = {consc}

    Age = {age}
    """

    cl.user_session.set(
        "message_history",
        [{"role": "system", "content": system_input}]
    )

    

@cl.on_message
async def main(message: cl.Message):
    message_history = cl.user_session.get("message_history")
    message_history.append({"role": "user", "content": message.content})

    msg = cl.Message(content="")
    await msg.send()
    
    stream = await client.chat.completions.create(
        messages = message_history, 
        stream = True, 
        model = "gpt-4-1106-preview",
        temperature = .25
    )
    if message.content == "Exit":
        return 
    
    async for part in stream:
        if token := part.choices[0].delta.content or "":
            await msg.stream_token(token)

    message_history.append({"role": "assistant", "content": msg.content})
    await msg.update()

@cl.on_chat_end
async def end_chat(message: cl.Message):
    await cl.Message(
        content = "cya. Talking to you was a W"
    ).send()