import { AiOutlineCheck } from "react-icons/ai";
import React from "react";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center mb-10">All In One</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Exceptional Student Satisfaction:{" "}
              </h3>
              <p className="text-lg pt-2 pb-4">
                With a remarkable 90+ student satisfaction rate, we prioritize
                the needs and aspirations of our students above all else. Our
                dedicated team works tirelessly to ensure that each student
                receives the personalized attention and support they deserve,
                helping them excel in their academic endeavors.
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
                Over 20,000 students have already chosen us as their trusted
                partner in education. This vast number of students is a
                testament to the quality of our services and the trust placed in
                us by countless individuals seeking educational opportunities.
                Join our growing community of successful students who have
                benefitted from our expertise.
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
                We understand the financial challenges that students face when
                pursuing their dreams. To make education accessible to all, we
                offer partial scholarships to deserving candidates. Our
                commitment to affordability ensures that students from diverse
                backgrounds can take advantage of our services and pursue their
                desired academic paths without unnecessary financial burdens.
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
                Our agency provides comprehensive guidance at every step of your
                educational journey. From choosing the right institution and
                program to assisting with the application process, visa
                requirements, and accommodation, we ensure that you have all the
                necessary support to make informed decisions and enjoy a smooth
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
