import React from "react";
import { Link} from 'react-router-dom';
//EquipMe Photos
import equipmeHome from '../Assets/ProjectImages/EquipMe/equipmeHome.PNG'

//HobbyWar Photos
import HobbyWarsHome from '../Assets/ProjectImages/HobbyWars/HobbyWarsHome.PNG'

function ProjectCard(){
    return(
      <>
        <div>
        <Link to="/EquipMe" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={equipmeHome} loading="lazy" alt="EquipMe Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex gap-2">
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">React</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Python</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Flask</span>
          </div>
        </Link>

        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a href="https://www.equipme.live" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">EquipMe</a>
            <span className="text-gray-500">"Discover a world of possibilities with EquipMe, where renting the right equipment for your project has never been easier."</span>
          </div>

        </div>
      </div>

      {/* PORTFOLIO SITE 2 */}
      <div>
        <a href="/HobbyWars" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src={HobbyWarsHome} loading="lazy" alt="EquipMe Home Page" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />
          <div className="absolute px-3 left-0 bottom-2 flex gap-2">
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">React</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Python</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">Flask</span>
          </div>
        </a>

        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a href="https://github.com/mako314/HobbyWars" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">HobbyWars</a>
            <span className="text-gray-500">"Join the excitement of Hobby Wars and discover a platform where you can compete, connect with like-minded individuals, and showcase your creative prowess."</span>
          </div>

        </div>
      </div>

      </>
    )
}

export default ProjectCard;