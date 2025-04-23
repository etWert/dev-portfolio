import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostman, SiGithub, SiSpringboot, SiNodedotjs, SiPycharm, SiMysql } from "react-icons/si";
import { DiLinux, DiVisualstudio, DiWindows } from "react-icons/di";
import { FaCogs, FaDatabase } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillsData = [
    {
      title: "Languages",
      items: [
        { name: "C#", icon: <FaCogs color="#2391C1" /> },
        { name: "C", icon: <FaCogs color="#4E9F3D" /> },
        { name: "C++", icon: <FaCogs color="#004482" /> },
        { name: "Java", icon: <FaCogs color="#007396" /> },
        { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
        { name: "SQL", icon: <SiMysql color="#cc2927" /> },
        { name: "Python", icon: <FaPython color="#306998" /> },
        { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
        { name: "React", icon: <FaReact color="#61dafb" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#68A063" /> }
      ]
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "SQL Server", icon: <FaDatabase color="#cc2927" /> }
      ]
    },
    {
      title: "Development Environments",
      items: [
        { name: "Visual Studio Code", icon: <BiLogoVisualStudio color="#0078d4" /> },
        { name: "Visual Studio 2019-2022", icon: <DiVisualstudio color="#68217A" /> },
        { name: "PyCharm", icon: <SiPycharm color="#21D789" /> },
        { name: "Eclipse", icon: <FaCogs color="#2C3E50" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> }
      ]
    },
    {
      title: "Operating Systems",
      items: [
        { name: "Windows", icon: <DiWindows color="#00a4ef" /> },
        { name: "Linux", icon: <DiLinux color="#f7d54f" /> }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Postman", icon: <SiPostman color="#f1502f" /> },
        { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> }
      ]
    }
  ];
  export default skillsData