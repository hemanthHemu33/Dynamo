"use client";
import React from "react";
import "../../../App.css";
import styless from "./profile.module.css";
import gropuDevlop from "../../../assets/images/gropDevlop.jpg";

import { Boxes } from "./background-boxes";
import { cn } from "../../../utils/cn";
// import { TailwindcssButtons } from "../tailwindButtons/buttonsComponent";

const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

const Profile: React.FC = () => {
  return (
    <div style={styles.FontFace} className={styless.profileBlock}>
      <div
        className="h-full relative w-11/12 
            overflow-hidden
             bg-slate-900 flex
              flex-col
               p-20
                rounded-lg"
      >
        <div
          className="absolute inset-0 w-full
               h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        />

        <Boxes />
        <div className="flex flex-wrap">
          <div
            className="md:flex 
            md:flex-wrap
          lg:flex-wrap
          xl:flex-nowrap
           gap-14"
          >
            {/* **************** */}
            <div className="flex-grow">
              <h1
                className={cn("md:text-4xl text-2xl text-white relative z-20")}
              >
                Your Vision, Our Expertise, Building Success.
              </h1>
              <p
                className={cn(
                  "md:text-lg text-sm text-white relative z-20 mt-9 font-normal"
                )}
              >
                Imagine a team who not only speaks the language of development,
                but also understands the language of your business. We're a
                passionate collective of developers who have walked in your
                shoes – navigating the ever-evolving digital landscape, yearning
                for a website that not only reflects your brand but propels your
                success. We're not here to simply translate pixels and code.
                We're here to become an extension of your team, delving deep
                into your vision and goals. Through collaborative conversations,
                we'll craft a strategic roadmap, transforming your aspirations
                into a tangible plan. Our expertise goes beyond the technical.
                We're your digital architects, meticulously designing and
                building a website that's not just aesthetically pleasing, but a
                powerful tool that drives measurable results. We believe in the
                transformative potential of web development, and we're
                passionate about using our skills to empower your business to
                thrive online. Let's embark on this journey together. Partner
                with us, and witness your vision take shape as a website that
                becomes a cornerstone of your online success.
              </p>
              <div className="relative z-20 mt-6 flex flex-wrap items-center md:gap-10 lg:gap:10 w-full">
                <div className="w-full md:w-8/12 text-lg md:text-2xl">
                  <h2>
                    From Clicks to Conversions. We Create Websites that Get
                    Results.
                  </h2>
                </div>
                <div className="w-full md:w-auto">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full 
                    bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
                    >
                      BOOK MY TOUR
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* *************** */}

            <div className=" md:grow-0 rounded-sm flex-shrink-0">
              <img width={500} src={gropuDevlop} alt="image" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<div className="flex flex-wrap">
  <div className="flex-shrink-0 w-2/3 bg-blue-500 p-4">
    Content of the first child
  </div>
  <div className="flex-wrap flex-grow bg-red-500 p-4">
    Content of the rest components
  </div>
</div>;
export default Profile;
