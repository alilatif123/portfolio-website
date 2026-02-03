import React from 'react';
import Image from 'next/image';
import { 
  SiNodedotjs, 
  SiReact, 
  SiJavascript, 
  SiMongodb, 
  SiPython 
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';

import circle_img_1 from "@/assets/img/hero/hero-circle-2.png";
import circle_img_2 from "@/assets/img/hero/hero-circle-1.png";
import about_img_1 from "@/assets/img/hero/hero-2.1-img.png";
import about_hand from "@/assets/img/hero/hero-hand.png";
import about_star from "@/assets/img/hero/hero-star.png";

interface TechStackItem {
  name: string;
  icon: React.JSX.Element;
}

interface DataType {
  experienc_year: string;
  experienc_text: React.JSX.Element;
  subtitle: string;
  title: string;
  sm_info_1: React.JSX.Element;
  sm_info_2: React.JSX.Element;
  link_text: string;
  tech_stack: TechStackItem[];
}

const about_content: DataType = {
  experienc_year: "5 +",
  experienc_text: <>Years <br /> Of Working <br />Experience</>,
  subtitle: "Hello There!",
  title: "I'm Ali Latif",
  sm_info_1: <>I'm a Software Engineer building modern web apps, AI-powered systems, and smart automations.</>,
  sm_info_2: <>I create fast, scalable products that solve real problems and deliver real value.</>,
  link_text: "NEED THIS? LETS TALK",
  tech_stack: [
    { 
      name: "Node.js", 
      icon: <SiNodedotjs size={48} style={{ color: '#339933' }} />
    },
    { 
      name: "React", 
      icon: <SiReact size={48} style={{ color: '#61DAFB' }} />
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript size={48} style={{ color: '#F7DF1E' }} />
    },
    { 
      name: "Databases", 
      icon: <SiMongodb size={48} style={{ color: '#47A248' }} />
    },
    { 
      name: "AI / Automation", 
      icon: <GiBrain size={48} style={{ color: '#00D9FF' }} />
    },
    { 
      name: "Python", 
      icon: <SiPython size={48} style={{ color: '#3776AB' }} />
    },
  ],
};

const { experienc_year, experienc_text, subtitle, title, sm_info_1, sm_info_2, link_text, tech_stack } =
  about_content;

const AboutAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="container">
            <div className="tp-hero-2__exp-thumb-main p-relative">
              <div className="tp-hero-2__circle-img-wrap">
                <div className="tp-hero-2__circle-img p-relative">
                  <Image className="img-1" src={circle_img_1} alt="image-here" />
                  <div className="tp-hero-2__circle-img-2">
                    <Image src={circle_img_2} alt="image-here" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center z-index-5">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="tp-hero-2__exp-thumb-wrap p-relative text-end">
                    <div className="tp-hero-2__exp-thumb-bg">
                      <Image src={about_img_1} alt="image-here" />
                    </div>
                    <div className="tp-hero-2__exp-thumb-text">
                      <span style={{ 
                        color: 'var(--tp-pink-2)',
                        display: 'inline-block'
                      }}>{experienc_year}</span>
                      <p>{experienc_text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="tp-hero-2__exp-info">
                    <span className="tp-hero-2__exp-subtitle">
                      {" "}
                      <b>
                        <Image className="tp-ring-effect" src={about_hand} alt="image-here" />
                      </b>{" "}
                      {subtitle}
                    </span>
                    <h4 className="tp-hero-2__exp-title">{title}</h4>
                    <p className="child-1">{sm_info_1}</p>
                    <p className="child-2 ">{sm_info_2}</p>
                    <a className="tp-hero-2__exp-link" href="#contact">
                      {link_text}
                      <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 5.00012H20.1997"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          stroke-inecap="round"
                          stroke-inejoin="round"
                        />
                        <path
                          d="M17 1L20.9999 4.99993L17 8.99987"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          stroke-inecap="round"
                          stroke-inejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-hero-2__exp-brand-wrap">
              <span className="tp-hero-2__exp-brand-title">
                <b>
                  <Image className="tp-zoom-in-out" src={about_star} alt="image-here" />
                </b>
                Some Technologies I Work With
              </span>
              <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 g-4">
                {tech_stack.map((item, index) => (
                  <div key={index} className="col">
                    <div 
                      className="tp-hero-2__exp-brand d-flex flex-column align-items-center justify-content-center position-relative"
                      style={{ 
                        minHeight: '140px',
                        padding: '24px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'transparent',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        const icon = card.querySelector('svg');
                        card.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        card.style.transform = 'translateY(-8px) scale(1.02)';
                        card.style.background = 'rgba(255, 255, 255, 0.03)';
                        card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                        if (icon) {
                          icon.style.transform = 'scale(1.15)';
                          icon.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        const icon = card.querySelector('svg');
                        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        card.style.transform = 'translateY(0) scale(1)';
                        card.style.background = 'transparent';
                        card.style.boxShadow = 'none';
                        if (icon) {
                          icon.style.transform = 'scale(1)';
                        }
                      }}
                    >
                      <div 
                        style={{ 
                          marginBottom: '12px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {item.icon}
                      </div>
                      <span 
                        style={{ 
                          fontSize: '13px', 
                          color: 'rgba(255, 255, 255, 0.7)', 
                          textAlign: 'center',
                          lineHeight: '1.4',
                          fontWeight: '400',
                          fontFamily: 'var(--tp-ff-dmsans, sans-serif)',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeTwo;

