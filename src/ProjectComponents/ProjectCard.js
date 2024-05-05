import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
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
  const { theme, toggleTheme } = useContext(ThemeContext);
    return(
      <>
        <div>
        <Link to="/EquipMe" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} group relative mb-2 block h-96 overflow-hidden rounded-lg shadow-lg lg:mb-3`}>
          <img src={equipmeHome} loading="lazy" alt="EquipMe Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">React</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Python</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Flask</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Flask JWT</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Stripe API</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Google API</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Chart JS</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">SQLAlchemy</span>

            
          </div>
        </Link>

        <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} shadow rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://www.equipme.live" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} transition duration-100 hover:text-${theme === 'dark' ? 'gray-400' : 'gray-500'} lg:text-xl`}>EquipMe</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'} text-sm`}>Discover a world of possibilities with EquipMe, where renting the right equipment for your project has never been easier. 
            <br/> <br/> 
            *** Clicking the title will take you to an external site: EquipMe - Hosted on Netlify.</span>
            <br/><br/> 
            <a href="https://github.com/mako314/EquipMe" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
          </div>

        </div>
      </div>

      {/* PORTFOLIO SITE 2 */}
      <div>
        <a href="/HobbyWars" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} group relative mb-2 block h-96 overflow-hidden rounded-lg shadow-lg lg:mb-3`}>
          <img src={HobbyWarsHome} loading="lazy" alt="EquipMe Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">React</span>
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Python</span>
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Flask</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">SQLAlchemy</span>
          </div>
        </a>


        <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} shadow rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://stellular-tapioca-bfc908.netlify.app/" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} transition duration-100 hover:text-${theme === 'dark' ? 'gray-400' : 'gray-500'} lg:text-xl`}>HobbyWars</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'} text-sm`}>Join the excitement of Hobby Wars and discover a platform where you can compete, connect with like-minded individuals, and showcase your creative prowess. 
            
            <br/><br/> 
            *** Clicking the title will take you to an external site: HobbyWars - Hosted on Netlify.
            <br/><br/> 
            <a href="https://github.com/mako314/HobbyWars" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
            </span>
          </div>

        </div>
      </div>



      {/* PORTFOLIO SITE 3 */}

      <div>
        {/* https://youtu.be/ctFBd6pSzNA */}
        {/* {Adda} */}

        <a href="https://youtu.be/ctFBd6pSzNA" target="_blank" rel="noreferrer" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} group relative mb-2 block h-96 overflow-hidden rounded-lg shadow-lg lg:mb-3`}>
          <img src={Adda} loading="lazy" alt="Adda" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Next.js</span>
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Python</span>
            <span className="rounded-lg bg-[#88BDBC] px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Flask</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">SQLAlchemy</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">OpenAI API</span>
          </div>
        </a>

        <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} shadow rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
            <a href="https://youtu.be/ctFBd6pSzNA" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} transition duration-100 hover:text-${theme === 'dark' ? 'gray-400' : 'gray-500'} lg:text-xl`}>Adda</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'} text-sm`}>Our chatbot won "Most Innovative" in the hackathon. Adda is an educational chatbot who teaches students with disabilities, born out of a two-week hackathon. 
            <br/><br/> 
            *** Clicking the title OR card will take you to an external site: YouTube.
            <br/><br/> 
            <a href="https://github.com/jsoto007/learn-link" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>
            </span>
          </div>

        </div>
        </div>

        <div>
        <a href="/NotNetflix" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} group relative mb-2 block h-96 overflow-hidden rounded-lg shadow-lg lg:mb-3`}>
          <img src={NetflixCloneHome} loading="lazy" alt="Netflix Clone Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">React</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Python</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Flask</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">Flask JWT</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">AWS S3 buckets</span>
            <span className="rounded-lg bg-[#88BDBC] px-1.5 py-0.5 text-sm font-bold uppercase tracking-wider text-white">SQLAlchemy</span>
          </div>
        </a>

        <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} shadow rounded-lg p-4 flex items-start justify-between gap-2 px-2`}>
          <div className="flex flex-col">
          <a href="https://definitely-not-netflix.netlify.app/" target="_blank" rel="noreferrer" className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} transition duration-100 hover:text-${theme === 'dark' ? 'gray-400' : 'gray-500'} lg:text-xl`}>Definitely Not Netflix</a>
            <span className={`text-${theme === 'dark' ? 'gray-400' : 'gray-500'} text-sm`}>A Work in Progress. <br/><br/> As part of a team of two, I have been solely responsible for the front-end development of a full stack application organized by GrammerHub. The project involves hosting content on AWS (videos) and creating a simple mapped searchable site.
             <br/> <br/> *** Clicking the title will take you to an external site (DefinitelyNotNetflix - Hosted on Netlify).</span>
             <br/><br/> 
          <a href="https://github.com/mako314/netflix-final" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600">Github</a>

          </div>

        </div>
        
        </div>

      </>
    )
}

export default ProjectCard;