"use client";

import SectionTitle from "@/app/ui/section-title";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionTitle>About Me</SectionTitle>
      <p className="mb-3">
        While graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to
        pursue my passion for programming early-on. I enrolled in a trainee
        program with partnership with my college and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Node.js, NestJS, Typescript and Postgres
        </span>
        . I am also familiar with Python and SequelizeORM. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy surfing,
        playing video games, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">observability and Grafana</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}