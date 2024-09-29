import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full px-20 pt-20 text-white bg-gradient-to-b from-gray-800 to-black lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-5">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About Me
          </p>
          
        </div>
        <p className="text-xl">
         I am currently working as a Software Development Engineer at Rhizicube, where I've contributed to projects like Linknest, AMP Email Editor, Botpress WhatsApp Chatbot as well as Proofs of Concept (PoCs) such as Creatives and Smart Quiz Generator and written some blogs for company available on its official website rhizicube.ai. I utilize a range of technologies including Next.js, React.js, JavaScript, Node.js, HTML, and CSS. My dedication to continuous learning drives my passion for advancing my career in software development.
        </p>
        
{/*         <p className="text-xl">
          Working and learning software development from <a href="https://www.learnweb3.io/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold">LearnWeb3 and other resources</a>...
        </p> */}
      </div>
    </div>
  );
};

export default About;
