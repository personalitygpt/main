import os
import openai
from langchain_openai import ChatOpenAI
from langchain.chains import LLMChain
from langchain_core.prompts import PromptTemplate
from unstructured.partition.pdf import partition_pdf
from PIL import Image

import chromadb
import numpy as np
from langchain.vectorstores import Chroma
from langchain_experimental.open_clip import OpenCLIPEmbeddings

import base64
import io
from io import BytesIO

from operator import itemgetter

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableLambda, RunnablePassthrough,RunnableParallel


openai_api_key = os.environ["PERSONALITYGPT_KEY"]
 
llm = ChatOpenAI(model = 'gpt-4-vision-preview', temperature = 1, openai_api_key = openai_api_key, max_tokens=2048)
# New Chat function
def new_chat(question):
    prompt = PromptTemplate(
    input_variables=["question"], template = """
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

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

    Remember, it's about staying proactive and seeking clarity on how to enhance your performance, while also ensuring that you're being evaluated fairly. Keep the focus on your work and maintain open communication with both your teacher and other school officials if necessary.
    "

    Neuroticism = 30
    Extraversion = 99
    Openness = 57
    Agreeableness = 45
    Conscientiousness = 49

    Age = 20

    Using all this information, answer this question from the user: {question}
    """
    )

    chain = LLMChain(llm = llm, prompt = prompt)

    return chain.invoke(question)["text"]


# Communicate with another personality function
def new_personality_communication(question):
    prompt = PromptTemplate(
    input_variables=["question"], template = """
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

    Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions 
    that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
    You must respond in an casual tone without slang. Remember everything from previous conversations.

    In this chat, you will tell the user how to communicate with different personalities. The user will provide you the personality they want to learn to communicate with and you will give a response.
    Suggest tips on communicaating with an individual that has a personality. But this is the most important thing: The tips suggested by you should be tailoreed to the user's specific personality.
    For example, if the user has an extroverted personality and wants to communicate with the introverted individual, you can list three traits that ariated wuth the user's personality and give tips how to communicate.
 
    Use this example for guidance to see what I mean:

    User: 'How do I communicate with someone that has an introverted personality?'

    System: "Communicating with someone that has an introverted personality requires respect and understanding for their preferences. Because you are energetic, enthusiastic, and social, here are some tips that can help you communicate with them based on your personality:

    Open a dialogue:

    Respect their need for space and solitude:
    As someone who is outgoing and social, it's essential to understand that introverts often recharge by spending time alone. Respect their need for solitude and avoid overwhelming them with constant social interaction. Give them space to recharge and don't take it personally if they prefer alone time.

    Initiate meaningful one-on-one conversations:
    While you may thrive in group settings, introverts often prefer one-on-one interactions or small group settings where they can engage in deeper, more meaningful conversations. Take the time to initiate personal conversations where they feel comfortable expressing themselves without the pressure of a larger audience.

    Practice active listening:
    As an extrovert, you may be naturally inclined to talk more during conversations. However, introverts often appreciate being listened to and understood. Practice active listening by giving them your full attention, maintaining eye contact, and showing genuine interest in what they have to say. Avoid interrupting or dominating the conversation.   
    "

    Neuroticism = 30
    Extraversion = 99
    Openness = 57
    Agreeableness = 45
    Conscientiousness = 49

    Age = 20

    Using all this information, answer this question from the user: {question}
    """
    )

    chain = LLMChain(llm = llm, prompt = prompt)

    return chain.invoke(question)["text"]


# Learning meaning of different phrases
def learning_meaning(question):
    prompt = PromptTemplate(
    input_variables=["question"], template = """
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

    Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions 
    that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
    You must respond in an casual tone without slang. Remember everything from previous conversations.

    In this chat, you will help the user understand the meaning of a phrase they don't know. The user will provide you with a phrase they don't know. Tell the definition of the phrase and how they can use it in a complete sentence.
    
    Use this example for guidance:

    User: 'What does the term 'rizz' meant?'

    System: 
    
    "Rizz is an internet slang word that refers to style, charm, or attractiveness. It refers to the ability to attract a romantic or sexual partner. 
    To use the term 'rizz' in a complete sentence, you can say: 'Wow you have a lot of rizz.' This sentence implies that the person can attract a person"

    Neuroticism = 30
    Extraversion = 99
    Openness = 57
    Agreeableness = 45
    Conscientiousness = 49

    Age = 20

    Using all this information, answer this question from the user: {question}
    """
    )

    chain = LLMChain(llm = llm, prompt = prompt)

    return chain.invoke(question)["text"]


# Different Traits
def different_traits(question):
    prompt = PromptTemplate(
    input_variables=["question"], template = """
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

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

    Using all this information, answer this question from the user: {question}
    """
    )

    chain = LLMChain(llm = llm, prompt = prompt)

    return chain.invoke(question)["text"]


# Personality determiner from the response function



# Analyzing a conversation 
def analyze_convo(question, image):

    path = "./images/"

    file_name = os.listdir(path)

    raw_pdf_elements = partition_pdf(
        filename=path + file_name[0],
        extract_images_in_pdf=True,
        infer_table_structure=True,
        chunking_strategy="by_title",
        max_characters=4000,
        new_after_n_chars=3800,
        combine_text_under_n_chars=2000,
        image_output_dir_path=path
    )

    tables = []
    texts = []
    for element in raw_pdf_elements:
        if "unstructured.documents.elements.Table" in str(type(element)):
            tables.append(str(element))
        elif "unstructured.documents.elements.CompositeElement" in str(type(element)):
            texts.append(str(element))
    
    # Create chroma
    vectorstore = Chroma(
        collection_name="mm_rag_clip_photos", embedding_function=OpenCLIPEmbeddings()
    )

    # Get image URIs with .jpg extension only
    image_uris = sorted(
        [
            os.path.join(path, image_name)
            for image_name in os.listdir(path)
            if image_name.endswith(".jpg")
        ]
    )

    # Add images
    vectorstore.add_images(uris=image_uris)

    # Add documents
    vectorstore.add_texts(texts=texts)

    # Make retriever
    retriever = vectorstore.as_retriever()

    def resize_base64_image(base64_string, size=(128, 128)):
        """
        Resize an image encoded as a Base64 string.

        Args:
        base64_string (str): Base64 string of the original image.
        size (tuple): Desired size of the image as (width, height).

        Returns:
        str: Base64 string of the resized image.
        """
        # Decode the Base64 string
        img_data = base64.b64decode(base64_string)
        img = Image.open(io.BytesIO(img_data))

        # Resize the image
        resized_img = img.resize(size, Image.LANCZOS)

        # Save the resized image to a bytes buffer
        buffered = io.BytesIO()
        resized_img.save(buffered, format=img.format)

        # Encode the resized image to Base64
        return base64.b64encode(buffered.getvalue()).decode("utf-8")


    def is_base64(s):
        """Check if a string is Base64 encoded"""
        try:
            return base64.b64encode(base64.b64decode(s)) == s.encode()
        except Exception:
            return False


    def split_image_text_types(docs):
        """Split numpy array images and texts"""
        images = []
        text = []
        for doc in docs:
            doc = doc.page_content  # Extract Document contents
            if is_base64(doc):
                # Resize image to avoid OAI server error
                images.append(
                    resize_base64_image(doc, size=(250, 250))
                )  # base64 encoded str
            else:
                text.append(doc)
        return {"images": images, "texts": text}
    
    
    def prompt_func(data_dict):
        # Joining the context texts into a single string
        formatted_texts = "\n".join(data_dict["context"]["texts"])
        messages = []

        # Adding image(s) to the messages if present
        if data_dict["context"]["images"]:
            image_message = {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/jpeg;base64,{data_dict['context']['images'][0]}"
                },
            }
            messages.append(image_message)

        # Adding the text message for analysis
        text_message = {
            "type": "text",
            "text": (
                """You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

    Using the NEOFFI test results of the user below in T-scores (from 0 to >80), create responses to the user's questions 
    that enables the user to improve their personality traits below to scores above 80. Do not make the answer you give to the user too long.
    You must respond in an casual tone without slang. Remember everything from previous conversations.

    In this chat, the user will upload a screenshot or paste a past conversation they had with a friend, family member, or anyone they know. When they do,
    you will analyze their pasted conversation and help them understand it or tell them what they can do. Make sure to answer the question that the user asks
    you with a proper 5 sentence response.

    Use this example for guidance:

    User: 'What did I do wrong in this conversation with my girlfriend? Here is the pasted conversation:
            User: Hey babe
            Girlfriend: Hey baby
            User: Want to hangout tonight and go out to eat? I might bring some friends along
            Girlfriend: Sure, but can it only be us two? I want some alone time with you
            User: No. See, this is why I hate making plans. You don't want anyone to come along and always want alone time
            Girlfriend: Don't talk to me anymore. We're done.'

    System: "It looks like you were being too rude and pushy with your girlfriend. You should be nicer and calmer, a alternative and more peaceful way than yelling.
    
    Next time, talk with a more peaceful voice in order to maintain good relationships with people.


    Neuroticism = 30
    Extraversion = 99
    Openness = 57
    Agreeableness = 45
    Conscientiousness = 49

    Age = 20

    Using all this information, answer this question from the user: {data_dict[question]}"""
            ),
        }
        messages.append(text_message)

        return [HumanMessage(content=messages)]

    chain = (
        {
            "context": retriever | RunnableLambda(split_image_text_types),
            "question": RunnablePassthrough(),
        }
        | RunnableParallel({"response":prompt_func| llm | StrOutputParser(),
                        "context": itemgetter("context"),})
    )
    
    response = chain.invoke(question)

    return(response['response'])




            