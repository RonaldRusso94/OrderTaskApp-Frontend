import { useSelector } from 'react-redux';
import Link from 'next/link';
import { withRedux } from '../../lib/redux';

const Navbar = ({ toggleMobileNav, setToggleMobileNav }) => {
  const routes = useSelector((state) => state.routes);
  return (
    <>
      {console.log(toggleMobileNav)}
      {/* <!-- header --> */}
      <header className='header py-4 bg-gray-500'>
        {/* <!-- container --> */}
        <div className='container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto'>
          {/* <!-- header wrapper --> */}
          <div className='header-wrapper flex items-center justify-between'>
            {/* <!-- header logo --> */}
            <div className='header-logo'>
              <h1 className='font-semibold text-black leading-relaxed'>
                <a href=''>DigitalGold</a>
              </h1>
            </div>

            {/* <!-- mobile toggle --> */}
            <div className='toggle md:hidden'>
              <button
                onClick={() => {
                  setToggleMobileNav(true);
                }}
              >
                <svg
                  className='h-6 w-6 fill-current text-black'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
            {/* <!-- Navbar --> */}
            <navbar className='navbar hidden md:block'>
              <ul className='flex space-x-8 text-sm font-semibold'>
                <li>
                  {/* <Link href={route.href}>
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
                  </Link>{' '} */}
                </li>
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
                      </Link>{' '}
                    </li>
                  </>
                ))}
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
