import React from "react";

function HomePageHero() {
    return (
        <div className="container px-6 py-16 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-6">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-[#34568B] dark:text-white lg:text-4xl">  {/* Deep Twilight Blue for light mode, white for dark mode */}
                            Hello! My name is Macolister Bispo <br />
                            <span className="text-[#88BDBC]">A Full Stack Developer</span>  {/* Soft Seafoam Green for highlight */}
                        </h1>
                        
                        <p className="mt-3 text-[#967BB6] dark:text-[#CDDC8C]">  {/* Dusty Lavender and Muted Olive Yellow for dark mode */}
                            Passionate about tech, currently immersed in projects utilizing Next.js, PostgreSQL, AWS, Tailwind, TypeScript, and various APIs.
                        </p>

                        <a href="/contact" className="text-lg font-bold text-[#34568B] hover:text-[#A7C7E7] transition duration-100 lg:text-xl">  {/* Deep Twilight Blue and Pale Sky Blue for hover */}
                            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#88BDBC] rounded-lg lg:w-auto hover:bg-[#76a9a3] focus:outline-none focus:bg-[#76a9a3]">  {/* Soft Seafoam Green and darker variant for hover */}
                                Get in touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageHero;
