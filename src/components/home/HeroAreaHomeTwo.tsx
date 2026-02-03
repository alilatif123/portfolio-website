import React from 'react';
import Image from 'next/image';
import hero_img_2 from "@/assets/img/hero/hero-2-img.png";
import HeroShapeHomeTwo from '@/svg/home-2/HeroShapeHomeTwo';

const HeroAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-mouse-move-section tp-hero-2__bg black-bg-3 tp-hero-2__space-1 d-flex align-items-end justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-2 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-3 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-4 tp-mouse-move-element"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-content-2">
                  <h3 className="tp-hero-title-2 text-center tp-char-animation">
                    Software
                    <br />
                    <span className="stroke-text d-flex align-items-end justify-content-center">
                      <span className="stroke-text-inner">Engineer</span>
                      <span className="location-text d-none d-lg-flex">
                        <span className="experience-badge">
                          <span className="experience-number">
                            30
                            <svg className="experience-plus-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </span>
                          <span className="experience-label">projects delivered</span>
                        </span>
                      </span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__thumb-wrap p-relative text-center">
                  <div className="tp-hero-2__thumb z-index-5">
                    <Image className="tp-mouse-move-element" src={hero_img_2} style={{ height: 'auto' }} alt="image-here" />
                  </div>
                  <div className="tp-hero-2__thumb-shape d-none d-md-block">
                    <span>
                      <HeroShapeHomeTwo />
                    </span>
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

export default HeroAreaHomeTwo;

