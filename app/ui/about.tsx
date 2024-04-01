"use client";

import SectionTitle from "@/app/ui/section-title";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionTitle>About Me</SectionTitle>
      <p className="mb-3">
        While graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to
        pursue my passion for programming early-on. I enrolled in a trainee
        program in partnership with my college and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Node.js, NestJS, Typescript and Postgres
        </span>
        . I am also familiar with Python and Django. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        surfing, playing video games, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">observability and Grafana</span>.
      </p>
    </motion.section>
  );
}
