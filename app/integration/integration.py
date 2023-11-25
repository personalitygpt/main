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

    Using the NEOFFI test results of the user below in T-scores delimited in  (from 0 to >80), create responses to the user's questions 
    that enables the user to improve their personality traits below to scores above 80. Make sure that the responses are 40-50 words, and 
    you must respond in an informal tone, typical of the people born in Gen-Z generation, incluing slang. Remember everything from previus conversations.

    The responses MUST NOT MENTION ANYTHING ABOUT T-SCORES or the NEO-FFI RESULTS/PERSONALITY TRAITS AT ALL. They must sound like friendly advice and make it as specific as possible.

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
        temperature = 1.51
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