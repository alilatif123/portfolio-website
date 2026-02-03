"use client";
import Image from 'next/image';
import React from 'react';

import service_start from "@/assets/img/services/shape/services-shape-3.png";
import RightArrowHomeTwo from '@/svg/home-2/RightArrowHomeTwo';
import UseHoverReveal from '@/hooks/UseHoverReveal';

interface DataType {
  id: number;
  accordion_id: string;
  bg_img: string;
  question: string;
  ans: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    accordion_id: "One",
    bg_img: "/assets/img/faq/web-and-mobile.png",
    question: "Web & Mobile Apps",
    ans: "I build fast, responsive websites and cross-platform mobile apps using React, Svelte, Next.js, and Flutter/React Native. Every app is designed to deliver a smooth user experience, scale easily, and help businesses grow.",
  },
  {
    id: 2,
    accordion_id: "Two",
    bg_img: "/assets/img/faq/ai-and-automation.png",
    question: "AI & Automation",
    ans: "I create intelligent AI-powered systems and automated workflows using OpenRouter, AI Agents, and n8n. These solutions save time, optimize processes, and let your business run smarter, not harder.",
  },
  {
    id: 3,
    accordion_id: "Three",
    bg_img: "/assets/img/faq/databases.png",
    question: "Backend & Databases",
    ans: "I develop secure and scalable backends with Node.js, FastAPI, PostgreSQL, and MongoDB. From APIs to real-time communication and cloud integrations, your app will perform reliably under any load.",
  },
  {
    id: 4,
    accordion_id: "Four",
    bg_img: "/assets/img/faq/payment.png",
    question: "Payments & Cloud",
    ans: "I handle seamless integration of payment gateways like Stripe, Razorpay, and KNET, along with cloud deployment on AWS, Netlify, or Heroku. Your products will be fast, secure, and always available to users.",
  },
];

const ServiceAreaHomeTwo = () => {
  const { handleMouseMove } = UseHoverReveal();
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-3 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
            <span className="tp-hero-2__circle-4"></span>
          </div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__service-accordion">
                  <span className="tp-hero-2__service-title">
                    <Image className="tp-zoom-in-out" src={service_start} alt="image-here" />
                    OUR SERVICES
                  </span>

                  <div className="accordion" id="accordionExample">
                    {service_data.map((item, i) => (
                      <div
                        key={i}
                        className="accordion-items tp-hero-2__accordion-item tp-hover-reveal-item active"
                        onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}
                      >
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-buttons ${i === 0 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={`${i === 0 ? "true" : "false"}`}
                            aria-controls={`collapse${item.accordion_id}`}
                          >
                            <RightArrowHomeTwo />
                            {item.question}
                            <span>0{item.id}</span>
                            <span className="accordion-btn-wrap">
                              <span className="accordion-btn"></span>
                            </span>
                          </button>
                        </h2>
                        <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                        <div
                          id={`collapse${item.accordion_id}`}
                          className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.ans}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeTwo;

