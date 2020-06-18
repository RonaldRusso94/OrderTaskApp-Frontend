import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { withRedux } from '../../lib/redux';
import UserContext from '../auth/UserContext';

const Navbar = ({ toggleMobileNav, setToggleMobileNav }) => {
  const context = useContext(UserContext);
  const { user } = context;
  console.log('user', user)
  const storeRoutes = useSelector((state) => state.routes);
  const routes = !user ? storeRoutes : storeRoutes.filter((route) => route.guest !== true);
  return (
    <>
      {/* <!-- header --> */}
      <header className="header py-3 border-b border-gray-400">
        {/* <!-- container --> */}
        <div className="container px-4 sm:px-8 lg:px-12 xl:px-20 mx-auto">
          {/* <!-- header wrapper --> */}
          <div className="header-wrapper flex items-center justify-between">
            {/* <!-- header logo --> */}
            <div className="header-logo">
              <h1 className="font-semibold text-black leading-relaxed">
                <a href="/">DigitalGold</a>
              </h1>
            </div>

            {/* <!-- mobile toggle --> */}
            <div className="toggle md:hidden">
              <button
                onClick={() => {
                  setToggleMobileNav(true);
                }}
                type="submit"
              >
                <svg
                  className="h-6 w-6 fill-current text-black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* <!-- Navbar --> */}
            <navbar className="navbar hidden md:block">
              <ul className="flex space-x-8 text-sm font-semibold items-center">
                {routes.map((route) => (
                  <>
                    <li>
                      <Link href={route.href}>
                        <a
                          href={route.href}
                          className={`${
                            route.desktopClassList
                              ? route.desktopClassList
                              : 'hover:text-orange-500'
                          }`}
                        >
                          {route.name}
                        </a>
                      </Link>
                      {' '}
                    </li>
                  </>
                ))}
                <li className="flex space-x-3">
                  <img
                    src="https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204"
                    alt="user avatar"
                    width="50px"
                    className="cursor-pointer opacity-75 hover:opacity-100 duration-150"
                  />
                  <div>
                    <span className="block">{user.username}</span>
                    <span className="text-xs text-gray-500">UI Designer</span>
                  </div>
                </li>
              </ul>
            </navbar>
          </div>
        </div>
      </header>
      {/* <!-- end header --> */}
    </>
  );
};

export default withRedux(Navbar);
