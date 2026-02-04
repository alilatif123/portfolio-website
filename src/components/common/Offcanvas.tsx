
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendar } from 'react-icons/fa';

import Shape from "@/assets/img/offcanvas/bg-shape-2.png"
import MobileMenus from '@/layouts/headers/menu/mobile-menus';

const social_links = [
  {
    id: 1,
    name: "Email",
    link: "mailto:alilatif.dev@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alilatif123/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/alilatif123",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "Calendly",
    link: "https://calendly.com/chaudharyalilatif/30min",
    icon: <FaCalendar />,
  },
];


const Offcanvas = ({ showCanvas, setShowCanvas, style_bg, style_bg2 }: any) => {
  return (
    <>
      <div className={`tp-offcanvas-area  ${showCanvas ? 'opened' : ''} ${style_bg ? 'tp-offcanvas-update-bg' : ''} ${style_bg2 ? 'tp-offcanvas-update-bg-2' : ''}`}>
        <div className="tp-offcanvas-bg is-left"></div>
        <div className="tp-offcanvas-bg is-right d-none d-md-block">
          <div className="tp-offcanvas-shape">
            <Image className="tp-offcanvas-shape-1" src={Shape} alt="image" />
          </div>
        </div>
        <div className="tp-offcanvas-wrapper-2">

          <div className="tp-offcanvas-left" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div className="tp-offcanvas-left-wrap d-flex justify-content-between align-items-center" style={{ flexShrink: 0, paddingBottom: '15px' }}>

              <div className="tpoffcanvas__logo">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <span className="logo-white" style={{ 
                    color: 'white', 
                    fontSize: '22px', 
                    fontWeight: '700',
                    fontFamily: 'var(--tp-ff-kufam, sans-serif)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>Ali Latif</span>
                  <span className="logo-black" style={{ 
                    color: '#000', 
                    fontSize: '22px', 
                    fontWeight: '700',
                    fontFamily: 'var(--tp-ff-kufam, sans-serif)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>Ali Latif</span>
                </Link>
              </div>
              <div className="tp-offcanvas-close d-md-none text-end">

                <button className="tp-offcanvas-close-btn tp-offcanvas-close-btn" onClick={() => setShowCanvas(false)}>
                  <span className="text">
                    <span>close</span>
                  </span>
                  <span className="d-inline-block">
                    <span>
                      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.80859 9.80762L28.1934 28.1924" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.80859 28.1924L28.1934 9.80761" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </button>

              </div>
            </div>
            <div className="tp-main-menu-mobile menu-hover-active counter-row" style={{ flex: '1', overflowY: 'auto', minHeight: 0, paddingBottom: '10px' }}>
              <nav onClick={(e) => {
                // Close menu when clicking on links
                const target = e.target as HTMLElement;
                if (target.tagName === 'A' || target.closest('a')) {
                  setTimeout(() => {
                    setShowCanvas(false);
                  }, 300);
                }
              }}>
                <MobileMenus />
              </nav>
            </div>
            <div className="tp-offcanvas-mobile-social d-md-none" style={{ 
              flexShrink: 0,
              marginTop: '20px', 
              paddingTop: '20px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '20px'
            }}>
              <div className="tpoffcanvas__text" style={{ marginBottom: '15px' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0', fontSize: '13px' }}>Connect with me</p>
              </div>
              <div className="tpoffcanvas__social-link">
                <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
                  {social_links.map((item) => (
                    <li key={item.id} style={{ margin: 0 }}>
                      <Link 
                        href={item.link} 
                        target="_blank" 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          fontSize: '13px',
                          transition: 'color 0.3s ease',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--tp-pink-2)';
                          e.currentTarget.style.borderColor = 'var(--tp-pink-2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <span style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="tp-offcanvas-right d-none d-md-block">
            <div className="tp-offcanvas-close text-end">
              <button className="tp-offcanvas-close-btn tp-offcanvas-close-btn" onClick={() => setShowCanvas(false)}>
                <span className="text">
                  <span>close</span>
                </span>

                <span className="d-inline-block">
                  <span>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.80859 9.80762L28.1934 28.1924" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.80859 28.1924L28.1934 9.80761" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>

              </button>
            </div>
            <div className="tp-offcanvas-right-inner d-flex flex-column justify-content-between h-100">

              <div className="tpoffcanvas__right-info">
                <div className="tpoffcanvas__tel">
                  <a href="tel:+923066298090">+92 3066298090</a>
                </div>
                <div className="tpoffcanvas__mail">
                  <a href="mailto:alilatif.dev@gmail.com">
                    alilatif.dev@gmail.com</a>
                </div>
                <div className="tpoffcanvas__text">
                  <p>If in doubt. reach out.</p>
                </div>
              </div>

              <div className="tpoffcanvas__social-link">
                <ul>
                  {social_links.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offcanvas;