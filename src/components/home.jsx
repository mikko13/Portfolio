// src/components/Home.js
import React from 'react';
import IntroText from './home-components/IntroText';
import ContactButton from './home-components/ContactButton';
import HomeImage from './home-components/HomeImage';

const Home = () => {
    return (
      <div className="home-background flex flex-col items-center justify-center mt-14 px-4 md:px-12">
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          <div className="flex flex-col items-center md:items-start">
            <IntroText />
            <ContactButton />
          </div>
          <HomeImage />
        </section>
      </div>
    );
  };
  
  export default Home;
