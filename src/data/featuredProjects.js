import acadmarkImg from "../assets/acadmark1.png";
import skillsyncImg from "../assets/skillsync1.png";
import crackstackImg from "../assets/crackstack1.jpg";
import schoolsystemImg from "../assets/siaprofiling1.png";
import pawtopiaImg from "../assets/pawtopia1.png";
import shopitImg from "../assets/ShopIT.png";

import skillsyncPreview from "../assets/SkillSync Preview.mp4";
import crackstackPreview from "../assets/CrackStack Preview.mp4";
import shopitPreview from "../assets/ShopIT Preview.mp4";

const featuredProjects = [
  {
    title: "AcadMark",
    role: "Lead Front-end Developer",
    description:
      "AcadMark is a web-based academic tracking system developed as part of our Community Extension Services project to help Sta. Rita High School in Olongapo City monitor student grades and performance through a responsive and user-friendly platform.",
    img: acadmarkImg,
    preview: null, // no video available
  },
  {
    title: "Crack & Stack Blog Site",
    role: "Front-end Developer",
    description:
      "Crack & Stack is a project I co-organize with fellow 4th Year IT students from Gordon College, where we host seminars, webinars, and educational trips to share knowledge, develop technical skills, and inspire growth in the IT field.",
    img: crackstackImg,
    preview: crackstackPreview,
  },
  {
    title: "SkillSync",
    fulltitle:
      "SkillSync: A Talent Acquisition and Recruitment Platform Utilizing Content-Based Filtering for Job Matching",
    role: "Front-end Developer",
    description:
      "SkillSync is an innovative recruitment platform developed as a capstone project. It connects job seekers using advanced content-based filtering, streamlining the hiring process for better matches and efficiency.",
    img: skillsyncImg,
    preview: skillsyncPreview,
  },
  {
    title: "School Management System",
    role: "Lead Quality Assurance",
    description:
      "School Management System for institutional operations with profiling, registrar management, guidance logging, clinic management, inventory log, and library logging subsystems, ensuring efficiency to school departments.",
    img: schoolsystemImg,
    preview: null, // no video available
  },
  {
    title: "Pawtopia",
    role: "Front-end Developer",
    description:
      "Pawtopia is a pet shop platform offering a wide range of accessories and essentials for pets, with a seamless ordering process and real-time order tracking for customer convenience.",
    img: pawtopiaImg,
    preview: null, // no video available
  },
  {
    title: "ShopIT",
    role: "Front-end Developer",
    description:
      "ShopIT is an e-commerce platform designed for seamless online shopping, providing users with a modern interface to browse, purchase, and track products efficiently.",
    img: shopitImg,
    preview: shopitPreview,
  },
];

export default featuredProjects;