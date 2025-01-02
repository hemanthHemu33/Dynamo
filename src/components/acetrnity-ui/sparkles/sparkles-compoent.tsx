"use client";

// import { GridBackgroundDemo } from "../lines-bg/bg";
import { SparklesCore } from "../sparkles/sparkles";
import "../../../App.css";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};
export function SparklesPreview() {
  return (
    <div
      style={styles.FontFace}
      className="h-[35rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden "
    >
      {/* <p className=" md:text-2xl text-xl lg:text-4xl text-center text-white relative ">
        The road to freedom starts from here
      </p> */}
      <p className=" md:text-2xl text-xl lg:text-4xl text-center text-white relative ">
        The road to digital domination starts here
      </p>
      <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        {/* Build awesome websites with DYNAMO */}
        Build Websites & Mobile apps with DYNAMO.
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
