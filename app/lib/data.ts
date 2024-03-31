import wslFantasy from "@/public/wsl_fantasy.png";
import planningPoker from "@/public/planning_poker.png";
import financialCalculator from "@/public/financial_calculator.png";
import portfolioWebsite from "@/public/portfolio_website.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "World Surf League Fantasy Game",
    description:
      "WSL Fantasy Game for predicting top surfers for each event. Web scraper gathers real-time surfer rankings & event results.",
    tags: ["Python", "Django", "Postgres", "Web Scraping", "Javascript"],
    imageUrl: wslFantasy,
    githubUrl: "",
    websiteUrl: "https://wsl-fantasy.herokuapp.com/",
  },
  {
    title: "My Portfolio Website",
    description:
      "This portfolio site, showcases my development projects, technical skills, and a contact form to get in touch with me.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: portfolioWebsite,
    githubUrl: "https://github.com/alexandredebortoli/alexandredebortoli",
    websiteUrl: "https://wsl-fantasy.herokuapp.com/",
  },
  {
    title: "Planning Poker App",
    description:
      "SprintVote is a mobile app for agile planning. Say goodbye to the hassles of manual estimation and voting on story points.",
    tags: ["Typescript", "React Native", "Node.js", "Websockets"],
    imageUrl: planningPoker,
    githubUrl: "https://github.com/alexandredebortoli/sprint-vote",
    websiteUrl: "",
  },
  {
    title: "Financial Calculator",
    description:
      "The Financial Calculator simplifies forecasting financial growth. Input initial investment, interest rate, and duration for instant earnings forecasts.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: financialCalculator,
    githubUrl: "https://github.com/alexandredebortoli/calculadora-financeira",
    websiteUrl: "https://alexandredebortoli.github.io/calculadora-financeira",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Sequelize",
  "Fastify",
  "Express",
  "PostgreSQL",
  "Jest",
  "Python",
  "Django",
] as const;

export const experiencesData = [
  {
    title: "Title 3",
    description: "description 3",
    icon: React.createElement(FaReact),
    date: "2022- present",
  },
  {
    title: "Title 2",
    description: "description 2",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Title 1",
    description:
      "description 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;
