import React, { useState,useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { ReactComponent as MyLogo } from '../Assets/PortfolioImages/mako-logo.svg';
import { ReactComponent as MyLogoDarkMode } from '../Assets/PortfolioImages/mako-logo-white.svg';
import { ThemeContext } from './ThemeContext';



function Navbar(){

    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <>
        {/*<!-- Header --> */}
        <header className={`border-b-1 relative z-30 w-full  border-[#88BDBC] bg-${theme === 'dark' ? 'gray-800' : 'white/90'} shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-[#88BDBC] lg:backdrop-blur-sm lg:after:hidden`}>
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
              role="navigation"
            >
              {/*<!-- Brand logo --> */}
              <div
                id="WindUI"
                aria-label="WindUI logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              >
                <Link to="/" className='ml-8'> 
                {/* <img src={MyLogo} alt="Macolister Logo" className="h-12 w-full" /> */}
                {theme==='dark' ? <MyLogoDarkMode/> : <MyLogo/>}
                </Link>
              </div>

              
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                  ${
                    isToggleOpen
                      ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                      : ""
                  }
                `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-${theme === 'dark' ? 'white' : '[#88BDBC]'} transition-all duration-300`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-6 transform rounded-full bg-${theme === 'dark' ? 'white' : '[#88BDBC]'} transition duration-300`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-${theme === 'dark' ? 'white' : '[#88BDBC]'} transition-all duration-300`}
                  ></span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-${theme === 'dark' ? 'gray-800' : 'white/90'} px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >

                  <li role="none" className="flex items-stretch">

                  {/* https://docs.google.com/document/d/e/2PACX-1vTg3XLzEu8JYKwUNm7p3IhsWToOPtHLG_XRbcB5RF90_7wKw3wW2Tla8vWK0H1GfQ/pub */}
                    
                  <a href='https://docs.google.com/document/d/e/2PACX-1vSWiHpgF071cT-0ypLgMqQ-GgE3haQdIXMLm0sGS4GUcMh0KMoBJ9sjsFa6YrMgYvwHNLOHGlW_AVKt/pub'
                      target="_blank" 
                      rel="noreferrer"
                      role="menuitem"
                      aria-haspopup="false"
                      className={`flex items-center gap-2 py-4 transition-colors duration-300 text-${theme === 'dark' ? 'white' : '[#34568B]'}  hover:text-[#88BDBC] focus:text-[#88BDBC] focus:outline-none focus-visible:outline-none lg:px-8`}  
                    >
                      Resume
                  </a>
                  </li>


                <li role="none" className="flex items-stretch">                   
                <Link to="/projects"
                    role="menuitem"
                    aria-haspopup="false"
                    className={`flex items-center gap-2 py-4 transition-colors duration-300 text-${theme === 'dark' ? 'white' : '[#34568B]'}  hover:text-[#88BDBC] focus:text-[#88BDBC] focus:outline-none focus-visible:outline-none lg:px-8`}  
                  >
                    Projects
                </Link>
                </li>

                <li role="none" className="flex items-stretch">
                  <Link to='/about_me'
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className={`flex items-center gap-2 py-4 transition-colors duration-300 text-${theme === 'dark' ? 'white' : '[#34568B]'}  hover:text-[#88BDBC] focus:text-[#88BDBC] focus:outline-none focus-visible:outline-none lg:px-8`}  
  
                  >
                    About Me
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link to="/contact"
                    role="menuitem"
                    aria-haspopup="false"
                    className={`flex items-center gap-2 py-4 transition-colors duration-300 text-${theme === 'dark' ? 'white' : '[#34568B]'}  hover:text-[#88BDBC] focus:text-[#88BDBC] focus:outline-none focus-visible:outline-none lg:px-8`}  
  
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/*      <!-- Actions --> */}
              <div className="ml-auto mr-8 flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 cursor-pointer" onClick={toggleTheme}>

                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="white" className="bi bi-brightness-high" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
                ):(
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='#88BDBC' fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
                )}



              </div>
            </nav>
          </div>
        </header>
        {/*<!-- End Navbar with Topbar--> */}
      </>
    )
}

export default Navbar