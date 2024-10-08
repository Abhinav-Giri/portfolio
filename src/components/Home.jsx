import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full px-20 bg-gradient-to-b from-black via-black to-gray-800 lg:px-0 md:pt-40 pt-20"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            I am Abhinav Giri   
            </h2>
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
             (SDE)
          </h2>
          <p className="max-w-md py-4 text-gray-500">
          I believe in continuous learning and very excited and passionate about growing my carrier as a Software Development Engineer.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="w-2/3 ml-2 mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
