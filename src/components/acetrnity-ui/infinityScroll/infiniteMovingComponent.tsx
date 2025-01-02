"use client";

import { InfiniteMovingCards } from "./infinite-moving-cards";
import "../../../App.css";

const styles = {
  FontFace: {
    fontFamily: "Light",
  },
};

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <div
        style={styles.FontFace}
        className="h-[20rem]
         rounded-md 
         flex 
         flex-col 
        antialiased 
        bg-white 
        dark:bg-black dark:bg-grid-white/[0.05] 
    items-center 
    justify-center 
    relative 
    overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team has been a transformative experience. They navigated our project with ease and precision, demonstrating a level of wisdom and expertise that truly impressed us. It's been the best decision for our company.",
    name: "Charles Dickens",
    title: "CEO of Literary Solutions",
  },
  {
    quote:
      "To hire, or not to hire, that is the question. Whether 'tis better to suffer through mediocre services or to engage this outstanding team. Their seamless execution and user-friendly approach made our project a success. The choice is clear.",
    name: "William Shakespeare",
    title: "Director of Theatrical Productions",
  },
  {
    quote:
      "All that we envisioned for our project was realized and exceeded our expectations. The team's creativity and dedication make the experience feel almost dreamlike.",
    name: "Edgar Allan Poe",
    title: "Creative Director at DreamWorks",
  },
  {
    quote:
      "It is a truth universally acknowledged that a company in search of excellence must work with this team. Their intuitive solutions and comprehensive features made our collaboration an absolute pleasure.",
    name: "Jane Austen",
    title: "Head of Editorial at Classic Publishing",
  },
  {
    quote:
      "Call me impressed. From the moment we engaged with them, they demonstrated a wealth of knowledge and provided exceptional service that exceeded our expectations. We couldn't be more satisfied with the results.",
    name: "Herman Melville",
    title: "Founder of Nautical Ventures",
  },
];
