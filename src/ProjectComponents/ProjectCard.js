import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//EquipMe Photos
import equipmeHome from '../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

//HobbyWar Photos
import HobbyWarsHome from '../Assets/ProjectImages/HobbyWars/HobbyWarsHome.PNG'

// Adda Photos
import Adda from '../Assets/ProjectImages/Adda/Adda.PNG'

// Netflix Clone Photos
import NetflixCloneHome from '../Assets/ProjectImages/NetflixClone/NotNetflxHome.PNG'

// Dark Mode
import {ThemeContext} from '../PortfolioComponents/ThemeContext'


function ProjectCard(){
  const {theme} = useContext(ThemeContext);
    return(
      <>
        <div className={`border-2 border-[#88BDBC] rounded-xl shadow-sm bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} `}>
        <Link to="/EquipMe" className="group relative mb-2 flex flex-col overflow-hidden rounded-lg shadow-lg lg:mb-3 items-start justify-start">
        <div className="flex-grow">
          <img src={equipmeHome} loading="lazy" alt="EquipMe Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
        </div>
          <div className="flex flex-wrap gap-2 px-3 py-2">
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>React</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Python</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask JWT</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Stripe API</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Google API</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Chart JS</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>SQLAlchemy</span>

            
          </div>
        </Link>

        <div className={`rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://www.equipme.live" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-600' : 'text-[#34568B]'}  transition duration-100 hover:text-${theme === 'dark' ? 'gray-400 hover:text-gray-400' : 'gray-500'} lg:text-xl underline mb-2 hover:text-blue-800 visited:text-purple-600`}>EquipMe</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'}  text-sm`}>Discover a world of possibilities with EquipMe, where renting the right equipment for your project has never been easier. .</span>
            <br/><br/> 
            <a href="https://github.com/mako314/EquipMe" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
          </div>
        </div>
      </div>

      {/* PORTFOLIO SITE 2 */}
      <div className={`border-2 border-[#88BDBC] rounded-xl shadow-sm bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} `}>
        <Link to="/HobbyWars" className="group relative mb-2 flex flex-col overflow-hidden rounded-lg shadow-lg lg:mb-3 items-start justify-start">

           <div className="flex-grow">
          <img src={HobbyWarsHome} loading="lazy" alt="HobbyWars Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-105" />

          </div>
          <div className="flex flex-wrap gap-2 px-3 py-2">
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>React</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Python</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>SQLAlchemy</span>
          </div>
        </Link>


        <div className={`rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://stellular-tapioca-bfc908.netlify.app/" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-600' : 'text-[#34568B]'}  transition duration-100 hover:text-${theme === 'dark' ? 'gray-400 hover:text-gray-400' : 'gray-500'} lg:text-xl underline mb-2 hover:text-blue-800 visited:text-purple-600`}>HobbyWars</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'}  text-sm`}>Join the excitement of Hobby Wars and discover a platform where you can compete, connect with like-minded individuals, and showcase your creative prowess. 
            
            <br/><br/> 
            <a href="https://github.com/mako314/HobbyWars" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
            </span>
          </div>

        </div>
      </div>



      {/* PORTFOLIO SITE 3 */}

      <div className={`border-2 border-[#88BDBC] rounded-xl shadow-sm bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} `}>
        {/* https://youtu.be/ctFBd6pSzNA */}
        {/* {Adda} */}

        <a href="https://youtu.be/ctFBd6pSzNA" target="_blank" rel="noreferrer" className="group relative mb-2 flex flex-col overflow-hidden rounded-lg shadow-lg lg:mb-3">
        <div className="flex-grow">
          <img src={Adda} loading="lazy" alt="Adda" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-105" />
        </div>

        <div className="flex flex-wrap gap-2 px-3 py-2">
          <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Next.js</span>
          <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Python</span>
          <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask</span>
          <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>SQLAlchemy</span>
          <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>OpenAI API</span>
        </div>
      </a>

        <div className={`rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://youtu.be/ctFBd6pSzNA" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-600' : 'text-[#34568B]'}  transition duration-100 hover:text-${theme === 'dark' ? 'gray-400 hover:text-gray-400' : 'gray-500'} lg:text-xl underline mb-2 hover:text-blue-800 visited:text-purple-600`}>Adda</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'}  text-sm`}>Our chatbot won "Most Innovative" in the hackathon. Adda is an educational chatbot who teaches students with disabilities, born out of a two-week hackathon. 
            <br/><br/> 
            <a href="https://github.com/jsoto007/learn-link" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
            </span>
          </div>

        </div>
        </div>

      {/* PORTFOLIO SITE 4 */}
        <div className={`border-2 border-[#88BDBC] rounded-xl shadow-sm bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} `}>
        {/* I think href is resetting state, might move to make only href the youtube link one */}
        <Link to="/NotNetflix" className=" group relative mb-2 flex flex-col overflow-hidden rounded-lg shadow-lg lg:mb-3 items-start justify-start">
        <div className="flex-grow">
        <img src={NetflixCloneHome} loading="lazy" alt="Netflix Clone Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />

        </div>
          <div className="flex flex-wrap gap-2 px-3 py-2">
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>React</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Python</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>Flask JWT</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>AWS S3 buckets</span>
            <span className={`bg-${theme=== 'dark' ? 'white': '[#88BDBC]'} rounded-lg px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-${theme === 'dark' ? 'text-gray-800' : 'white'}`}>SQLAlchemy</span>
          </div>
        </Link>

        <div className={` rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
          
          <a href="https://2024movies.netlify.app/" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-600' : 'text-[#34568B]'}  transition duration-100 hover:text-${theme === 'dark' ? 'gray-400 hover:text-gray-400' : 'gray-500'} lg:text-xl underline mb-2 hover:text-blue-800 visited:text-purple-600`}>Definitely Not Netflix</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'} text-sm mb-2`}>A Work in Progress. <br/><br/> As part of a team of two, I have been solely responsible for the front-end development of a full stack application organized by GrammerHub. The project involves hosting content on AWS (videos) and creating a simple mapped searchable site.
            </span>
             
          <a href="https://github.com/mako314/netflix-final" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>

          </div>

        </div>
        
        </div>

      </>
    )
}

export default ProjectCard;