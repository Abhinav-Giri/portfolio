import React from "react";
import react from "../assets/react.png";
import blockchain from "../assets/blockchain.png";
import flutter from "../assets/flutter.png";
import css from "../assets/css.png";
import node from "../assets/node.png";
import html from "../assets/html.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/nextjs.png";
import javascript from "../assets/javascript.png";
import expressjs from "../assets/express.png";
import mongodb from "../assets/mongodb.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-sky-500",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
   
     {
      id: 3,
      src: node,
      title: "Node.js",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: typescript,
      title: "Typescript",
      style: "shadow-yellow-500",
    },
    {id: 5,
      src: html,
      title: "HTML",
      style: "shadow-sky-700",
      
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-sky-700",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next.js",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: expressjs,
      title: "Express.js",
      style: "shadow-gray-400",
    },
    {id: 9,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-sky-700",
    },
    {id: 10,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-700",
    },
    {id: 11,
      src: blockchain,
      title: "Blockchain Development",
      style: "shadow-sky-700",
    }
  ];

  return (
    <div
      name="experience"
      className="w-full px-4 pt-20 bg-gradient-to-b from-gray-800 to-black lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 px-20 mx-auto text-white lg:px-0">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
