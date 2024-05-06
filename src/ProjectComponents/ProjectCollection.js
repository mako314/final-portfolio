import React, {useContext} from 'react';
import ProjectCard from "./ProjectCard";
import {ThemeContext} from '../PortfolioComponents/ThemeContext'

function ProjectCollection() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-[#FAFAFA]'} dark:bg-gray-800 py-6 sm:py-8 lg:py-12`}> {/* Light background for the component */}
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className={`mb-4 text-center text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} dark:text-white md:mb-6 lg:text-3xl`}> {/* Deep Twilight Blue for headers */}
                        Project Portfolio
                    </h2>
                    <p className={`mx-auto max-w-screen-md text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} dark:text-gray-400 md:text-lg`}>A Glimpse into some of the projects I've tackled</p>
                </div>
                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    <ProjectCard/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCollection;
