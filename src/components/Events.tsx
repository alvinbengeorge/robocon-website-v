"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    title: "ARC",
    category: "Event",
    src: "/events/ARC.JPG",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-300">
        </p>
      </div>
    ),
  },
  {
    title: "Orientation 2024",
    category: "Event",
    src: "/events/orientation2024.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-300">
        </p>
      </div>
    ),
  },
  {
    title: "Solidworks Bootcamp 2.0",
    category: "Bootcamp",
    src: "/events/SW Poster R2.png",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-300">
        </p>
      </div>
    ),
  },

]

export default function Events() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true}/>
  ));

  return (
    <div className="h-full py-20">
      <h2 className="">
        We did some events
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
