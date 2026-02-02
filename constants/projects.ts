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
        className: "font-bold",
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
    link: "https://apps.apple.com/us/app/coulda-been-league-app/id6745900309",
    images: [projectsPath + "cbl/logo.webp"],
    titleOnHoverColor: "group-hover:text-orange-400",
    titleColor: `text-orange-600`,
    techStackUsed: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Dev Event Website - Event Booking App",
    description: [
      {
        text: "Developed a full-stack event booking application for Dev Events, allowing users to browse, register, and manage event attendance seamlessly.",
      },
    ],
    link: "https://devevents-iota.vercel.app/",
    images: [projectsPath + "event/logo.png"],
    titleOnHoverColor: "group-hover:text-green-700",
    titleColor: `text-green-700`,
    techStackUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Figures E-commerce - Action Figures Store",
    description: [
      {
        text: "Built a demo e-commerce platform for Figures, specializing in action figures, with features for browsing products.",
      },
    ],
    link: "https://ecommerce-demo-blue-mu.vercel.app/home",
    images: [projectsPath + "ecommerce/logo.png"],
    titleOnHoverColor: "group-hover:text-red-700",
    titleColor: "text-red-700",
    techStackUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
