"use client";
import React, { useState, useEffect } from 'react';
import { FaTimes, FaHammer } from 'react-icons/fa';

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show banner on every page load/refresh
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // Find all header elements
      const headers = document.querySelectorAll('header, .tp-header-area, .tp-header-2__area, .tp-header-3__area, .tp-header-2__main-menu');
      
      if (isVisible) {
        // Hide header when banner is visible
        headers.forEach((header: Element) => {
          const htmlHeader = header as HTMLElement;
          htmlHeader.style.display = 'none';
          htmlHeader.style.visibility = 'hidden';
          htmlHeader.style.opacity = '0';
        });
      } else {
        // Show header when banner is closed
        headers.forEach((header: Element) => {
          const htmlHeader = header as HTMLElement;
          htmlHeader.style.display = '';
          htmlHeader.style.visibility = '';
          htmlHeader.style.opacity = '';
        });
      }
    }
  }, [isVisible, mounted]);

  const handleClose = () => {
    setIsVisible(false);
    // Show header when banner is closed
    if (typeof window !== 'undefined') {
      const headers = document.querySelectorAll('header, .tp-header-area, .tp-header-2__area, .tp-header-3__area, .tp-header-2__main-menu');
      headers.forEach((header: Element) => {
        const htmlHeader = header as HTMLElement;
        htmlHeader.style.display = '';
        htmlHeader.style.visibility = '';
        htmlHeader.style.opacity = '';
      });
    }
  };

  if (!mounted || !isVisible) return null;

  return (
    <>
      <style jsx>{`
        .under-construction-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: linear-gradient(135deg, #434966 0%, #2a2f42 100%);
          border-bottom: 2px solid var(--tp-pink-2, #ff6b9d);
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.5s ease-out;
          margin: 0;
          width: 100%;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .under-construction-content {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-size: 14px;
          font-family: var(--tp-ff-dmsans, sans-serif);
        }

        .under-construction-icon {
          color: var(--tp-pink-2, #ff6b9d);
          font-size: 18px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .under-construction-text {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .under-construction-text strong {
          color: var(--tp-pink-2, #ff6b9d);
          font-weight: 600;
        }

        .under-construction-close {
          position: absolute;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .under-construction-close:hover {
          background: var(--tp-pink-2, #ff6b9d);
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .under-construction-banner {
            padding: 12px 15px;
            padding-right: 45px;
            min-height: 50px;
          }

          .under-construction-content {
            font-size: 12px;
            gap: 10px;
            flex-wrap: wrap;
          }

          .under-construction-icon {
            font-size: 20px;
            flex-shrink: 0;
          }

          .under-construction-text {
            flex: 1;
            min-width: 0;
          }

          .under-construction-close {
            right: 15px;
            width: 24px;
            height: 24px;
            font-size: 14px;
          }
        }
      `}</style>
      <div className="under-construction-banner">
        <div className="under-construction-content">
          <FaHammer className="under-construction-icon" />
          <div className="under-construction-text">
            <strong>Under Construction:</strong>
            <span>We're currently working on improving this website. Some features may be unavailable.</span>
          </div>
        </div>
        <button
          className="under-construction-close"
          onClick={handleClose}
          aria-label="Close banner"
        >
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default UnderConstruction;
