import { AiOutlineCheck } from "react-icons/ai";
import React from "react";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32 px-2">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-10">All In One</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Student Satisfaction: </h3>
              <p className="text-lg pt-2 pb-4">
                With a 90+ satisfaction rate, we prioritize students' needs and
                aspirations, providing personalized support for academic
                excellence.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Proven Track Record: </h3>
              <p className="text-lg pt-2 pb-4">
                Over 20,000 students trust us as their educational partner. Join
                our community of successful students benefiting from our
                expertise.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Partial Scholarships: </h3>
              <p className="text-lg pt-2 pb-4">
                We offer partial scholarships, making education accessible to
                all. Students from diverse backgrounds can pursue their academic
                paths without financial burdens.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Comprehensive Guidance:</h3>
              <p className="text-lg pt-2 pb-4">
                Our agency offers comprehensive guidance throughout your
                educational journey, ensuring informed decisions and a seamless
                transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
