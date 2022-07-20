import ReactLogo from "../assets/images/react.png";
import Vue from "../assets/images/vue.png";
import Laravel from "../assets/images/laravel.png";
import Webpack from "../assets/images/webpack.png";
import Axios from "../assets/images/axios.png";
import Tailwind from "../assets/images/tailwind.png";
import Mui from "../assets/images/mui.png";
import Jwt from "../assets/images/jwt.png";
import Nextjs from "../assets/images/next.png";
import Nodejs from "../assets/images/node.png";
import Mongodb from "../assets/images/mongo.png";
import Syncfussion from "../assets/images/syncfussion.png";
export const projects = [
  {
    title: "NiceSmiles Studio",
    description:
      "NiceSmiles Studio is a portfolio website for a photography company in US , Texas. We used React for the Frontend and Laravel for the Backend also I managed to launch the Admin dashboard with Vuejs",
    links: [{ type: "website", href: "https://www.nicesmilesstudio.com" }],
    technologies: [
      { title: "React", image: ReactLogo },
      { title: "Vuejs", image: Vue },
      { title: "Laravel", image: Laravel },
      { title: "Webpack", image: Webpack },
      { title: "Tailwind", image: Tailwind },
      { title: "Axios", image: Axios },
    ],
  },
  {
    title: "Rsoon",
    description:
      "Rsoon is an investment advisory platform that we launched at Tafarda company. I used React for the Frontend and implemented features like search , sort and filters on data tables. this app uses JWT authentication system with Rest Api",
    links: [{ type: "website", href: "https://app.rsoon.ir" }],
    technologies: [
      { title: "React", image: ReactLogo },
      { title: "JWT", image: Jwt },
      { title: "Mui", image: Mui },
      { title: "Webpack", image: Webpack },
      { title: "Tailwind", image: Tailwind },
      { title: "Axios", image: Axios },
    ],
  },
  {
    title: "Todo App",
    description:
      "This app is a Fullstack Todo App that I launched for myself as a practice for Next js . I used online MongoDB database and Node js Apis in Next js to make it work .",
    links: [
      { type: "website", href: "https://www.app.rsoon.ir" },
      { type: "github", href: "https://github.com/" },
    ],
    technologies: [
      { title: "Next js", image: Nextjs },
      { title: "Node js", image: Nodejs },
      { title: "MongoDB", image: Mongodb },
      { title: "Tailwind", image: Tailwind },
      { title: "Axios", image: Axios },
    ],
  },
  {
    title: "Quiz App",
    description:
      "This app is a Quiz App that I launched for myself as a practice for Next js . I used a local Json Data file for questions and TailwindCss for styling .",
    links: [
      { type: "website", href: "https://www.app.rsoon.ir" },
      { type: "github", href: "https://github.com/" },
    ],
    technologies: [
      { title: "Next js", image: Nextjs },
      { title: "Tailwind", image: Tailwind },
    ],
  },

  {
    title: "Admin Dashboard",
    description:
      "This is an Admin Dashboard panel that I created for practicing React . I used TailwindCss , Mui and Syncfussion libraries for the design also implemented search and filter .",
    links: [
      { type: "website", href: "https://www.app.rsoon.ir" },
      { type: "github", href: "https://github.com/" },
    ],
    technologies: [
      { title: "React", image: ReactLogo },
      { title: "Mui", image: Mui },
      { title: "Tailwind", image: Tailwind },
      { title: "Syncfussion", image: Syncfussion },
    ],
  },
  {
    title: "Expense Tracker",
    description: "Expense Tracker",
    links: [
      { type: "website", href: "" },
      { type: "github", href: "" },
    ],
    technologies: [
      { title: "React", image: ReactLogo },
      { title: "Mui", image: Mui },
      { title: "Tailwind", image: Tailwind },
      { title: "Syncfussion", image: Syncfussion },
    ],
  },
];
