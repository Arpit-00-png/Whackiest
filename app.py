from flask import Flask, render_template, request
import base64
import ollama

app = Flask(__name__)

# Function to run LLaVA with user question
def run_llava(img_bytes, user_question):
    img_b64 = base64.b64encode(img_bytes).decode("utf-8")

    prompt = (
        f"You are an image understanding model. "
        f"Here is the user question: '{user_question}'. "
        f"Answer ONLY based on the image."
    )

    response = ollama.chat(
        model="llava",
        messages=[
            {
                "role": "user",
                "content": prompt,
                "images": [img_b64]
            }
        ]
    )

    return response["message"]["content"]

@app.route("/", methods=["GET", "POST"])
def index():
    print("INDEX ROUTE HIT")

    if request.method == "POST":
        file = request.files.get("image")
        question = request.form.get("question", "")

        if not file:
            return render_template("index.html", output="No image uploaded!")

        if question.strip() == "":
            question = "Describe the image in detail."

        img_bytes = file.read()
        output = run_llava(img_bytes, question)

        return render_template("index.html", output=output)

    return render_template("index.html", output=None)

if __name__ == "__main__":
    app.run(debug=True)
