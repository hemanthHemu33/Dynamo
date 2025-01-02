"use client";

import { StickyScroll } from "./sticky-scroll-reveal";

// import * as img from "../../../assets/images";

import frustratedImg from "../../../assets/images/frustrated.jpg";
import teamwork from "../../../assets/images/teamwork.jpg";
import comunnication from "../../../assets/images/comunication.jpg";
import scope from "../../../assets/images/scope.jpg";
import price from "../../../assets/images/lowprice.jpg";
import effciency from "../../../assets/images/effciency.jpg";
// const images = require.context("../../images", true);
// const imageList = images.keys().map((image) => images(image));

import "../../../App.css";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};
const content = [
  {
    title: "Tired of Web Development Headaches? We Get It.",
    description:
      "Building your dream website shouldnt be a nightmare. At Dynamo we understand the frustrations clients face with traditional web development: unclear communication,scope creep, surprise fees, and worst of all, a final product that falls short. ",

    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //   Collaborative Editing
      // </div>
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={frustratedImg}
          width="320px"
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Introducing a Better Way to Build Your Web Presence",
    description:
      "We're a team of passionate developers who are as obsessed with exceeding expectations as we are with clean code.  We offer a transparent and collaborative approach to development",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={teamwork}
          width="320px"
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
      </div>
    ),
  },
  {
    title: "Clear Communication",
    description:
      "We'll work closely with you to understand your vision, goals, and target audience.  No tech jargon, just clear conversations to ensure we're all on the same page.",
    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      //   Version control
      // </div>
      <img
        src={comunnication}
        width={320}
        height={300}
        className="h-80 w-5/4 object-cover"
        alt=""
      />
    ),
  },
  {
    title: "Scope Management",
    description:
      "We'll define a clear project scope upfront and stick to it.  No more unwelcome surprises or feature creep derailing your launch.",
    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      //   Version control
      // </div>
      <img
        src={scope}
        width="320px"
        height={300}
        className="h-80 w-full object-cover"
        alt=""
      />
    ),
  },
  {
    title: "Predictable Pricing",
    description:
      "We offer upfront pricing models with no hidden fees.  You'll know exactly what you're paying for, from the start.",
    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      //   Version control
      // </div>
      <img
        src={price}
        width="320px"
        height={300}
        className="h-full w-full object-cover"
        alt=""
      />
    ),
  },
  {
    title: "Quality & Efficiency",
    description:
      "Our developers are highly skilled and code with efficiency in mind.  This means a website that not only looks fantastic but functions flawlessly and loads lightning fast.",
    content: (
      // <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      //   Version control
      // </div>
      <img
        src={effciency}
        width="320px"
        height={300}
        className="h-full w-full object-cover"
        alt=""
      />
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10" style={styles.FontFace}>
      <StickyScroll content={content} />
    </div>
  );
}
