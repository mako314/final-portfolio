import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from './ThemeContext';

import profilePhoto from '../Assets/ProjectImages/Me/IMG_4635.jpg'
import smallProfilePhoto from '../Assets/PortfolioImages/mako-mobile.png'

function AboutMe(){
    const {theme} = useContext(ThemeContext);
    const [imageSrc, setImageSrc] = useState(profilePhoto); // Default to the larger image

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // Assuming 'sm' breakpoint at 640px
                setImageSrc(smallProfilePhoto);
            } else {
                setImageSrc(profilePhoto);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize correct image based on current window size

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <section className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'}`}>
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <div className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-[#88BDBC] -z-10 md:h-96 rounded-2xl"></div>
                    
                    <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl md:mt-4" src={imageSrc} alt="Macolister Bispo" />
                        
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">Macolister Bispo</p>
                                <p className="text-white ">Fullstack Developer</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> Software Engineer with a passion for merging technology and creativity. I have a proven track record of success in project management and team leadership. Proficient in Python, Flask, JavaScript, and React, and am always eager to learn new technologies. Grew up loving video games, and still enjoy them today. Enjoyer of reading, yoga, BJJ, language learning, and a good discussion. I am always trying new things and always looking for ways to improve myself.</p>

                            <div className="flex flex-row mt-4 -mx-1.5 ">
                    <a href="https://github.com/mako314" target="_blank" rel="noreferrer" aria-label="Github" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${theme === 'dark' ? 'white' : '#181717'} `} className="bi bi-github ml-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/macolister/" target="_blank" rel="noreferrer" aria-label="LinkedIn"  title="LinkedIn"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" className="bi bi-linkedin ml-4" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                    </a>

                    <a href="https://www.discordapp.com/users/1108126068226916393" target="_blank" rel="noreferrer" aria-label="Discord"  title="Discord">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#5865F2" className="bi bi-discord ml-4" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                          </svg>
                    </a>

                    <a href="mailto:bispo.swe@gmail.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${theme === 'dark' ? 'white' : '#181717'} `} className="bi bi-envelope-fill ml-4" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>
                      </a>    
                    </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;