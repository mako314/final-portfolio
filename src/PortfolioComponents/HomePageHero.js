import React from "react";

function HomePageHero(){

    return(
        <div className="container px-6 py-16 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>
                </div>

                <div className="w-full lg:w-1/2 lg:pl-6">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Hello! My name is Macolister Bispo <br /><span className="text-blue-500">A Full Stack Developer</span></h1>
                        
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                            Passionate about tech, currently immersed in projects utilizing Next.js, PostgreSQL, AWS, Tailwind, TypeScript, and various APIs.
                        </p>

                        <a href="/contact" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get in touch</button>
                        
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageHero;
