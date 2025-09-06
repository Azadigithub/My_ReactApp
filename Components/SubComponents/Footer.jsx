import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import Mymap from "./Mymap";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="bg-My-yellow-200 flex items-center justify-evenly py-8 px-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">
            Become a Real Estate Agent
          </h2>
          <p className="mb-4">
            We only work with the best companies around the globe.
          </p>
        </div>
        <button className="bg-My-yellow-300 flex items-center justify-center py-2 px-6 rounded gap-[10px]">
          <h6>

          Register Now
          </h6>
          <FaArrowRight />
        </button>
      </div>

      <div className="bg-My-black-100 flex flex-col">
        <div className="flex items-center justify-between px-[100px] py-[50px] border-b-2 border-white">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2 ">JustHome</h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter to receive weekly leads.
            </p>
          </div>
          <div className="flex items-center justify-end gap-[50px] p-[20px]">
            <h6 className="text-white">Follow Us</h6>
            <FaSquareFacebook className="bg-white" size={30} />
            <FaTwitter className="bg-white" size={30} />
            <PiInstagramLogoFill className="bg-white" size={30} />
            <RiLinkedinFill className="bg-white" size={30} />
          </div>
        </div>

        <div className="flex items-start justify-evenly p-[20px]">
          {/* Discover */}
          <div className="text-white">
            <h4 className="mb-2 ">Discover</h4>
            <ul className="space-y-1 text-sm">
              <li>New York</li>
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>Austin</li>
              <li>San Diego</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h4 className="mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Pricing Plans</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Conatct */}
          <div className="text-white">
            <h4 className="mb-2">Contact</h4>
            <p className="text-sm">Email: highhome.com</p>
            <p className="text-sm">Phone: +01 234 567 88</p>
          </div>

          {/* Address*/}
          <div className="text-white">
            <h4 className="mb-2">Address</h4>
            <p className="text-sm">99 Fifth Avenue, Suite 203</p>
            <p className="text-sm mb-4">San Francisco, CA 10110</p>
          </div>
        </div>
        <Mymap />
        <div className="text-center py-4 text-sm text-gray-500 border-t">
          © 2025 JustHome
        </div>
      </div>
    </footer>
  );
};

export default Footer;
