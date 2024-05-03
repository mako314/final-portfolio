import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectCollection() {
    return (
        <div className="bg-[#FAFAFA] py-6 sm:py-8 lg:py-12"> {/* Light background for the component */}
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-[#34568B] md:mb-6 lg:text-3xl"> {/* Deep Twilight Blue for headers */}
                        Project Portfolio
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-[#967BB6] md:text-lg"> {/* Dusty Lavender for text */}
                        A Glimpse into some of the projects I've tackled
                    </p>
                </div>
                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    <ProjectCard/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCollection;
