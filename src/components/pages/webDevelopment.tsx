"use client";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../pages/trackingBeam/tracing-beam";
import { ContainerScroll } from "../pages/containerScroll/container-scroll-animation";
import image from "../../assets/images/web.jpg";
import { HoverEffect } from "../acetrnity-ui/cardsHover/card-hover-effect";
import "../../App.css";
import image1 from "../../assets/images/webDevelop/plan.jpg";
import image2 from "../../assets/images/webDevelop/develop.jpg";
import image3 from "../../assets/images/webDevelop/deployment.jpg";
import image4 from "../../assets/images/webDevelop/maintain.jpg";
import { TypewriterEffectSmooth } from "../../components/acetrnity-ui/typing-effect/typewriter-effect";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

const WebDevelop = () => {
  const words = [
    // Our Specialized Strategy for Dynamic Web Solutions
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
    {
      text: "Dynamic",
    },
    // {
    //   text: "Web",
    // },
    // {
    //   text: "Solutions",
    // },

    {
      text: "Web Development.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="" style={styles.FontFace}>
      <div className="flex flex-col overflow-hidden ">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className=" text-4xl font-semibold text-black dark:text-white">
                Unlock New Business Potential with
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Dynamic Websites
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

              <div className="  prose prose-sm dark:prose-invert text-[20px]">
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
    title: "Discovery and Planning",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Understanding Client Needs: Collaborate with the client to
            understand their business goals, target audience, and desired
            functionalities for the website.
          </li>
          <li className="pt-4">
            Information Gathering: This involves collecting existing content,
            brand guidelines, and user data (if available) to shape the
            website's structure and design.
          </li>
          <li className="pt-4">
            Technical Requirements: Determine the technologies and frameworks
            best suited for the project based on complexity, features, and
            scalability needs.
          </li>
          <li className="pt-4">
            Website Sitemap & Wireframing: Create a visual blueprint of the
            website's structure, including page layouts, user flows, and
            navigation hierarchy.
          </li>
        </ul>
      </>
    ),
    // badge: "React",

    image: image1,
  },
  {
    title: " Design and Development:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Front-End Development: Code the user interface (UI) using HTML, CSS,
            and potentially JavaScript frameworks like React or Angular. This
            involves creating visually appealing and interactive elements.
          </li>
          <li className="pt-4">
            Back-End Development: Develop the server-side logic using
            server-side languages like Python, Java or Node.js. This focuses on
            data management, user interaction processing, and database
            interaction.
          </li>
          <li className="pt-4">
            Content Management System (CMS) Integration: Implement a CMS like
            WordPress or Drupal to allow the client to easily update content and
            manage the website without needing to code.
          </li>
          <li className="pt-4">
            Database Design: Design and build a database to store dynamic
            content like product information, user data, or blog posts. The
            database structure should be efficient and scalable for future
            growth.
          </li>
        </ul>
      </>
    ),
    // badge: "Changelog",
    image: image2,
  },
  {
    title: "Testing and Deployment:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Quality Assurance (QA) Testing: Rigorously test the website across
            different browsers and devices to ensure functionality,
            responsiveness, and compatibility.
          </li>
          <li className="pt-4">
            Usability Testing: Observe real users interact with the website to
            identify any usability issues and refine the user experience.
          </li>
          <li className="pt-4">
            Deployment: Once testing is complete, deploy the website to a secure
            web hosting server and configure any necessary domain names and SSL
            certificates.
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
    title: "Maintenance and Support:",
    description: (
      <>
        <ul className="list-disc leading-6">
          <li className="pt-4">
            Ongoing Maintenance: Provide ongoing maintenance services to fix
            bugs, update software, and address security vulnerabilities.
          </li>
          <li className="pt-4">
            Content Updates: Support the client with ongoing content updates
            through the CMS to keep the website fresh and relevant.
          </li>
          <li className="pt-4">
            Performance Monitoring: Monitor website performance metrics and
            optimize for speed and user experience.
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
    title: "Engaged Users",
    description:
      " Dynamic content keeps visitors hooked and coming back for more.",
    link: "https://stripe.com",
  },
  {
    title: "24/7 Sales Machine",
    description: "Your website works tirelessly for you, day and night.",
    link: "https://netflix.com",
  },
  {
    title: "Data-Driven Insights",
    description: "Gain valuable user data to optimize your marketing strategy.",
    link: "https://google.com",
  },
  {
    title: "Grow Leads & Clients",
    description: " Dynamic websites capture leads and convert them faster.",
    link: "https://meta.com",
  },
  {
    title: "Cost-Effective",
    description:
      "Save time and money with easy content management and maintenance.",
    link: "https://amazon.com",
  },
  {
    title: "Scalability",
    description: "Seamlessly expand your website as your business grows.",
    link: "https://microsoft.com",
  },
];
// ************************
export default WebDevelop;
