import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div name="testimonials" className="w-full my-32 px-2">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-7 text-center">
          <div className="h-[170px] w-[100%] relative border rounded-xl shadow-xl bg-zinc-100/70">
            <p className="p-4 text-gray-700 mt-1">
              <FaQuoteLeft
                size={30}
                className="absolute left-[-10px] top-[-15px] font-bold text-blue-800"
              />
              Thanks to iStudy MENA and many thanks to Mr Daoud - it was a
              pleasure for us as we had such enlightement.
              <FaQuoteRight
                size={30}
                className="absolute right-[-10px] bottom-[-15px] font-bold text-blue-800"
              />
            </p>
            <p className="px-8 font-bold text-blue-800">-Alaa Odat</p>
          </div>
          <div className="h-[200px] w-[100%] relative border rounded-xl shadow-xl bg-zinc-100/70 mt-[-10px]">
            <p className="p-4 text-gray-700 mt-1">
              <FaQuoteLeft
                size={30}
                className="absolute left-[-10px] top-[-15px] font-bold text-blue-800"
              />
              I Would like to thank Mr Daoud in iStudy MENA for the support. You
              have excited us to complete the process and placed alot of
              positivity. thank you for your help and time , we appreciate it.
              <FaQuoteRight
                size={30}
                className="absolute right-[-10px] bottom-[-15px] font-bold text-blue-800"
              />
            </p>
            <p className="px-8 font-bold text-blue-800">-Labiba Tabbakh</p>
          </div>
          <div className="h-[170px] w-[100%] relative border rounded-xl shadow-xl bg-zinc-100/70">
            <p className="p-4 text-gray-700 mt-1">
              <FaQuoteLeft
                size={30}
                className="absolute left-[-10px] top-[-15px] font-bold text-blue-800"
              />
              My experience with iStudy MENA was excellent and I am very happy
              to beging my application with you. I will definitely recommned
              your office to my friends.
              <FaQuoteRight
                size={30}
                className="absolute right-[-10px] bottom-[-15px] font-bold text-blue-800"
              />
            </p>
            <p className="px-8 font-bold text-blue-800">-Moath Alqatawna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
