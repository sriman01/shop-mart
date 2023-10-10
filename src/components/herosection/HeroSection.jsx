import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

const HeroSection = () => {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <div>
        <img src={`${mode === 'dark' ? '/hero-dark.png' : '/hero-light.png'}`} alt="" />
    </div>
  );
};

export default HeroSection;
