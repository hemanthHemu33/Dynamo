"use client";
// import Image from "next/image";

// import image2 from "../../../assets/logo/rahul-mishra-JpF58ANavoc-unsplash.jpg";
import imgCard1 from "../../../assets/images/wobbleCards1.jpg";
import imgCard2 from "../../../assets/images/wobbleCards2.jpg";

import { WobbleCard } from "./wobble-card";
import "../../../App.css";

const styles = {
  fontFace: {
    fontFamily: "Light",
  },
};

export function WobbleCardDemo() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
      style={styles.fontFace}
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Got a Crazy Website Idea? We Love Crazy!
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Don't be afraid to push boundaries. We turn unique website concepts
            into engaging realities.
          </p>
        </div>
        <img
          src={imgCard1}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%]  filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Craft Delightful User Journeys
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We prioritize user-friendliness with intuitive interfaces that keep
          visitors engaged.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lightning-Fast Websites that Convert
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Improve user satisfaction and conversions with blazing-fast loading
            speeds.
          </p>
        </div>
        <img
          src={imgCard2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
    </div>
  );
}
