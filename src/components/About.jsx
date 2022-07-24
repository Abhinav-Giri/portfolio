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
            About
          </p>
          <h1 className="pt-5 text-xl font-bold">My Blockchain Journey:-</h1>
        </div>
        <p className="text-xl">
          So, it all started in mid April-2022, when I got to know about blockchain technologies through a random video on You Tube. Its future applications and scope excited me to learn more and get into this field.
        </p>
        
        <p className="text-xl">
          I learned about blockchain and its supportive technologies through few online available tutorials and developed projects. I am very excited and passionate about building my carrier in Blockchain.
        </p>
        
        <p className="text-xl">
          Currently learning Web3.0 development from <a href="https://www.learnweb3.io/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold">LearnWeb3</a>...
        </p>
      </div>
    </div>
  );
};

export default About;
