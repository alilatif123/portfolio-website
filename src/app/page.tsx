import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Home from '@/components/home';

export const metadata = {
  title: "Ali Latif - Full Stack Developer & Software Engineer",
  description: "Full Stack Developer specializing in Web & Mobile Apps, AI & Automation, Backend & Databases, and Payment & Cloud integrations. Building modern, scalable solutions.",
};

const HomePage = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default HomePage;