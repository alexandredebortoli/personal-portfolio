import wslFantasy from "@/public/wsl_fantasy.png";
import planningPoker from "@/public/planning_poker.png";
import financialCalculator from "@/public/financial_calculator.png";
import portfolioWebsite from "@/public/portfolio_website.png";

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
