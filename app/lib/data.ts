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
    title: "WSL Fantasy Game",
    description:
      "WSL Fantasy Game for predicting top surfers for each event. Web scraper gathers real-time surfer rankings & event results.",
    tags: ["Python", "Django", "Postgres", "Web Scraping"],
    imageUrl: wslFantasy,
    githubUrl: "https://github.com/alexandredebortoli/fantasy-surf-league",
    websiteUrl: "https://fantasy-surf-league.onrender.com/",
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
    websiteUrl: null,
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
    title: "Software Engineer",
    description:
      "Developed scalable distributed web applications for finance industry utilizing microservices architecture with Fastify, PostgreSQL, MongoDB, and AWS Cloud services (S3, SQS, Cognito). Enable communication through gRPC and HTTP protocols. Automate operational tasks and data manipulation in Python for on-call support and AWS management.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Software Engineer Intern",
    description:
      "Developed and maintained scalable microservices, contributed to feature planning, design, and implementation. Conducted test automation (unit and integration testing) and demonstrated a keenness for learning new technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-stack Developer Trainee",
    description:
      "Completed 200-hour full-stack development course, including practical assignments and final projects. Recognized as a top performer and awarded scholarship.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Computer Enginnering",
    description:
      "Currently pursuing a Bachelor's Degree in Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;
