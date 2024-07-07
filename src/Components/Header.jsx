import React from 'react';
import netflixLogo from "../assets/netflixlogo.png";

const Header = () => {
  return (
    <div className='w-full h-20 bg-gradient-to-b from-black absolute flex justify-center sm:justify-start items-center px-4 sm:px-8'>
      <img className="h-10 sm:h-14 md:h-16 lg:h-18 xl:h-20" src={netflixLogo} alt="Netflix Logo" />
    </div>
  );
}

export default Header;
