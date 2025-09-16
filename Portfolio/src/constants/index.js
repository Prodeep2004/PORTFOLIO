export const myProjects = [
  {
    id: 1,
    title: "Ultrasonic Distance Measurement (Arduino)",
    description:
      "Built a system to measure distance using an ultrasonic sensor and Arduino with LCD output.",
    subDescription: [
      "Sensor sends sound waves and measures echo time to calculate object distance.",
      "Displayed measured distance on an LCD screen with real-time updates.",
      "Helped understand practical embedded systems and sensor integration.",
    ],
    href: "https://github.com/Prodeep2004/Ultrasonic-Distance-Measurement-using-Arduino-",
    logo: "",
    image: "/assets/projects/ULTRA.jpg",
    tags: [
      { id: 1, name: "Arduino UNO", path: "/assets/logos/react.svg" },
      { id: 2, name: "Ultrasonic Sensor", path: "/assets/logos/javascript.svg" }
    ],
  },
  // Removed: Authentication & Authorization System
  {
    id: 3,
    title: "Air Pollution Forecasting using RNN",
    description:
      "Predicted air pollution levels from past data using RNN (TensorFlow/Keras).",
    subDescription: [
      "Cleaned and prepared data, trained the model, and visualized results.",
      "Integrated Twilio to send SMS alerts when predicted levels crossed safe limits.",
      "Used Pandas to clean, filter, and organize historical pollution data.",
    ],
    href: "https://github.com/Prodeep2004/Air-Pollution-Forecasting-using-RNN",
    logo: "",
    image: "/assets/projects/AIR.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/react.svg" },
      { id: 3, name: "Keras", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Pandas", path: "/assets/logos/git.svg" },
      { id: 5, name: "Twilio", path: "/assets/logos/microsoft.svg" }
    ],
  },
  // Trimmed other demo projects for resume relevance
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AI-ML Virtual Internship",
    job: "Google for Developers (EduSkills)",
    date: "Oct 2024 – Dec 2024",
    contents: [
      "Completed a virtual internship focused on Artificial Intelligence and Machine Learning.",
      "Gained hands-on experience with key ML concepts, tools, and workflows.",
    ],
  },
];
export const reviews = [
  {
    name: "INTERNSHIP",
    username: "Google for Developers — AI‑ML Virtual Internship",
    body: "Oct 2024 – Dec 2024 · Hands‑on with core ML concepts, tools, and workflows (EduSkills/AICTE).",
    img: "/assets/logos/microsoft.svg",
  },
  {
    name: "SKILLS",
    username: "Core Stack",
    body: "Python, C/C++, JavaScript, React, Node.js, MySQL, Git, DSA.",
    img: "/assets/logos/react.svg",
  },
  // Education (separate boxes)
  {
    name: "EDUCATION",
    username: "B.E. — KLS VDES Institute of Technology, Haliyal",
    body: "Aug 2022 – Present · CGPA: 8.07",
    img: "/assets/logos/microsoft.svg",
  },
  {
    name: "EDUCATION",
    username: "12th/PUC — Prism PU Science College, Dharwad",
    body: "Jun 2020 – Jun 2022 · Percentage: 73%",
    img: "/assets/logos/azure.svg",
  },
  {
    name: "EDUCATION",
    username: "10th — Pavan English Medium High School, Dharwad",
    body: "May 2019 – May 2020 · Percentage: 82%",
    img: "/assets/logos/microsoft.svg",
  },
  // Certificates (separate boxes)
  {
    name: "CERTIFICATE",
    username: "SQL Crash Course — Udemy",
    body: "Aug 2025",
    img: "/assets/logos/sqlite.svg",
  },
  {
    name: "CERTIFICATE",
    username: "Responsive Web Dev with HTML5, CSS3, JS — Infosys",
    body: "Oct 2024 – Nov 2024",
    img: "/assets/logos/javascript.svg",
  },
  {
    name: "CERTIFICATE",
    username: "Python Essentials 1 & 2 — Cisco Network Academy",
    body: "Jun 2024 – Jul 2024",
    img: "/assets/logos/react.svg",
  },
  {
    name: "CERTIFICATE",
    username: "Programming concept with C — ISCT",
    body: "Aug 2022 – Sep 2022",
    img: "/assets/logos/cplusplus.svg",
  },
  {
    name: "CERTIFICATE",
    username: "TCS iON Career Edge — Young professional",
    body: "Jan 2023",
    img: "/assets/logos/microsoft.svg",
  },
];
