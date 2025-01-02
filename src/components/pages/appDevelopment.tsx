"use client";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../pages/trackingBeam/tracing-beam";
import { ContainerScroll } from "../pages/containerScroll/container-scroll-animation";
import image from "../../assets/images/appDevelop/1720.jpg";
import { HoverEffect } from "../acetrnity-ui/cardsHover/card-hover-effect";
import "../../App.css";
import image1 from "../../assets/images/appDevelop/1.jpg";
import image2 from "../../assets/images/appDevelop/2.jpg";
import image3 from "../../assets/images/appDevelop/3.jpg";
import image4 from "../../assets/images/appDevelop/4.jpg";
import { TypewriterEffectSmooth } from "../../components/acetrnity-ui/typing-effect/typewriter-effect";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

const AppDevelop = () => {
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
      text: "from",
    },

    {
      text: "Vision to App Store",
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
                  App Development
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
    title: "Discovery & Planning:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Understanding Your Needs: We begin by collaborating with you to
            understand your app's purpose, target audience, and desired
            functionalities.
          </li>
          <li className="pt-4">
            Competitive Analysis: We research existing apps in your niche to
            identify trends, strengths, weaknesses, and potential areas for
            differentiation.
          </li>
          <li className="pt-4">
            Project Scope Definition: Based on the gathered information, we work
            with you to define the project scope, outlining the app's key
            features and functionalities.
          </li>
        </ul>
      </>
    ),
    // badge: "React",

    image: image1,
  },
  {
    title: "Design & User Experience (UX):",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            User Journey Mapping: We map out the ideal user journey within the
            app, ensuring a smooth and intuitive experience.
          </li>
          <li className="pt-4">
            Wireframing & Prototyping: We create low-fidelity wireframes to
            visualize the app's layout and user flow. You can then provide
            feedback before we move on to a more detailed mockup stage.
          </li>
          <li className="pt-4">
            UI Design & Branding: Our design team will translate your brand
            identity into a visually appealing and user-friendly interface.
          </li>
        </ul>
      </>
    ),
    // badge: "Changelog",
    image: image2,
  },
  {
    title: "Development & Engineering:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Native vs. Hybrid vs. PWA Development: We recommend the most
            suitable development approach based on your needs, target platforms,
            and desired features.
          </li>
          <li className="pt-4">
            Front-End & Back-End Development: Our developers create the user
            interface (UI) and server-side functionality (back-end) to power
            your app.
          </li>
          <li className="pt-4">
            API Integration (if applicable): If your app requires data from
            external sources, we integrate them seamlessly using secure APIs.
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
    title: "Launch & Marketing:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            App Store Optimization (ASO): We optimize your app listing with
            relevant keywords and captivating visuals to improve app store
            discoverability.
          </li>
          <li className="pt-4">
            Launch & Marketing Strategy: We collaborate with you to develop a
            launch and marketing strategy to reach your target audience and
            drive app downloads.
          </li>
          <li className="pt-4">
            App Submission & Approval: We navigate the app store submission
            process and ensure your app meets all guidelines for approval.
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
    title: "24/7 Brand Presence",
    description:
      "Your app becomes a pocket-sized brand ambassador, accessible to customers anytime, anywhere.",
    link: "https://stripe.com",
  },
  {
    title: "Location-Based Marketing",
    description:
      "arget customers with personalized deals and promotions based on their location, increasing purchase likelihood.",
    link: "https://netflix.com",
  },
  {
    title: "Streamlined Communication",
    description:
      "Facilitate direct communication with your customers through in-app messaging or chat functionalities.",
    link: "https://google.com",
  },
  {
    title: "Stand Out from the Crowd:",
    description:
      "Having a well-designed app positions your business as innovative and customer-centric.",
    link: "https://meta.com",
  },
  {
    title: "Build Brand Loyalty",
    description:
      "A user-friendly and engaging app fosters brand loyalty and encourages customers to choose you over competitors.",
    link: "https://amazon.com",
  },
  {
    title: "Future-Proof",
    description:
      "Add new functionality or sections easily as your business grow.",
    link: "https://microsoft.com",
  },
];
// ************************
export default AppDevelop;
