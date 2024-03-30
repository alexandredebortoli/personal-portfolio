"use client";

import React from "react";
import SectionTitle from "@/app/ui/section-title";
import { projectsData } from "@/app/lib/data";
import Project from "./project";
import { useSectionInView } from "@/app/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionTitle>My projects</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
