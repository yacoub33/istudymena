import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-blue-900 text-white py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 ">ADDRESSES</h6>
          <ul>
            <li className="py-1">
              JORDAN – AMMAN 11191, QUEEN ZAIN ALSHARAF 4TH FLOOR
            </li>
            <li className="py-1">
              EGYPT – CAIRO NAMAA BUILDING, 5TH FLOOR, EMTEDAD RAMSES, 6TH
              DISTRICT, NASR CITY
            </li>
            <li className="py-1">
              NIGERIA – ABUJA TOWER C, CHURCHGATE PLAZA, CONSTITUTION AVENUE,
              4TH FLOOR
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 ">CONTACT</h6>
          <ul>
            <li className="py-1">d.almuti@istudymena.com</li>
            <li className="py-1">+962 7968 785 34</li>
            <li className="py-1">+44 7469 048318</li>
            <li className="py-1">+01 234 567 89</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 bg-slate-400 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <p className="py-4">
          2023 Copyright © iStudy MENA. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=100063207070473"
            target="_blank"
          >
            <FaFacebook className="text-white" />
          </a>
          <a
            href="https://instagram.com/istudy_mena.uk?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <FaInstagram className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/istudy-mena/"
            target="_blank"
          >
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
