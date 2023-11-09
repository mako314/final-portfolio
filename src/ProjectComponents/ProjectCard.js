import React from "react";

function ProjectCard(){
    return(
        <div>
        <a href="#" className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          {/* <div className="absolute left-0 bottom-2 flex gap-2">
            <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
          </div> */}
        </a>

        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Fancy Outfit</a>
            <span className="text-gray-500">by Fancy Brand</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
            <span className="text-sm text-red-500 line-through">$39.99</span>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard;