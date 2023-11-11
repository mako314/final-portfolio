import React from "react"
import equipmeHome from '../Assets/ProjectImages/EquipMe/equipmeHome.PNG'


function EquipMeDisplay(){
    return(
    <section>
  
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">

            <img src={equipmeHome} alt="EquipMe home page" className="inline-block h-full w-full max-w-[640px] object-contain" />
            
            <div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <p className="mb-6 max-w-md text-[#636262] md:mb-10 lg:mb-12"> EquipMe was founded with a simple yet powerful idea: to create a platform that connects people who need equipment for various tasks with those who have tools and machinery sitting idle. The inspiration behind EquipMe stemmed from a personal experience – observing a family member frequently seeking equipment rentals and realizing that many people may own valuable tools that often went unused.
                <br></br><br></br>
                Our mission is to make equipment rental more accessible and efficient for everyone. Whether you're a homeowner tackling a DIY project, a professional in need of specialized gear, or someone with tools gathering dust in your garage, EquipMe was built to meet your needs. We believe that by facilitating equipment sharing, we can not only save individuals time and money but also foster a stronger sense of community and collaboration among users.
                </p>
                <p className="font-bold">John Robert</p>
                <p className="text-sm text-[#636262]">Senior Webflow Developer</p>
            </div>
            </div>
        </div>
    </section>
    )
}

export default EquipMeDisplay

