"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

// const routerLink = () => {
//   window.location.href = "/webDevelop";
// };

// Define separate click functions for each card

export function CanvasRevealEffectDemo() {
  const navigate = useNavigate();
  const handleDynamicWebsitesClick = () => {
    navigate("/webDevelop");
  };

  const handleAppDevelopmentClick = () => {
    navigate("/appDevelop");
  };

  const handleStaticWebsitesClick = () => {
    navigate("/staticDevelop");
  };
  return (
    <>
      <div
        style={styles.FontFace}
        className="py-20 
        flex 
        flex-col 
        lg:flex-row items-center 
        justify-center bg-white 
        dark:bg-black
         w-full 
         gap-4 
         mx-auto
         px-8"
      >
        {/* <a href="/webDevelop"></a> */}

        <Card
          title="Dynamic Websites"
          subtitle="Dynamic Websites"
          icon={cardIcons[0].first}
          onClick={handleDynamicWebsitesClick}
          description="We create interactive websites with real-time content updates, perfect for e-commerce, social networks, and more."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          onClick={handleAppDevelopmentClick}
          title="App Devlopment"
          subtitle=" App Devlopment"
          description="We develop high-quality mobile apps for iOS and Android, ensuring seamless and engaging user experiences."
          icon={cardIcons[0].second}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2.5}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        {/* icon={<AceternityIcon />} */}
        <Card
          onClick={handleStaticWebsitesClick}
          title="Static Websites"
          description="We build fast, secure, and reliable static websites, ideal for portfolios, company pages, and blogs."
          subtitle=" Static Websites "
          icon={cardIcons[0].third}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  subtitle,
  icon,
  children,
  description,
  onClick,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  onClick: () => void; // Add onClick prop
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
      onClick={onClick}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <p className="font-bold text-xl text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {subtitle}
        </p>
        <h2
          className="dark:text-white text-xl opacity-0 
        group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  
        font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="dark:text-white opacity-0  leading-4
        group-hover/canvas-card:opacity-100 relative  text-black   
        group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
//       <path
//         d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5
//      34.7 22 39.6s34.7-5
//      39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6
//      120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7
//       256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3
//       0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3
//       0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5
//       12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
//         stroke="currentColor"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

const cardIcons = [
  {
    first: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 50 50"
      >
        <path
          d="M19,25.08,22.39,20h0L25,16.11h0L26.49,14a1.11,1.11,0,0,0-.3-1.54,1.1,1.1,0,0,0-1.53.3l-1.14,1.68H7.86a1.11,1.11,0,0,0,0,2.21H22l-1.15,1.7H14.49a1.11,1.11,0,1,0,0,2.21h4.9L18.24,22.2H4.37a1.11,1.11,0,0,0,0,2.21H16.75l0,.05a1.12,1.12,0,0,0,0,1.24l.28.41H7.86a1.11,1.11,0,0,0,0,2.21H18.49L19.64,30H14a1.11,1.11,0,0,0,0,2.21h7.14l1.05,1.55H9.36a1.11,1.11,0,0,0,0,2.21H23.67l.88,1.3a1.11,1.11,0,0,0,1.54.3,1.11,1.11,0,0,0,.29-1.54l-1.2-1.78h0Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M37.23,12.27a1.09,1.09,0,0,0-1.37.74L28.79,36.35a1.1,1.1,0,0,0,.74,1.38,1.19,1.19,0,0,0,.32.05A1.11,1.11,0,0,0,30.91,37L38,13.65A1.1,1.1,0,0,0,37.23,12.27Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M49.58,24.3,41.75,12.71A1.11,1.11,0,1,0,39.92,14l7.41,11L39.82,36.05a1.1,1.1,0,0,0,.91,1.73,1.09,1.09,0,0,0,.92-.49l7.93-11.75A1.08,1.08,0,0,0,49.58,24.3Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M10.91,31.12A1.1,1.1,0,0,0,9.81,30H1.33a1.11,1.11,0,0,0,0,2.21H9.81A1.11,1.11,0,0,0,10.91,31.12Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M2,20.51h8.25a1.11,1.11,0,1,0,0-2.21H2a1.11,1.11,0,1,0,0,2.21Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    ),
    second: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 50 50"
      >
        <path
          d="M17.13,44.17a5.07,5.07,0,0,1-5.06-5.06V28.89L8.85,25.66a.92.92,0,0,1,0-1.32l3.22-3.23V10.89a5.07,5.07,0,0,1,5.06-5.06.94.94,0,0,1,0,1.88A3.18,3.18,0,0,0,14,10.89V21.5a1,1,0,0,1-.28.67L10.84,25l2.83,2.83a1,1,0,0,1,.28.67V39.11a3.18,3.18,0,0,0,3.18,3.18.94.94,0,0,1,0,1.88Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
          d="M32.87,44.17a.94.94,0,0,1,0-1.88,3.18,3.18,0,0,0,3.18-3.18V28.5a1,1,0,0,1,.28-.67L39.16,25l-2.83-2.83a1,1,0,0,1-.28-.67V10.89a3.18,3.18,0,0,0-3.18-3.18.94.94,0,1,1,0-1.88,5.07,5.07,0,0,1,5.06,5.06V21.11l3.22,3.23a.92.92,0,0,1,0,1.32l-3.22,3.23V39.11A5.07,5.07,0,0,1,32.87,44.17Z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
          d="M26.83,39.61A1.83,1.83,0,1,1,25,37.78,1.83,1.83,0,0,1,26.83,39.61Z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
          d="M33,10H17a1.15,1.15,0,0,0-1.15,1.15V33.43A1.16,1.16,0,0,0,17,34.59H33a1.16,1.16,0,0,0,1.15-1.16V11.17A1.15,1.15,0,0,0,33,10Zm0,2.29-14.72,21a.75.75,0,0,1-1.05.18.74.74,0,0,1-.18-1l14.72-21a.75.75,0,0,1,1.05-.18A.74.74,0,0,1,33,12.31Z"
        />
      </svg>
    ),

    third: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 50 50"
      >
        <path
          d="M7.44,18.67V9.41a.08.08,0,0,1,.08-.08h2.76a1.31,1.31,0,1,0,0-2.61H7.52A2.69,2.69,0,0,0,4.83,9.41v9.26a.67.67,0,0,1-.18.44L2.8,21a1.3,1.3,0,0,0,0,1.84l1.85,1.85a.63.63,0,0,1,.18.44v9.25A2.68,2.68,0,0,0,7.52,37h2.76a1.31,1.31,0,1,0,0-2.61H7.52a.07.07,0,0,1-.08-.08V25.08a3.27,3.27,0,0,0-1-2.29l-.92-.92L6.49,21A3.25,3.25,0,0,0,7.44,18.67Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M47.2,21l-1.85-1.84a.67.67,0,0,1-.18-.44V9.41a2.69,2.69,0,0,0-2.69-2.69H39.71a1.31,1.31,0,0,0,0,2.61h2.77a.08.08,0,0,1,.08.08v9.26A3.25,3.25,0,0,0,43.51,21l.92.92-.92.92a3.27,3.27,0,0,0-.95,2.29v9.25a.07.07,0,0,1-.08.08H39.71a1.31,1.31,0,0,0,0,2.61h2.77a2.68,2.68,0,0,0,2.69-2.69V25.08a.6.6,0,0,1,.19-.44l1.84-1.85A1.3,1.3,0,0,0,47.2,21Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M35.06,40.67H31.52V37h3.29a1.31,1.31,0,1,0,0-2.61H15.19a1.31,1.31,0,1,0,0,2.61h3.29v3.65H14.94a1.31,1.31,0,0,0,0,2.61H35.06a1.31,1.31,0,0,0,0-2.61Zm-14,0V37h7.82v3.65Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M15.19,9.33H34.81a1.31,1.31,0,1,0,0-2.61H15.19a1.31,1.31,0,1,0,0,2.61Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M35.06,14,21.18,27.89a1.32,1.32,0,0,0,0,1.84,1.29,1.29,0,0,0,1.85,0L36.91,15.86A1.31,1.31,0,1,0,35.06,14Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
        <path
          d="M14.94,29.73,28.81,15.86A1.3,1.3,0,1,0,27,14L13.09,27.89a1.3,1.3,0,1,0,1.85,1.84Z"
          stroke="currentColor"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    ),
  },
];
