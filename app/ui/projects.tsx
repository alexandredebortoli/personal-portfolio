import React from "react";
import SectionTitle from "@/app/ui/section-title";
import { projectsData } from "@/app/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
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
