import React, { useState } from "react";
import { ReactTyped } from "react-typed";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [image, setImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key to reset input

  const ask = async () => {
    const url = `http://127.0.0.1:8000/api/chat/?message=${encodeURIComponent(
      question
    )}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setAnswer(result.response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image state to the base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input
    document.getElementById("file-upload").click();
  };

  const handleFileReset = () => {
    setImage(null); // Reset the image state
    setFileInputKey(Date.now()); // Reset file input to allow same file selection
  };

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold">
          Personal Bot for Bharati Electronics
        </h1>
        <div>
          {/* Answers */}
          <div className="mt-10 pb-10 rounded-lg mx-40 p-4 font-bold text-red-400 bg-blue-200">
            <label className="text-xl mt-4 text-black font-bold" htmlFor="question">Ask a Question</label>
            {answer && (
              <p className="py-[100px] px-[40px] text-3xl">
                <ReactTyped strings={[answer]} typeSpeed={70} />
              </p>
            )}
            
            {/* Hidden File Input */}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              key={fileInputKey} // Reset file input
            />
            
            {/* Custom Upload Button with Plus Sign */}
            <button
              onClick={handleUploadClick}
              className="flex items-center justify-center w-full h-[100px] mt-4 mb-4 border-2 border-dashed border-blue-500 bg-blue-50 text-blue-500 font-medium rounded-lg shadow-md hover:bg-blue-100 transition duration-200"
            >
              <span className="text-5xl mr-2">+</span>
              <span className="text-lg">Click to Upload Here</span>
            </button>

            {image && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="max-w-[300px] max-h-[300px] w-auto h-auto rounded-lg mb-2"
                />
                <button
                  onClick={handleFileReset}
                  className=" text-black bg-blue-300 rounded-sm text-red-600 flex text-center text-lg p-3 justify-center"
                >
                remove
                </button>
              </div>
            )}

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[50px] focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
            />
            <button
              onClick={ask}
              type="button"
              className="focus:outline-none w-full text-white bg-black hover:bg-zinc-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg tracking-wider px-5 py-2 mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;