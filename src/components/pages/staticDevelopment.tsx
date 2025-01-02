"use client";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../pages/trackingBeam/tracing-beam";
import { ContainerScroll } from "../pages/containerScroll/container-scroll-animation";
import image from "../../assets/images/staticDevlop/3527301.jpg";
import { HoverEffect } from "../acetrnity-ui/cardsHover/card-hover-effect";
import "../../App.css";
import image1 from "../../assets/images/staticDevlop/1.jpg";
import image2 from "../../assets/images/staticDevlop/2.jpg";
import image3 from "../../assets/images/staticDevlop/3.jpg";
import image4 from "../../assets/images/staticDevlop/4.jpg";
import { TypewriterEffectSmooth } from "../../components/acetrnity-ui/typing-effect/typewriter-effect";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

const StaticDevelop = () => {
  const words = [
    // Static Websites

    {
      text: "Our",
    },
    {
      text: "Specialized",
    },
    {
      text: "Strategy",
    },
    {
      text: "for",
    },
    // {
    //   text: "Dynamic",
    // },
    // {
    //   text: "Web",
    // },
    // {
    //   text: "Solutions",
    // },

    {
      text: "Static Websites.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="" style={styles.FontFace}>
      <div className="flex flex-col overflow-hidden ">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                The Perfect Solution for Small Businesses
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Static Websites
                </span>
              </h1>
            </>
          }
        >
          <img
            src={image}
            alt="scroll animation image"
            className="h-full w-full object-cover"
            height={100}
          />
        </ContainerScroll>
      </div>
      {/* text-[56px] 
      md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  */}
      {/* <h1
        className="flex justify-center font-bold sm:text-[20px] 
      md:text-[2.5rem]  "
      >
        Our Specialized Strategy for Dynamic Web Solutions
      </h1> */}

      <TypewriterEffectSmooth className="flex justify-center " words={words} />
      <TracingBeam className="px-6 ">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2> */}

              <p className={twMerge("text-xl mb-4 font-bold")}>{item.title}</p>

              <div className="  prose prose-sm dark:prose-invert text-[18px]   ">
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover"
                />
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-8 my-20">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Focusing on Value Proposition:
          </h1>
          <HoverEffect items={projects} />
        </div>
      </TracingBeam>
    </div>
  );
};

const dummyContent = [
  {
    title: "Collaborative Planning & Discovery",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Understanding Your Needs: We initiate the process by having in-depth
            discussions with you. We'll delve into your vision, target audience,
            desired functionalities, and brand guidelines for the website.
          </li>
          <li className="pt-4">
            Content Gathering & Analysis: Existing content like text, images,
            and logos are collected and analyzed to determine what needs to be
            created or included.
          </li>
          <li className="pt-4">
            Competitive Landscape Review: We analyze your competitor's websites
            to identify best practices and potential areas for differentiation.
          </li>
          <li className="pt-4">
            Project Scope Definition: Based on the gathered information, we
            collaborate to define the project scope, outlining the website's key
            features and functionalities.
          </li>
        </ul>
      </>
    ),
    // badge: "React",

    image: image1,
  },
  {
    title: "Content Strategy & Design",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Content Creation & Curation: High-quality content is crucial. We
            either draft compelling website copy or guide you in the content
            creation process.
          </li>
          <li className="pt-4">
            Information Architecture Planning: We determine the optimal
            organization of content for a user-friendly and intuitive website
            layout.
          </li>
          <li className="pt-4">
            Wireframing & Prototyping: We create low-fidelity wireframes to
            visualize the website's structure and page layouts. You can then
            provide feedback before we move to a more detailed design phase.
          </li>
          <li className="pt-4">
            Visual Design & Branding: Our design team will translate your brand
            identity into a visually appealing and consistent website design.
            This includes color palettes, typography, and overall aesthetic.
          </li>
        </ul>
      </>
    ),
    // badge: "Changelog",
    image: image2,
  },
  {
    title: "Clean Code & Optimization",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Front-End Development: We hand-code the website using prefered
            technology for basic interactivity. This ensures clean, efficient,
            and lightweight code for optimal performance.
          </li>
          <li className="pt-4">
            Responsive Design: We prioritize responsive design to ensure the
            website adapts seamlessly for flawless viewing across various
            devices – desktops, tablets, and smartphones.
          </li>
          <li className="pt-4">
            Search Engine Optimization (SEO): We implement best practices for
            on-page SEO optimization to improve your website's search engine
            ranking and organic visibility.
          </li>
          {/* <li className="pt-4">
            Website Sitemap & Wireframing: Create a visual blueprint of the
            website's structure, including page layouts, user flows, and
            navigation hierarchy.
          </li> */}
        </ul>
      </>
    ),
    // badge: "Launch Week",
    image: image3,
  },
  {
    title: "Testing & Deployment",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Rigorous Testing: The website undergoes rigorous testing across
            different browsers and devices to ensure functionality,
            responsiveness, and compatibility. This includes user acceptance
            testing (UAT) where you can provide final feedback.
          </li>
          <li className="pt-4">
            Deployment & Launch: Once testing is complete, we launch your
            website on a secure web hosting server and configure any domain
            names or SSL certificates.
          </li>
          <li className="pt-4">
            Post-Launch Support: We offer ongoing support packages to address
            any minor issues or provide assistance with future content updates.
          </li>
        </ul>
      </>
    ),
    // badge: "Launch Week",
    image: image4,
  },
];
// **************************************************************************

export const projects = [
  {
    title: "Effortless Management",
    description:
      "Edit content without coding knowledge through user-friendly CMS.",
    link: "https://stripe.com",
  },
  {
    title: "Faster & Smoother Experience",
    description: "Fast loading and clear design enhance visitor experience.",
    link: "https://netflix.com",
  },
  {
    title: "Content is King",
    description: "Showcase your expertise through engaging text and visuals.",
    link: "https://google.com",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "  Static websites offer a budget-friendly solution for a strong online presence.",
    link: "https://meta.com",
  },
  {
    title: "Long-Term Support",
    description:
      "We're here to assist you with future website maintenance and updates.",
    link: "https://amazon.com",
  },
  {
    title: "Future-Proof",
    description: "Add new pages or sections easily as your business grow.",
    link: "https://microsoft.com",
  },
];
// ************************
export default StaticDevelop;
