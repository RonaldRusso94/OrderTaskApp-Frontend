import react, { useState } from 'react';
import Navbar from './Navbar';

import MobileNavbar from './MobileNav';

const Layout = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  return (
    <>
      <Navbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      <MobileNavbar
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
    </>
  );
};

export default Layout;
