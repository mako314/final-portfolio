import React from 'react';

import profilePhoto from '../Assets/ProjectImages/Me/IMG_4635.jpg'

function AboutMe(){

    console.log("You're in aboutme")


    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
                    
                    <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={profilePhoto} alt="Macolister Bispo" />
                        
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">Macolister Bispo</p>
                                <p className="text-blue-200 ">Fullstack Developer</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> Experienced Python developer with expertise in Flask, JavaScript, and React. Proven track record in project success and team leadership. Graduate of Flatiron School's Software Engineering program. Experince with administrative and inventory management. Passionate about merging technology and creativity.</p>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default AboutMe;