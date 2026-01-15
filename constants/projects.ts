export type Project = {
  title: string;
  description: string;
  link: string;
  images?: string[];
  titleOnHoverColor: string;
};
const projectsPath = "/images/projects/";

export const projects: Project[] = [
  {
    title: "Meda Health - Sales Dashboard and Employee Portal",
    description:
      "Developed a comprehensive sales dashboard and employee portal for Meda Health, enhancing sales tracking and internal progress.",
    link: "https://alpha.mymedahealth.com",
    images: [projectsPath + "meda-logo.png"],
    titleOnHoverColor: `group-hover:text-blue-600`,
  },
  {
    title: "Coulda Been A League - Basketball Tournament App",
    description:
      "Created a full-stack basketball tournament application, enabling users to manage teams, schedules, and real-time scores for there matches.",
    titleOnHoverColor: "group-hover:text-orange-400",
    link: "https://apps.apple.com/us/app/coulda-been-league-app/id6745900309",
    images: [projectsPath + "cbl-logo.webp"],
  },
  {
    title: "Dev Event Website - Event Booking App",
    description:
      "Developed a full-stack event booking application for Dev Events, allowing users to browse, register, and manage event attendance seamlessly.",
    link: "https://devevents-iota.vercel.app/",
    titleOnHoverColor: "group-hover:text-green-700",
    images: [projectsPath + "dev-events-logo.png"],
  },
  {
    title: "Figures E-commerce - Action Figures Store",
    description:
      "Built a demo e-commerce platform for Figures, specializing in action figures, with features for browsing products.",
    link: "https://devevents-iota.vercel.app/",
    titleOnHoverColor: "group-hover:text-red-700",
    images: [projectsPath + "figures-logo.png"],
  },
];
