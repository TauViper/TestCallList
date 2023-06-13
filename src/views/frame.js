import React from 'react';

// import { Helmet } from 'react-helmet';

import './frame.css';
// import "../Header/Header.module.css";
import { Header } from '../Header/Header';
import { NavBar } from '../NavBar/NavBar';
import { Filters } from '../Filters/Filters';
import { Calls } from '../Calls/Calls';
import { Calendar } from '../Calendar/Calendar';
import { Balance } from '../Balance/Balance';

const Frame = () => {
  return (
    <div className='frame-container'>
      {/* <Helmet>
        <title>exported project</title>
      </Helmet> */}
      <div className='frame-frame'>
        <Header />
        <img
          src='/external/rectangle16561183-6fh-300w.png'
          alt='Rectangle16561183'
          className='frame-rectangle1656'
        />
        <NavBar />
        <div className='frame-content'>
          <Calendar />
          <Filters />
          <Calls />
          <Balance />
        </div>
      </div>
    </div>
  );
};

export default Frame;
