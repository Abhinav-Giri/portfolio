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
          <h1 className="pt-5 text-xl font-bold">My Journey:-</h1>
        </div>
        <p className="text-xl">
          Did B.Tech and got customer based and mangerial positions and went engaged there. But gaining popularity of Blockchain technology grabbed my interest. Starting with solidity and blockchain,
        </p>
        
        <p className="text-xl">
          I learned Javascript, React.js, Node.js, Typescript, Express, MongoDB, MySql, Next.js, Flutter and few supportive technologies.I am very excited and passionate about growing my carrier as a Software Engineer.
        </p>
        
        <p className="text-xl">
          Working and learning software development from <a href="https://www.learnweb3.io/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold">LearnWeb3 and other resources</a>...
        </p>
      </div>
    </div>
  );
};

export default About;
