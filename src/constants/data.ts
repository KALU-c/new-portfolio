import images from "./images";

const ProjectCardData = [
  {
    languages: "HTML CSS JAVASCRIPT",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    imgURL: images.project1,
  },
  {
    languages: "React Express Discord.js Node.js SCSS Python Flask",
    title: "ProtectX",
    description: "Discord anti-crash bot",
    imgURL: images.project2
  },
  {
    languages: "CSS Express Node.js",
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    imgURL: images.project3
  }
];

const SkillCardData = [
  {
    title1: "Languages",
    title2: "Databases",
    title3: "Other",
    title4: "Tools",
    title5: "Frameworks",
  },
  {
    description1: "Typescript Lua Python Javascript",
    description2: "SQLite PostgreSQL Mongo",
    description3: "HTML CSS EJS SCSS REST",
    description4: "VSCode Linux Figma Arc Git Font Awesome",
    description5: "React Vue Discord.js Express.js Flask",
  }
]

export default { ProjectCardData, SkillCardData }