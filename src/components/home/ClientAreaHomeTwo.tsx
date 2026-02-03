'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import NextIconHomeTwo from '@/svg/home-2/NextIconHomeTwo';
import PrevIconHomeOne from '@/svg/home-2/PrevIconHomeOne';

import start_icon_1 from '@/assets/img/testimonial/testi-star.png';
import start_icon_2 from '@/assets/img/testimonial/testimonia-2-1.png';

interface DataType {
  title: React.JSX.Element;
  btn_text: string;
  review_text: React.JSX.Element;
  review_data: {
    id: number;
    name: string;
    designation: string;
    review: string;
  }[];
}

const client_content: DataType = {
  title: <>What <br /> Our Client Says</>,
  btn_text: "BECOME A CLIENT",
  review_text: <>Worked with more than 30+ projects <br /> with more than 10 clients</>,

  review_data: [
    {
      id: 1,
      name: "Shahzad Ahmed",
      designation: "CEO, Programming Studio (Pakistan)",
      review:
        "Ali worked with us for 1 year and handled projects single-handedly. Thanks to his work, we earned several high-value contracts. Truly talented and reliable.",
    },
    {
      id: 2,
      name: "John Miller",
      designation: "CTO, SmartSolutions (USA)",
      review:
        "Ali is a pro. Our web app using Next.js and React performs flawlessly. He's reliable and easy to work with.",
    },
    {
      id: 3,
      name: "Lisa Carter",
      designation: "Project Manager, WebWorks (USA)",
      review:
        "I'm impressed with Ali's work. The integrations with Stripe and AI agents were done perfectly. Highly recommend.",
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Entrepreneur (USA)",
      review:
        "From design to deployment, Ali delivered more than expected. The app is smooth, fast, and scalable.",
    },
    {
      id: 5,
      name: "Pierre Dupont",
      designation: "CEO, TechLab (France)",
      review:
        "Ali a livré notre projet MERN avec excellence. Le système est performant et répond exactement à nos besoins.",
    },
    {
      id: 6,
      name: "Amélie Laurent",
      designation: "Product Owner, InnovAI (France)",
      review:
        "Truly skilled! Ali handled our AI integrations and backend flawlessly. Very professional and responsive.",
    },
    {
      id: 7,
      name: "Klaus Meyer",
      designation: "CTO, DataSystems (Germany)",
      review:
        "Ali hat unsere Plattform mit Node.js und PostgreSQL optimiert. Sehr kompetent und termintreu.",
    },
    {
      id: 8,
      name: "Hiro Tanaka",
      designation: "Founder, GlobalTech (Japan)",
      review:
        "Excellent developer! Ali delivered a fast, secure, and fully functional web application with smooth integrations.",
    },
  ],
};
const { title, btn_text, review_text, review_data } = client_content;

const ClientAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-6 d-flex align-items-start justify-content-center p-relative z-index-1 fix">
          <div className="tp-testimonial-2__star-shape">
            <Image src={start_icon_1} alt="image-here" />
          </div>
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="container">
            <div className="tp-testimonial-2__title-wrap">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="tp-testimonial-2__title-box">
                    <h4 className="tp-testimonial-2__title">{title}</h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="tp-testimonial-2__arrow-box text-end d-flex align-items-center justify-content-end">
                    <button className="tp-testimonial-2__slider-next tp-hover-arrow-down">
                      <span>
                        <NextIconHomeTwo />
                        <NextIconHomeTwo />
                      </span>
                    </button>
                    <button className="tp-testimonial-2__slider-prev tp-hover-arrow-up">
                      <span>
                        <PrevIconHomeOne />
                        <PrevIconHomeOne />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-5">
                <div className="tp-testimonial-2__left-box">
                  <div className="tp-testimonial-2__btn-box ">
                    <div className="parallax-wrap d-inline-block">
                      <div className="parallax-element">
                        <a className="tp-btn-pink " href="#">
                          <span>
                            <svg
                              className="icon-1"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 10.9995L11 0.999512"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 0.999512H11V10.9995"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span data-hover="BECOME A CLIENT">{btn_text}</span>
                        </a>
                      </div>
                    </div>
                    <span className="tp-testimonial-2__review-text">{review_text}</span>
                  </div>
                  <div className="tp-testimonial-2__shape-img text-center">
                    <Image src={start_icon_2} alt="image-here" />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-7">
                <div className="tp-testimonial-2__slider-wrapper">
                  <Swiper
                    loop={false}
                    speed={1200}
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    autoplay={{
                      delay: 3000,
                    }}
                    navigation={{
                      prevEl: ".tp-testimonial-2__slider-next",
                      nextEl: ".tp-testimonial-2__slider-prev",
                    }}
                    className="swiper-container tp-testimonial-2__slider-active"
                  >
                    {review_data.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="tp-testimonial-2__slider-item">
                          <div className="tp-testimonial-2__slider-text">
                            <p>{item.review}</p>
                          </div>
                          <div className="tp-testimonial-2__author d-flex align-items-center">
                            <div className="tp-testimonial-2__author-info">
                              <h4 className="tp-testimonial-2__author-title">{item.name}</h4>
                              <span>{item.designation}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientAreaHomeTwo;

