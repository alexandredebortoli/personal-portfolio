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
        It still amazes me how a few lines of code can shape the way people live
        and work. <br />
        <br /> I&apos;m a{" "}
        <span className="font-bold">Senior Software Engineer</span> who loves
        turning ideas into scalable, meaningful products. I care about clean
        architecture, thoughtful design, and using data to make smarter
        decisions. <br />
        <br /> Right now, I build full-stack solutions at Amicci using{" "}
        <span className="font-medium">
          Node.js, Python, React, BigQuery, AWS, and GCP
        </span>
        . What drives me most is seeing technology help people do things they
        couldn&apos;t do before.
        <br />
        <br />I believe curiosity is just as important as technical skill.
        Outside of code, you&apos;ll usually find me exploring new ideas,
        improving side projects, or reading about design and product thinking.
        I&apos;m always looking for new ways to blend technology with purpose.
        <br />
        <br />
        🌎 Always happy to connect!
      </p>
    </motion.section>
  );
}
