import React from 'react';
import LandingInfo from './LandingInfo';
import LandingAbout from './LandingAboutUs';
import Using from './Using';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <LandingInfo />
      <LandingAbout />
      <Using />
      <Footer />
    </>
  );
}

export default LandingPage;
