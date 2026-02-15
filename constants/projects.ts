import { ClassValue } from "clsx";

type RichText = {
  text: string;
  className?: ClassValue;
};

export type Project = {
  title: string;
  description: RichText[];
  detailedDescription?: RichText[];
  link?: string;
  images: string[];
  titleOnHoverColor: string;
  titleColor: string;
  techStackUsed: string[];
};

const projectsPath = "/images/projects/";
export const projects: Project[] = [
  {
    title: "Meda Health - Sales Dashboard and Employee Portal",
    description: [
      {
        text: "Developed a comprehensive sales dashboard and employee portal for",
      },
      {
        text: " Meda Health",
        className:
          "bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent",
      },
      {
        text: ", enhancing sales tracking and internal progress.",
      },
    ],
    detailedDescription: [
      {
        text: "Implemented features for real-time data visualization, employee management, and performance analytics.",
        className: "block",
      },
      {
        text: "Utilized modern web technologies to create an intuitive and responsive user interface.",
        className: "block",
      },
      {
        text: "Collaborated with",
      },
      {
        text: " cross-functional",
      },
      {
        text: " teams to ensure seamless integration with existing systems and optimize user experience.",
      },
    ],
    link: "https://alpha.mymedahealth.com",
    images: [
      projectsPath + "meda/logo.png",
      projectsPath + "meda/login.jpeg",
      projectsPath + "meda/profile.jpeg",
      projectsPath + "meda/drawer.png",
      projectsPath + "meda/dashboard.jpeg",
    ],
    titleOnHoverColor: `group-hover:text-blue-600`,
    titleColor: `text-blue-600`,
    techStackUsed: [
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "TanStack",
      "Cursor",
      "Postgres",
    ],
  },
  {
    title: "Coulda Been A League - Basketball Tournament App",
    description: [
      {
        text: "Created a full-stack ",
      },
      {
        text: "basketball",
        className: "text-orange-700",
      },
      {
        text: " tournament application, enabling users to manage teams, schedules, and real-time scores for their matches.",
      },
    ],
    detailedDescription: [
      {
        text: "Developed using",
        className: "block",
      },
      {
        text: " Flutter",
        className: "text-blue-700",
      },
      {
        text: " and",
      },
      {
        text: " Firebase",
        className: "text-yellow-500",
      },
      {
        text: ", the app provides a seamless experience for basketball enthusiasts to organize and track their tournaments.",
      },
    ],
    link: "https://apps.apple.com/us/app/coulda-been-league-app/id6745900309",
    images: [
      projectsPath + "cbl/logo.webp",
      projectsPath + "cbl/profile.png",
      projectsPath + "cbl/home.png",
      projectsPath + "cbl/team.png",
      projectsPath + "cbl/chat.png",
    ],
    titleOnHoverColor: "group-hover:text-orange-400",
    titleColor: `text-orange-600`,
    techStackUsed: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Dev Event Website - Event Booking App",
    description: [
      {
        text: "Developed a small web application for Dev Events, a platform that allows users to browse and register for various events.",
        className: "block",
      },
    ],
    detailedDescription: [
      {
        text: "The application features a user-friendly interface where users can easily navigate through different events, view event details, and register for their preferred events with just a few clicks.",
        className: "block",
      },
      {
        text: "Mainly focused on testing",
      },
      {
        text: " MongoDB",
        className: "text-green-700",
      },
      {
        text: " and",
      },
      {
        text: " Cloudinary",
        className: "text-blue-700",
      },
      {
        text: " for efficient data management and media handling, ensuring both platforms can work for a small application.",
      },
    ],
    link: "https://devevents-iota.vercel.app/",
    images: [
      projectsPath + "event/logo.png",
      projectsPath + "event/home.jpeg",
      projectsPath + "event/event.jpeg",
      projectsPath + "event/event2.jpeg",
    ],
    titleOnHoverColor: "group-hover:text-green-700",
    titleColor: `text-green-700`,
    techStackUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    title: "Figures E-commerce - Action Figures Store",
    description: [
      {
        text: "Built a demo e-commerce for Figures",
      },
      {
        text: ", specializing in",
      },
      {
        text: " action figures",
        className: "text-red-700",
      },
      {
        text: ", with features for browsing products.",
      },
    ],
    detailedDescription: [
      {
        text: "A demo e-commerce built to showcase a potential client for expanding their online presence. The website features a clean and modern design, allowing users to easily browse through a curated selectqion of action figures.",
        className: "block",
      },
      {
        text: "Focusing on displaying a distinctive website using simple animations that highlights the unique products offered by there store, the demo serves as a proof of concept for a potential full-scale e-commerce platform.",
        className: "block",
      },
      {
        text: "NOTE: This project is a demo and does not include actual e-commerce functionalities such as payment processing or inventory management.",
        className: "block italic text-gray-400 font-bold text-sm mt-7",
      },
    ],
    link: "https://ecommerce-demo-blue-mu.vercel.app/home",
    images: [
      projectsPath + "ecommerce/logo.png",
      projectsPath + "ecommerce/home.jpeg",
      projectsPath + "ecommerce/product.jpeg",
    ],
    titleOnHoverColor: "group-hover:text-red-700",
    titleColor: "text-red-700",
    techStackUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Gsap"],
  },
];
