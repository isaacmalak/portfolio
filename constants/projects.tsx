import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
const styled = (classes: string) => <span className={classes} />;

type RichText = {
  text: string;
  className?: ClassValue;
};

export type Project = {
  title: string;
  description: RichText[];
  link: string;
  images?: string[];
  titleOnHoverColor: string;
  titleColor: string; // On the Project Details
  detailsDescription?: string;
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
    link: "https://alpha.mymedahealth.com",
    images: [
      projectsPath + "meda/logo.png",
      projectsPath + "meda/login.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
      projectsPath + "meda/dashboard.jpeg",
    ],
    titleOnHoverColor: `group-hover:text-blue-600`,
    titleColor: `text-blue-600`,
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
    images: [projectsPath + "cbl-logo.webp"],
    titleOnHoverColor: "group-hover:text-orange-400",
    titleColor: `text-orange-600`,
  },
  {
    title: "Dev Event Website - Event Booking App",
    description: [
      {
        text: "Developed a full-stack event booking application for Dev Events, allowing users to browse, register, and manage event attendance seamlessly.",
      },
    ],

    link: "https://devevents-iota.vercel.app/",
    images: [projectsPath + "dev-events-logo.png"],
    titleOnHoverColor: "group-hover:text-green-700",
    titleColor: `text-green-700`,
  },
  {
    title: "Figures E-commerce - Action Figures Store",
    description: [
      {
        text: "Built a demo e-commerce platform for Figures, specializing in action figures, with features for browsing products.",
      },
    ],
    link: "https://devevents-iota.vercel.app/",
    images: [projectsPath + "figures-logo.png"],
    titleOnHoverColor: "group-hover:text-red-700",
    titleColor: "text-red-700",
  },
];
