import React from "react";
import mobileAppImg from "../assets/mobile-app.png";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by students across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Looking for the perfect agency to guide you through your educational
            journey? Look no further! Our agency is a leading choice for
            students around the globe, and here's why:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl bg-zinc-100/70">
            <p className="text-6xl font-bold text-blue-800 ">90%+</p>
            <p className="text-gray-400 mt-2">Student Satisfaction</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl bg-zinc-100/70">
            <p className="text-5xl font-bold text-blue-800 ">
              $<span className="text-6xl font-bold text-blue-800 ">$</span>$
            </p>
            <p className="text-gray-400 mt-2">Partial Scholarships</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl bg-zinc-100/70">
            <p className="text-6xl font-bold text-blue-800 ">20K+</p>
            <p className="text-gray-400 mt-2">Students</p>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={mobileAppImg}
            className="rounded-md mt-20 object-cover"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
