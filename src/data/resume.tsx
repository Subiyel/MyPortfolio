import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Subiyel Ijaz",
  initials: "SI",
  url: "https://subiyel.me",
  location: "Dubai, UAE",
  locationLink: "https://www.google.ae/maps/@25.0746673,55.1403118,17.04z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Highly-skilled and motivated Software Engineer with 5.5 years of experience. I love building things and helping people.",
  summary:
    "Full Stack Developer specialising in React Native. Offering more than 5 years of experience in MERN stack. Well-versed in numerous technologies including React Native, ReactJS, ReactJS, NodeJS, GraphQL, MySQL,  MongoDB, Swift. Immense experience in developing FinTech applications. Easily communicates complex technical requirements to non-technical stakeholders. Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success.",
    //"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  me: [
    { key: "Dubai, UAE", link: "https://www.google.ae/maps/@25.0746673,55.1403118,17.04z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"},
    { key: "www.subiyel.me", link: "https://subiyel.me"},
    { key: "+971 52 4248239", link: "tel:+971 52 4248239"},
    { key: "subialijaz@gmail.com", link: "mailto: subialijaz@gmail.com"},
  ],
  skills: [
    "React Native",
    "React JS",
    "Typescript",
    "Node.js",
    "Python",
    "Swift",
    "PHP",
    "Postgres",
    "MongoDB",
    "mySQL",
    "AWS",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "subialijaz@gmail.com",
    tel: "+971 52 4248239",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Subiyel?tab=overview&from=2022-12-01&to=2022-12-31",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/subiyel-ijaz-15879516a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://linkedin.com/in/subiyel-ijaz-15879516a/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://linkedin.com/in/subiyel-ijaz-15879516a/",
        icon: Icons.youtube,
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
      company: "Nivoda",
      href: "https://nivoda.com",
      badges: [],
      location: "Remote Dubai",
      title: "Software Engineer",
      logoUrl: "/nivoda2.png",
      start: "October 2023",
      end: "Present",
      description:
        "Nivoda connects Diamond Buyers and Suppliers on one platform. Nivoda handles everything from Listing / Shipping diamonds, Logistics, Quality insurance. At Nivoda I worked as Fullstack developer on all three Fronts (WEB in React, Mobile in React Native, Backend in Node)",
    },
    {
      company: "Ejada",
      badges: [],
      href: "https://www.ejada.com",
      location: "Remote KSA",
      title: "React Native Developer",
      logoUrl: "/ejada.png",
      start: "July 2023",
      end: "Sep 2023",
      description:
        "Worked on Al Rajhi Capital's mobile application, which is a subsidiary of Saudi's largest bank ARB (Al Rajhi Bank).",
    },
    {
      company: "i2c",
      href: "https://www.i2cinc.com",
      badges: [],
      location: "Onsite Lahore PK",
      title: "Software Engineer",
      logoUrl: "/i2c.png",
      start: "November 2019",
      end: "July 2023",
      description:
        "i2c is an issuer processor and one of the largest FinTech service provider. I worked on their Mobile applications in React Native and Native iOS (Swift), providing Financial services",
    },
    {
      company: "Global Software Consulting",
      href: "https://www.gsoftconsulting.com",
      badges: [],
      location: "Onsite Lahore PK",
      title: "Associate Software Engineer",
      logoUrl: "/gsoft.jpeg",
      start: "May 2019",
      end: "November 2019",
      description:
        "Provided Web and Mobile app development services in React & React Native",
    }
  ],
  education: [
    {
      school: "COMSATS University",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelors of Science in Computer Science",
      logoUrl: "/comsats.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "Punjab Group Of Colleges",
      href: "",
      degree: "Intermediate of Computer Science",
      logoUrl: "/Punjab.webp",
      start: "2013",
      end: "2015",
    },
    {
      school: "Laural Bank Public School",
      href: "",
      degree: "Metric Degree",
      logoUrl: "/LPS.png",
      start: "2011",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Nivoda",
      href: "https://nivoda.com/",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "Worked on customer and supplier facing Mobile app in React Native. Along with Admin web interface in React.",
      technologies: [
        "React Native",
        "React",
        "Node JS",
        "GraphQL",
        "PostgreSQL",
        "Tailwind",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://nivoda.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "iOS",
          href: "https://apps.apple.com/us/app/nivoda/id1492499222",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/App_1.mov",
    },
    {
      title: "Homees",
      href: "",
      dates: "June 2019 - Aug 2019",
      active: true,
      description:
        "SG Home Needs, a handyman service prodiver app. Allowing Business to create there profile and customers to search, hire, review and chat with them.",
      technologies: [
        "React Native",
        "Node JS",
        "mySQL",
        "Node JS",
      ],
      links: [],
      image: "",
      video: "/Homees.mov",
    },
    {
      title: "EZ Dine",
      href: "",
      dates: "June 2019 - Aug 2019",
      active: true,
      description:
        "This is a resutants app from which you can order food, reserve table, check menu and much more. This detects your current locations and shows you resturants nearby you on ma",
      technologies: [
        "React Native",
        "Node JS",
        "mySQL",
        "Node JS",
      ],
      links: [],
      image: "",
      video: "/ez_dine.mov",
    },
    {
      title: "Houze",
      href: "",
      dates: "June 2019 - Aug 2019",
      active: true,
      description:
        "This is a Home Renovation/fitouts design ideas app. Here you find millions of image collection from worldwide. You can find your desired design by using bultin filters in this app.",
      technologies: [
        "React Native",
        "Mongo DB",
        "Node JS",
      ],
      links: [],
      image: "",
      video: "/houze.mov",
    },
    {
      title: "Local",
      href: "",
      dates: "June 2019 - Aug 2019",
      active: true,
      description:
        "An Anonymous social media app. Mainly targetting Indonesia region.",
      technologies: [
        "React Native",
        "PHP",
        "Firestore",
        "noSQL",
      ],
      links: [],
      image: "",
      video: "/local.mov",
    },
  ],
  hackathons: [
    {
      title: "AGM i2c 2022",
      dates: "January 1st, 2022",
      location: "PEARL CONTINENTAL, LAHORE",
      description: "Outstanding Performance awards for Developing mobile application which delivered Fintech services to Banks.",
      image: "/i2c.png",
      banner: "/award1.jpeg",
      links: [],
    },
    {
      title: "AGM i2c 2021",
      dates: "January 1st, 2021",
      location: "PEARL CONTINENTAL, LAHORE",
      description: "Receiving Outstanding Performance award from CEO i2c, for Developing an SDK which provided Apple Pay, In-App Push provisioning, Financial services to Fintech client's mobile application.",
      image: "/i2c.png",
      banner: "/award2.jpeg",
      links: [],
    },
    {
      title: "2020 - 2024",
      dates: "January 1st, 2024",
      location: "i2c office, LAHORE",
      description:  "",
      image: "/i2c.png",
      banner: "/awards.jpeg",
      links: [],
    },
    {
      title: "i2c 2020 - 2024",
      dates: "January 1st, 2024",
      location: "i2c office, LAHORE",
      description:  "4 years completion at i2c inc.",
      image: "/i2c.png",
      banner: "/i2c1.jpeg",
      links: [],
    },
  ],
} as const;
