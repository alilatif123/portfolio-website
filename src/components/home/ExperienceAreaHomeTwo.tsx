import React from 'react';
import Image, { StaticImageData } from "next/image";

import start_icon from "@/assets/img/services/shape/services-shape-3.png";
import skill_icon_1 from "@/assets/img/skill/nodejs.png";
import skill_icon_2 from "@/assets/img/skill/vue.png";
import skill_icon_3 from "@/assets/img/skill/html.png";
import skill_icon_4 from "@/assets/img/skill/ai.png";
import skill_icon_5 from "@/assets/img/skill/webflow.png";

interface DataType {
  expreience_data: {
    id: number;
    date: string;
    title: string;
    company: string;
  }[];
  skill_data: {
    id: number;
    img: StaticImageData;
    name: string;
    percent: string;
  }[];
}

const expreience_content: DataType = {
  expreience_data: [
    {
      id: 1,
      date: "Present",
      title: "Full Stack Engineer (Part-time)",
      company: "Devline Solutions",
    },
    {
      id: 2,
      date: "Previous",
      title: "Junior MERN Stack Developer",
      company: "PrograminStudio",
    },
    {
      id: 3,
      date: "Previous",
      title: "Web Development Intern",
      company: "DPL",
    },
    {
      id: 4,
      date: "Present",
      title: "Freelance Full Stack Developer",
      company: "Fiverr - Level 2 Seller",
    },
    {
      id: 5,
      date: "Achievement",
      title: "400+ Coding Problems Solved",
      company: "LeetCode & Coding Ninjas",
    },
    {
      id: 6,
      date: "Achievement",
      title: "Work More Than 30 Projects",
      company: "Successfully Delivered",
    },
  ],
  skill_data: [
    {
      id: 1,
      img: skill_icon_1,
      name: "Node.js",
      percent: "95%",
    },
    {
      id: 2,
      img: skill_icon_2,
      name: "React",
      percent: "92%",
    },
    {
      id: 3,
      img: skill_icon_3,
      name: "JavaScript",
      percent: "90%",
    },
    {
      id: 4,
      img: skill_icon_4,
      name: "AI & Automation",
      percent: "88%",
    },
    {
      id: 5,
      img: skill_icon_5,
      name: "Python",
      percent: "85%",
    },
  ],
};
const { expreience_data, skill_data } = expreience_content;

const ExperienceAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-5 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="tp-hero-2__circle-wrapper tp-hero-2__circle-pos">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__design-exp-wrap">
                  <div className="tp-hero-2__design-exp-top-title">
                    <span>
                      <Image className="tp-zoom-in-out" src={start_icon} alt="image-here" />
                      EXPERIENCE & ACHIEVEMENTS
                    </span>
                  </div>
                  <ul>
                    {expreience_data.map((item, index) => (
                      <li key={index}>
                        <div className="tp-hero-2__design-exp-item d-flex align-items-center justify-content-between">
                          <div className="tp-hero-2__design-exp-meta d-flex align-items-center">
                            <span>{item.date}</span>
                            <h4 className="tp-hero-2__design-exp-title">{item.title}</h4>
                          </div>
                          <div className="tp-hero-2__design-exp-company">
                            <span>{item.company}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceAreaHomeTwo;

