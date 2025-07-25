import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vignesh",
  initials: "D",
  url: "https://dub.sh/vignesh-portfolio",
  location: "India",
  locationLink: "https://www.google.com/maps/place/mysuru",
  description:
    "Coding and Movies",
  summary:
    "I&apos;m a 2026 graduate, love to learn new jargons/skills and become fairly good at them. When I am not coding, I just love to watch movies. I am currently looking for an internship opportunity where I can learn new skills and design principles and apply them in production. ",
  avatarUrl: "/me.jpg",
  skills: [
    "ReactJS",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Git/Github",
    "Devops",
    "Docker",
    "Kubernetes",
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
        url: "https://git.new/vignesh-gh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/vignesh-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/vignesh-x",
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
      title: "StreamForge",
      href: "https://dub.sh/video-hls-demo",
      dates: "July 2025",
      active: true,
      description:
        "StreamForge is a scalable, cloud-native video transcoding platform built with AWS, FFmpeg, and Docker. It supports secure video uploads, automatic segmentation into multiple resolutions, and adaptive bitrate streaming via HLS. The system uses event-driven architecture with SQS and containerized workers for efficient, parallel processing.",
      technologies: [
        "React.js", 
        "Express.js", 
        "PostgreSQL",
        "AWS S3, SQS, ECS, Fargate",
        "Docker", 
        "FFmpeg", 
        "Prisma ORM" 
      ],
      links: [
        {
          type: "Demo",
          href: "https://dub.sh/video-hls-demo",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://git.new/video-hls",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dxygc9jz4/video/upload/f_auto:video,q_auto/v1753439208/StreamForge_Demo_biljha",
    },
    {
      title: "Noteflix",
      href: "https://dub.sh/noteflix",
      dates: "January 2025",
      active: true,
      description:
        "NoteFlix is a personalized YouTube library where you can create custom playlists, add rich-text notes with timestamps, and summarize videos using AI. Discover similar videos, star your favorites, and search YouTube directly — all in one sleek, organized platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "YouTube API",
        "Generative AI"
      ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/noteflix",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://git.new/noteflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dxygc9jz4/video/upload/f_auto:video,q_auto/qh4bg6rwghmre9ut1tlh",
    },
    {
      title: "Reportify",
      href: "https://dub.sh/reportify",
      dates: "February 2025",
      active: true,
      description:
        "Built the backend of this web app used by JSSSTU Students to generate academic reports from their data using AI.😉",
      technologies: [
        "Express.js",
        "Typescript",
        "MongoDB",
        "Generative AI"
],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/reportify",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://git.new/reportify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dxygc9jz4/video/upload/v1743072282/qp2kxgtgi9gach94k2a6.mp4",
    },
    {
      title: "Trendwave",
      href: "https://dub.sh/trend-wave",
      dates: "April 2025",
      active: true,
      description:
        "A data-driven app built to visualize trending content. Features include content filters, sentiment analysis —ideal for understanding social post performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/trend-wave",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://git.new/trend-wave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trend-wave.png",
      video: "",
    },
    {
      title: "The Campus Network",
      href: "https://dub.sh/the-campus-network",
      dates: "November 2024",
      active: true,
      description:
        "Built a MERN-based platform that helps engineering students track personal and team project progress with real-time updates. It also includes chat features to boost collaboration, creating a connected and productive campus community.",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "WebSocket",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/the-campus-network",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://git.new/campus-network",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tcn.jpeg",
      video: "",
    }
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
