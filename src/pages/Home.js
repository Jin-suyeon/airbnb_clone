import React from 'react';
import '../styles/Home.css';

import CoronaNotice from '..';
import FooterBottom from './main/FooterBottom';
import FooterTop from './main/FooterTop';
import Header from './main/Header';
import MainBanner from './main/MainBanner';
import TravelDestination from './main/TravelDestination';
import TravelExperience from './main/TravelExperience';
import TravelHosting from './main/TravelHosting';
import TravelIdea from './main/TravelIdea';
import TravelStay from './main/TravelStay';

function Home() {
  return (
    <div className='home'>
      <div className='home_mainBanner_img'>
        <img
          className='MainBanner_img'
          src='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=2560'
          alt='MainBanner'
        />
        <img
          className='MainBanner_img2'
          src='img/MainBanner.jpeg'
          alt='MainBanner2'
        />
      </div>

      <div className='home_main_top'>
        <CoronaNotice />
        <Header />
      </div>

      <div className='home_mainbanner'>
        <MainBanner />
      </div>

      <div className='home_main_bottom'>
        <TravelDestination />
        <TravelStay />
        <TravelIdea />
        <TravelExperience />
        <TravelHosting />
      </div>

      <div className='home_footer'>
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Home;
