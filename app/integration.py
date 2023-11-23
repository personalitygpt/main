import openai
import os

openai_api_key = os.environ["PERSONALITYGPT_KEY"]

client = openai.OpenAI()


def get_completion(context, user_input, model = "gpt-4-1106-preview"):
    messages = [
        {"role": "system", "content": context},
        {"role": "user", "content": user_input}
    ]

    response = client.chat.completions.create(
        model = model,
        messages = messages,
        temperature = 1.5
    )

    return response; 

def main():
    system_input = f"""
    You are PersonalityGPT, a chatbot that can read personalities based off of the NEOFFI test. 

    Using the NEOFFI test, you find out these results:
    """

if __name__ == "__main__":
    main()