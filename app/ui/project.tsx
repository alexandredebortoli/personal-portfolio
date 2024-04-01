"use client";

import { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaHourglassHalf, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[46rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white flex">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center w-1/2 pl-2 pr-6 sm:px-4">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className=" hidden sm:block max-w-1/2 max-h-[15rem] object-contain rounded-lg"
          />
          <div className="flex gap-6 sm:gap-10 text-xl text-gray-700 dark:text-white/70 justify-center items-center">
            {websiteUrl ? (
              <a href={websiteUrl} title="Project Website" target="_blank">
                <FaLink />
              </a>
            ) : (
              <a title="Project In Progress">
                <FaHourglassHalf />
              </a>
            )}
            <a href={githubUrl} title="Project Code" target="_blank">
              <FaCode />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
