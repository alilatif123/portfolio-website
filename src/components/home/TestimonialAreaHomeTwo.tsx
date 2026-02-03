'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import testimonial_data from '@/data/TestimonialData';

import shape1 from "@/assets/img/portfolio/shape-3.png";

const TestimonialAreaHomeTwo = () => {
  const hoverTextRefs: React.RefObject<HTMLDivElement | null>[] | any = [];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs[index];

    if (hoverTextRef.current) {
      const item = hoverTextRef.current.getBoundingClientRect();
      const x = e.clientX - item.left;
      const y = e.clientY - item.top;

      const children = hoverTextRef.current.children;
      if (children[0] && children[0].children[2]) {
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  const openGallery = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = useCallback(() => {
    if (selectedProject !== null) {
      const project = testimonial_data.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery_images.length);
      }
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject !== null) {
      const project = testimonial_data.find((p) => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery_images.length) % project.gallery_images.length);
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    const tp3dSlideWrapper = document.getElementById('tp-3d-slide-wrapper');
    if (!tp3dSlideWrapper) return;

    const dir = document.documentElement.getAttribute('dir');
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      endX = event.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = endX - startX;
      const sensitivity = 50;

      if (Math.abs(deltaX) > sensitivity) {
        if ((dir === 'rtl' && deltaX < 0) || (dir !== 'rtl' && deltaX > 0)) {
          setActiveIndex((prev) => (prev + 1) % testimonial_data.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + testimonial_data.length) % testimonial_data.length);
        }
      }
    };

    tp3dSlideWrapper.addEventListener('touchstart', handleTouchStart);
    tp3dSlideWrapper.addEventListener('touchend', handleTouchEnd);

    const numberOfSlides = document.querySelectorAll('.tp-3d-slide').length;

    const handleArrowClick = (direction: 'left' | 'right') => {
      const nextIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
      if (nextIndex < 0) {
        setActiveIndex(numberOfSlides - 1);
      } else if (nextIndex >= numberOfSlides) {
        setActiveIndex(0);
      } else {
        setActiveIndex(nextIndex);
      }
    };

    const updateSlides = () => {
      const slides = document.querySelectorAll('.tp-3d-slide');

      slides.forEach((slide, index) => {
        const classes = ['prev-1', 'prev-2', 'active', 'next-1', 'next-2'];
        slide.classList.remove(...classes);

        if (index === activeIndex) {
          slide.classList.add('active');
        } else if (index === activeIndex - 1 || (activeIndex === 0 && index === numberOfSlides - 1)) {
          slide.classList.add('prev-1');
        } else if (index === activeIndex - 2 || (activeIndex === 0 && index === numberOfSlides - 2) || (activeIndex === 1 && index === numberOfSlides - 1)) {
          slide.classList.add('prev-2');
        } else if (index === activeIndex + 1 || (activeIndex === numberOfSlides - 1 && index === 0)) {
          slide.classList.add('next-1');
        } else if (index === activeIndex + 2 || (activeIndex === numberOfSlides - 1 && index === 1) || (activeIndex === numberOfSlides - 2 && index === 0)) {
          slide.classList.add('next-2');
        }
      });
    };

    const handleArrowClickWrapper = (direction: 'left' | 'right') => {
      handleArrowClick(direction);
    };

    document.querySelectorAll('.tp-3d-slide-arrow-right').forEach((arrow) => {
      arrow.addEventListener('click', () => handleArrowClickWrapper('right'));
    });

    document.querySelectorAll('.tp-3d-slide-arrow-left').forEach((arrow) => {
      arrow.addEventListener('click', () => handleArrowClickWrapper('left'));
    });

    updateSlides();

    return () => {
      tp3dSlideWrapper.removeEventListener('touchstart', handleTouchStart);
      tp3dSlideWrapper.removeEventListener('touchend', handleTouchEnd);
      document.querySelectorAll('.tp-3d-slide-arrow-right').forEach((arrow) => {
        arrow.removeEventListener('click', () => handleArrowClickWrapper('right'));
      });
      document.querySelectorAll('.tp-3d-slide-arrow-left').forEach((arrow) => {
        arrow.removeEventListener('click', () => handleArrowClickWrapper('left'));
      });
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject !== null) {
        if (e.key === 'Escape') {
          closeGallery();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    // Touch swipe support for modal
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (selectedProject !== null) {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            nextImage();
          } else {
            prevImage();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [selectedProject, currentImageIndex, nextImage, prevImage]);

  const selectedProjectData = selectedProject !== null ? testimonial_data.find((p) => p.id === selectedProject) : null;

  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-6 d-flex align-items-center justify-content-start p-relative z-index-1 fix">
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="tp-portfolio-shape">
            <Image className="tp-portfolio-shape-2-1 tp-zoom-in-out" src={shape1} alt="image-here" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-3d-slide-container">
                  <span className="tp-3d-slide-arrow tp-3d-slide-arrow-left z-index-9">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  <span className="tp-3d-slide-arrow tp-3d-slide-arrow-right z-index-9">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  <div className="tp-3d-slide-wrapper" id="tp-3d-slide-wrapper">
                    {testimonial_data.map((item, index) => (
                      <div
                        key={item.id}
                        className="tp-3d-slide tp-hover-reveal-text"
                        ref={(element) => {
                          hoverTextRefs[index] = React.createRef();
                          hoverTextRefs[index].current = element;
                        }}
                        onMouseMove={(e) => moveText(e, index)}
                      >
                        <div
                          className="tp-portfolio-item-2 include-bg"
                          style={{
                            backgroundImage: `url(${item.cover_img.src})`,
                          }}
                          onClick={() => openGallery(item.id)}
                        >
                          <div className="tp-portfolio-meta-2">
                            <span>Portfolio</span>
                            <span>{new Date().getFullYear()}</span>
                          </div>
                          <h3 className="tp-portfolio-title-2">{item.project_name}</h3>
                          <div className="tp-portfolio-view tp-portfolio-view-btn">
                            <span>
                              View <br /> Gallery
                            </span>
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

      {/* Gallery Modal */}
      {selectedProject !== null && selectedProjectData && (
        <div
          className="portfolio-gallery-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeGallery}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideIn {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>
          <div
            style={{
              position: 'relative',
              maxWidth: '1400px',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeGallery}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                fontSize: '32px',
                cursor: 'pointer',
                zIndex: 100000,
                padding: '12px 18px',
                lineHeight: 1,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                fontWeight: 300,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Previous Button */}
            {selectedProjectData.gallery_images.length > 1 && (
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '18px 22px',
                  borderRadius: '50%',
                  zIndex: 100000,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                ‹
              </button>
            )}

            {/* Image Container */}
            <div 
              style={{ 
                position: 'relative', 
                maxWidth: '100%', 
                maxHeight: '100%',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'slideIn 0.3s ease',
              }}
            >
              <Image
                src={selectedProjectData.gallery_images[currentImageIndex]}
                alt={`${selectedProjectData.project_name} - Image ${currentImageIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
                width={1400}
                height={900}
                priority
              />
            </div>

            {/* Next Button */}
            {selectedProjectData.gallery_images.length > 1 && (
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer',
                  padding: '18px 22px',
                  borderRadius: '50%',
                  zIndex: 100000,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                ›
              </button>
            )}

            {/* Bottom Info Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(20px)',
                padding: '16px 32px',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Image Counter */}
              <div
                style={{
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '1px',
                }}
              >
                {currentImageIndex + 1} / {selectedProjectData.gallery_images.length}
              </div>

              {/* Divider */}
              <div
                style={{
                  width: '1px',
                  height: '20px',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              />

              {/* Project Link */}
              <a
                href={selectedProjectData.project_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff6b9d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#fff';
                }}
              >
                Visit {selectedProjectData.project_name}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                  <path d="M6 3H13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialAreaHomeTwo;
