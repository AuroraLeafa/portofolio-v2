import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Refansyach Sugianto Portofolio",
  initials: "MRS",
  url: "https://github.com/AuroraLeafa",
  location: "Bogor City, Indonesia",
  locationLink: "https://www.google.com/maps/place/bogor",
  description:
    "Fresh Graduated from Computer Science in 2024. I am a Tech and Game Enthusiast.",
  summary:
  "My name is Refansyach Sugianto, you can call me Refan. I'm a Fresh Graduated from [Computer Science](/#education). I am a Web/Application Engineer that have an ability to code in both backend and frontend side. Very passionate about modern mobile and web technology while taking into consideration the latest trends and techniques.",  
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "PHP",
    "Go",
    "React",
    "Node.js",
    "CodeIgniter",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mrefansyach@gmail.com",
    tel: "+6285719478130",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AuroraLeafa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/refansyach",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/auroraleafa",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Confiction Labs",
      href: "https://www.confiction.com/",
      badges: [],
      location: "Remote",
      title: "Quality Assurance (Game Tester) - Freelance",
      logoUrl: "/confiction.jpeg",
      start: "Nov 2023",
      end: "Mar 2024",
      description:
        "I am responsible for conducting thorough testing on gaming products to identify and analyze defects, crafting detailed reports to comprehensively explain each product's weaknesses. My role involves making valuable contributions to product development by offering critical insights to enhance quality and user experience. Additionally, I act as a proactive team member, supporting fellow testers and engaging with the community to deepen our understanding of the product.",
    },
    {
      company: "PT. Triartha Causa Prima",
      badges: [],
      href: "https://tcprima.co.id/",
      location: "Bogor, Indonesia",
      title: "Fullstack Web Developer - Internship",
      logoUrl: "/company.png",
      start: "Aug 2022",
      end: "Oct 2022",
      description:
        "Over the course of a month, I developed a Web-based Library Information System using Bootstrap for the front-end, CodeIgniter 3 for the back-end, and MySQL for the database. I also created company profile websites and landing pages for clients, participated in meetings to negotiate client expectations, and contributed to the development of other ongoing website projects.",
    },
  ],
  education: [
    {
      school: "Pakuan University",
      href: "https://unpak.ac.id/",
      degree: "Bachelor of Computer Science - GPA 3.76 From 4.00",
      logoUrl: "/unpak.png",
      start: "2019",
      end: "2024",
      description:
        "Thesis Topic is Data Mining with Title “Sentiment Analysis: Genshin Impact Game to Understanding Player Reactions and Expectations Using Support Vector Machine”",
    },
  ],
  projects: [
    {
      title: "YOASOBI's Tribute Page",
      href: "https://auroraleafa.github.io/YOASOBI_TributePage/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A Website for a Japanese band, YOASOBI, that displays their music, social media, and other information.",
      technologies: [
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://auroraleafa.github.io/YOASOBI_TributePage/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AuroraLeafa/YOASOBI_TributePage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoasobi-tribute.png",
      video: "",
    },
    {
      title: "TravelinAja",
      href: "https://auroraleafa.github.io/TravelinAja/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Show you the best travel locations in Bogor, Indonesia",
      technologies: [
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://auroraleafa.github.io/TravelinAja/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AuroraLeafa/TravelinAja",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travelinAja.png",
      video: "",
    },
    {
      title: "Yoasobi Survey",
      href: "https://auroraleafa.github.io/yoasobi-surveyform/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Yoasobi Survey is a website that allows you to share your opinion and feedback about Yoasobi's music.",
      technologies: [
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://auroraleafa.github.io/yoasobi-surveyform/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AuroraLeafa/yoasobi-surveyform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoasobi-survey.png",
      video: "",
    },
    {
      title: "Burger Bored",
      href: "https://auroraleafa.github.io/BurgerBored/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Burger Bored is a restaurant website that allows you to order food online.",
      technologies: [
        "bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://auroraleafa.github.io/BurgerBored/",
          icon: <Icons.globe className="size-3"/>,
        },
      ],
      image: "/burgerBored.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
} as const;
