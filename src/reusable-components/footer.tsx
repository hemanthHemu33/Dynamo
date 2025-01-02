import React from "react";
import { SignupFormDemo } from "../components/acetrnity-ui/footerForm/formComponent";
import logo from "../assets/logo/logo.png";
import styless from "./footer.module.css";

const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="w-full p-6 bg-black text-white flex justify-center"
        style={styles.FontFace}
      >
        <div
          className="flex flex-wrap lg:flex-nowrap
         md:flex-wrap w-11/12  gap-8"
        >
          <div className="w-full  lg:w-1/2 flex flex-col items-center md:items-start">
            <div className="">
              <a href="/" className="flex align-center text-xl gap-2">
                <img width={"50px"} src={logo} alt="logo" />
                <h1 className={styless.companyTitle}>ynamo</h1>
              </a>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <h3 className="text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 flex-wrap">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <h3 className="text-lg mb-4 mt-4">Services</h3>
            <div className="flex space-x-4 flex-wrap">
              <a href="#" className="hover:text-gray-400">
                Web Development
              </a>
              <a href="#" className="hover:text-gray-400">
                App Development
              </a>
              <a href="#" className="hover:text-gray-400">
                Static Website
              </a>
              <a href="#" className="hover:text-gray-400">
                Maintenance
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2  flex flex-col items-center justify-right   md:items-start mb-6 md:mb-0 mt-4">
            <SignupFormDemo />
            <p className="mt-6 w-full flex justify-center">
              &copy; 2024 Dynamo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
