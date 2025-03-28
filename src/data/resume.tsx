import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vignesh",
  initials: "D",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Coding and Movies",
  summary:
    "I&apos;m a 2026 graduate, love to learn new jargons/skills and become fairly good at them. When I am not coding, I just love to watch movies. I am currently looking for an internship opportunity where I can learn new skills and design principles and apply them in production. ",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "C++"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vignesh.d9123@gmail.com",
    // tel: "+",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vignesh9123",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vignesh-d-mys",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_Unique_swagger",
        icon: Icons.x,

        navbar: true,
      },
      Letterboxd: {
        name: "Letterboxd",
        url: "https://letterboxd.com/Vignesh9123/",
        icon: Icons.letterboxd,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=vignesh.d9123@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "JSS Science and Technology University",
      href: "https://jssstuniv.in/",
      degree: "B.E in Computer Science and Engineering",
      logoUrl: "/jssstulogo.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "Noteflix",
      href: "https://noteflix-v1.vercel.app/",
      dates: "January 2025",
      active: true,
      description:
        "NoteFlix is a personalized YouTube library where you can create custom playlists, add rich-text notes with timestamps, and summarize videos using AI. Discover similar videos, star your favorites, and search YouTube directly — all in one sleek, organized platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://noteflix-v1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vignesh9123/Noteflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dxygc9jz4/video/upload/f_auto:video,q_auto/qh4bg6rwghmre9ut1tlh",
    },
    {
      title: "Reportify",
      href: "https://reportify-ai.vercel.app/",
      dates: "February 2025",
      active: true,
      description:
        "Built the backend of this web app used by JSSSTU Students to generate academic reports from their data using AI.😉",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://reportify-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vignesh9123/Reportify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dxygc9jz4/video/upload/v1743072282/qp2kxgtgi9gach94k2a6.mp4",
    },
    {
      title: "The Campus Network",
      href: "https://the-campus-network.vercel.app",
      dates: "November 2024",
      active: true,
      description:
        "Built a MERN-based platform that helps engineering students track personal and team project progress with real-time updates. It also includes chat features to boost collaboration, creating a connected and productive campus community.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://the-campus-network.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vignesh9123/the-campus-network",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tcn.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Vedha",
      dates: "November 2024",
      location: "Mysore, Karnataka",
      description:
        "Developed SkillConnect, an AI Powered interviewing and course selection platform for 100+ students to showcase skills and practice mock interviews. ",
      image:
        "https://aiml.vvce.ac.in/vedha/images/ai-face.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          href: "https://github.com/Vignesh9123/vvce-vedha-screening",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
