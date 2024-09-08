import React from "react";
import img from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";
export default function banner() {
  return (
    <div className="flex flex-col justify-center items-center px-10">
      <div className="w-[30%] flex items-center justify-center">
        <img className="  bg-zinc invert rounded-md" src={img} />
      </div>
      <div className=" w-[70%] justify-center content-center items-center mb-8 ">

        <div class="bg-gray-800  text-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4">
            Bhartiya Electronics Limited: Image Recognition Chatbot
          </h3>
          <p class="text-lg mb-3">
            In the realm of AI and computer vision, creating conversational
            chatbots that effectively combine natural language processing and
            image recognition remains a challenging endeavor. While existing
            chatbots can communicate with users using natural language, there is
            a pressing need for image recognition-based chatbots that can
            understand and respond to user queries about uploaded images. This
            project aims to develop such a chatbot, capable of accurately
            identifying objects within images and generating relevant,
            grammatically correct responses to user questions. The chatbot will
            be trained on a comprehensive dataset to ensure its ability to
            detect objects and engage in meaningful conversations related to the
            image content.
          </p>
        </div>
      </div>
      
    </div>
  );
}
