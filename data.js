import djello from "./public/Djello_screenshot.png";
import nominfans from "./public/nominfans.png";
import mns from "./public/mns.png";
export const projects = [
  {
    name: "Nominfans",
    subtitle: "Collaborative Baby Name Ranker built on the MERN stack.",
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "Context API",
      "SendGrid",
      "JWT",
      "Multer",
      "Heroku",
      "S3",
    ],
    image: nominfans,
    codeLink: "https://github.com/mac718/baby_names",
    liveLink: "https://nominfans.herokuapp.com",
  },
  {
    name: "Djello",
    subtitle: "A Trello-like application built on the MERN stack.",
    technologies: ["Express", "React", "JWT", "Context API", "SendGrid"],
    image: djello,
    codeLink: "https://github.com/mac718/Djello",
    liveLink: "https://djello1.herokuapp.com/",
  },
  {
    name: "Mike's Natural Soaps",
    subtitle: "An e-commerce site for my small business built with NextJS",
    technologies: [
      "Next.js",
      "Context API",
      "MongoDB",
      "MongoDB Atlas",
      "Paypal Smart Checkout SDK",
      "Vercel",
      "ShipStation API",
    ],
    image: mns,
    codeLink: "https://github.com/mac718/mns",
    liveLink: "https://mikesnaturalsoaps.com",
  },
];
