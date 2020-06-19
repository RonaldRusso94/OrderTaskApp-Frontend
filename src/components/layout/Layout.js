import React, { useState } from 'react';
import propTypes from 'prop-types';
import Navbar from './Navbar';
import MobileNavbar from './MobileNav';

const Layout = ({ children }) => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  return (
    <>
      <Navbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      {children}
      <MobileNavbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
