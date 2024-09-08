
import './App.css';
import Banner from './components/banner'

import { ReactTyped } from "react-typed";
import ProjectInfo from './components/ProjectInfo';
function App() {
  return (
    // <div className='bg-zinc-700 text-center'>
    //   <p className=' pt-[100px] text-2xl font-semibold pb-3 mb-2'> Ai Image recogniton System <br></br><span className='font-bold text-6xl text-yellow-200 pt-7'>I am Sandeep Prajapati</span></p>
    //   <p className='text-2xl'> 

    //     <ReactTyped
    //       strings={[
    //        "Your AI-powered image analyst. Ask me anything about your pictures.",
    //         "I'm here to help you understand your images better.",
    //         "Your visual question-answering assistant.",
    //       ]}
    //       typeSpeed={100}
    //       backSpeed={50}
    //       loop
    //     ></ReactTyped>
    //   </p>
    //   <Banner/>
    //   <ProjectInfo></ProjectInfo>
    // </div>
    <div className="bg-black text-center text-white">

<p className="pt-[100px] text-3xl font-semibold pb-3 mb-5 text-center text-white">
  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
    AI Image Recognition System
  </span>
  <br />
  <span className="font-bold text-7xl text-yellow-400 pt-5 block tracking-wide transition-transform duration-300 hover:scale-105">
    I am an AI-Powered ChatBot
  </span>
</p>
  <p className="text-2xl">
    <ReactTyped
      strings={[
        "Your AI-powered image analyst. Ask me anything about your pictures.",
        "I'm here to help you understand your images better.",
        "Your visual question-answering assistant.",
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    />
  </p>
  <Banner />
  <ProjectInfo />
</div>
  );
}

export default App;
